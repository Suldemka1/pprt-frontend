import { PageName } from "../../components/PageName/PageName";
import Link from 'next/link'
import { useRouter } from 'next/router';
import PostCard from "../../components/Posts/PostCard";
import MainPageLayout from "../../layouts/MainPageLayout";
import StandartLayout from "../../layouts/StandartLayout";

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

  const paginationBasic = <div className='flex items-center justify-center'>{items}</div>

  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <button key={number} className="bg-blue-900 border rounded px-3 py-2 text-white cursor-pointer"
        onClick={() => {
          router.push(`/news/?page=${number}`)
        }}>
        {number}
      </button>,
    );
  }

  const datamap = posts.map((item) => {
    return (
      <PostCard
        key={item.id}
        id={item.id}
        title={item.title}
        preview_image={`${process.env.APIpath}` + item.preview_image.url}
        news_preview={item.news_preview}
        body={item.body}
        // tags={item.tags.data}
        createdAt={item.createdAt}
      />
    )
  })

  return (
    <StandartLayout>
      <PageName title='Новости' />
      <MainPageLayout>
        <div>
          <div className="flex flex-col gap-4">
            {datamap}
            {paginationBasic}
          </div>
        </div >
      </MainPageLayout>
    </StandartLayout>

  );
};

export default News;