import Head from "next/head";
import { PostPage } from "../../components/Posts/PostPage";
import MainPageLayout from "../../layouts/MainPageLayout";

export const getServerSideProps = async (context) => {
  const { id } = context.params
  const res = await fetch(`${process.env.APIpath}/api/posts/${id}?populate=*`)
  const data = await res.json()

  return {
    props: { post: data.data },
  }
};

const NewsItem = ({ post }) => (
  <MainPageLayout>
    <Head>
      <title>Новость #{post.id}</title>
    </Head>
    <PostPage
      id={post.id}
      title={post.title}
      preview_image={post.preview_image}
      images={post.images}
      body={post.body}
      tags={post.tags.data}
    />
  </MainPageLayout>
);

export default NewsItem;