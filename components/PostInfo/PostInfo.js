import Image from 'next/image'
import Link from 'next/link'
import {unixTimeConverter} from '../functions/unixTimeConverter'
import parser from 'html-react-parser'
import {useRouter} from "next/router";

export const PostPage = (params) => {
    const router = useRouter()
    if (!params) {
        return <h3>Empty post</h3>
    } else {
        return (
            <div className="py-3">
                <div className="text-2xl py-3">{params.title}</div>
                <div className='py-3 leading-8'>
                    <div>{parser(params.body)}</div>
                </div>
                {
                    //тернарный оператор если в новости одно изображение, то показывается изображение, а не слайдер
                    params.upload_urls.length < 2

                        ?

                        <Image
                            alt='some'
                            src={`${process.env.APIpath}` + params.upload_urls[0].url}
                            width={1280}
                            height={780}
                            // layout="fill"
                            objectFit="cover"
                            className='dark:grayscale'
                        />
                        :
                        <div className="xs:w-full md:w-2/5">
                            <div className="overflow-hidden">
                                <div className="flex">
                                    {
                                        params.upload_urls.map((item) =>

                                            <div key={item.id} className="flex-[0_0_100%]">
                                                <Image
                                                    src={`${process.env.APIpath}${item.url}`}
                                                    alt="First slide"
                                                    width={960}
                                                    height={720}
                                                    layout="responsive"
                                                    objectFit='cover'
                                                    priority
                                                    className='dark:grayscale'
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                }

                <br/>
                <button onClick={() => router.push('/news')} className="button dark:bg-gray-500">Назад к
                    новостям
                </button>
            </div>
        );
    }
}

export const PostCard = (params) => {

    if (!params) {
        return <h3>Empty post</h3>
    } else {
        return (
            <div className="flex xs:flex-col md:flex-row border-2 rounded-r" key={params.id}>

                <div className='block sm:min-w-[calc(200px)] md:min-w-[calc(400px)]'>
                    <Image alt='some' src={params.preview_image} width={300} height={200} layout="responsive"
                           objectFit="cover" className='dark:grayscale'/>
                </div>

                <div className="flex flex-col justify-between gap-3 p-3">
                    <div className="">
                        <h4 className="font-bold">{params.title}</h4>
                    </div>
                    <p>{params.news_preview}</p>

                    <div className="flex flex-row items-center justify-between">

                        <div className="flex gap-2">
                            <p className="font-bold">Дата публикации:</p>
                            {unixTimeConverter(params.createdAt)}
                        </div>

                        <Link href={`/news/${params.id}`}>
                            <a className="button dark:bg-gray-500">
                                Читать
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}