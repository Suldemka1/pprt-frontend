import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from "next/image";
import React from "react";
import MyCarousel from "../components/MyCarousel/MyCarousel";
import PostCard from "../components/Posts/PostCard";
import MainPageLayout from '../layouts/MainPageLayout';
import StandartLayout from '../layouts/StandartLayout';

//предупреждаю, стили писал на отъебись если что пиши звони +79010177164 suldemka1@gmail.com

//получение данных с api
export const getServerSideProps = async ({ query: { page = 1 } }) => {
    const res = await fetch(`${process.env.APIpath}/api/sliders?populate=*`)
    const newsFromAPI = await fetch(`${process.env.APIpath}/api/posts?pagination[page]=${page}&pagination[pageSize]=5&sort=createdAt:desc&populate=*`)
    const imagelinks = await fetch(`${process.env.APIpath}/api/links-on-mains?populate=*`)
    const sliderLinksRes = await fetch(`${process.env.APIpath}/api/links-on-sliders?pagination[page]=1&pagination[pageSize]=3&populate=*`)

    const data = await res.json()
    const news = await newsFromAPI.json()
    const links = await imagelinks.json()
    const sliderLinks = await sliderLinksRes.json()
    return {
        props: {
            content: data.data,
            news: news.data,
            links: links.data,
            sliderLinks: sliderLinks.data,

            page: news.meta.pagination.page,
            pageSize: news.meta.pagination.pageSize,
            pageCount: news.meta.pagination.pageCount,
            total: news.meta.pagination.total
        }
    }
}

const Home = ({ content, news, page, pageSize, pageCount, total, links, sliderLinks }) => {
    //жесткий говнокод, я опаздываю
    //считаю количество элементов пагинации и рисую их
    const router = useRouter()
    let active = page
    let items = [];

    const paginationBasic = <div size="lg" className='flex items-center justify-center'>{items}</div>

    for (let number = 1; number <= pageCount; number++) {
        items.push(
            <button key={number}
                className="bg-blue-900 dark:bg-gray-500 border rounded px-3 py-2 text-white cursor-pointer"
                active={number === active}
                onClick={() => {
                    router.push(`/?page=${number}`)
                }}>
                {number}
            </button>,
        );
    }

    //рисую главную страницу
    return (
        <StandartLayout>
            <MainPageLayout>
                {/* рисует слайдер на главной странице и ссылки справа, можно не трогать, код меняется из компонента */}
                <div className="flex xs:flex-col md:flex-row gap-1">
                    <div className="xs:w-full md:w-4/5 max-w-4/5 flex flex-col overflow-hidden relative">
                        <MyCarousel content={content} />
                    </div>
                    <div className="flex xs:flex-row md:flex-col justify-between xs:w-full md:w-1/5 min-w-40 min-h-40">
                        {
                            sliderLinks.map((item) => {
                                return (
                                    <Link href={item.url} key={item.id} className="min-w-60 min-h-60 cursor-pointer">
                                        <a>
                                            <Image
                                                src={`${process.env.APIpath}${item.image.url}`}
                                                alt="First slide"
                                                width={250}
                                                height={240}
                                                layout={"responsive"}
                                                objectFit={"contain"}
                                                className="min-w-40 min-h-40 dark:grayscale cursor-pointer"
                                            />
                                        </a>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>


                <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex-row py-5">

                    <div className='flex flex-col gap-4 md:w-5/5 lg:w-4/5'>

                        {
                            news.map((item) =>
                                <PostCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    preview_image={`${process.env.APIpath}` + item.preview_image.url}
                                    news_preview={item.news_preview}
                                    body={item.body}
                                    createdAt={item.createdAt}
                                />
                            )
                        }

                        {paginationBasic}

                    </div>

                    {/* ссылки справа, тоже просто передаются данные вовнутрь */}
                    <div id="mainpagelinkmenu" className='xs:w-4/5 md:w-1/5'>
                        {
                            links.map((item) =>
                                <Link href={item.url} key={item.id}>
                                    <a>
                                        <Image alt='some' key={item.id} src={process.env.APIpath + item.image.url} width={240}
                                            height={240} />
                                    </a>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </MainPageLayout>
        </StandartLayout>

    )
}

export default Home