import press from '../../styles/press.module.scss'
import { PageName } from "../../components/PageName/PageName";
import Link from 'next/link'
import { PostCard } from '../../components/PostInfo/PostInfo';
import { useRouter } from 'next/router';
import Pagination from 'react-bootstrap/Pagination';

export const getServerSideProps = async ({ query: { page = 1 } }) => {

  const res = await fetch(`${process.env.APIpath}/api/posts?pagination[page]=${page}&pagination[pageSize]=10&sort=createdAt:desc&populate=*`);
  const data = await res.json()

  return {
    props: {
      posts: data.data,

      page: data.meta.pagination.page,
      pageSize: data.meta.pagination.pageSize,
      pageCount: data.meta.pagination.pageCount,
      total: data.meta.pagination.total
    }
  }
};

function News({ posts, page, pageSize, pageCount, total }) {

  const router = useRouter()

  let active = page
  let items = [];

  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}
        onClick={() => {
          router.push(`/news/?page=${number}`)
        }
        }>
        {number}
      </Pagination.Item>,
    );
  }

  const paginationBasic = <Pagination size="lg">{items}</Pagination>

  const datamap = posts.map((item) => {
    return (
      <Link href={`/news/${item.id}`} key={item.id} className={'news'}>
        <PostCard
          id={item.id}
          title={item.title}
          preview_image={`${process.env.APIpath}` + item.preview_image.url}
          news_preview={item.news_preview}
          body={item.body}
          // tags={item.tags.data}
          createdAt={item.createdAt
          }
        />
      </Link>
    )
  })

  return (
    <>
      <div>
        <PageName title='Новости' />
        <div className={press.news}>
          {datamap}
          {paginationBasic}
        </div>
      </div >
    </>
  );
};

export default News;