import NewsCarousel from '../components/Carousel/Carousel'
import { useRouter } from 'next/router'
import { ImageLink } from '../components/Links'
import Link from 'next/link'
import { PostCard } from '../components/PostInfo/PostInfo'


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

export default function Home({ content, news, page, pageSize, pageCount, total, links, sliderLinks }) {

  //жесткий говнокод, я опаздываю
  //считаю количество элементов пагинации и рисую их
  const router = useRouter()
  let active = page
  let items = [];

  const paginationBasic = <div size="lg" className='flex items-center justify-center'>{items}</div>

  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <button key={number} className="bg-blue-900 dark:bg-gray-500 border rounded px-3 py-2 text-white cursor-pointer" active={number === active}
        onClick={() => {
          router.push(`/?page=${number}`)
        }}>
        {number}
      </button>,
    );
  }

  //рисую главную страницу
  return (
    <>
      {/* рисует слайдер на главной странице и ссылки справа, можно не трогать, код меняется из компонента */}
      {
        NewsCarousel(content, sliderLinks)
      }


      <div className="py-5">

        <div className='flex flex-col gap-4 md:w-5/5 lg:w-4/5'>

          {news.map((item) =>
              <PostCard
                key={item.id}
                id={item.id}
                title={item.title}
                preview_image={`${process.env.APIpath}` + item.preview_image.url}
                news_preview={item.news_preview}
                body={item.body}
                createdAt={item.createdAt
                }
              />
          )}

          {paginationBasic}

        </div >

        {/* ссылки справа, тоже просто передаются данные вовнутрь */}
        <div className='xs:w-4/5 md:w-1/5'>
          {
            links.map((item) =>
              <div key={item.id}>
                <ImageLink key={item.id} image={process.env.APIpath + item.image.url} url={item.url} />
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}