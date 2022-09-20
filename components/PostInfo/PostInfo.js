import Image from 'next/image'
import Link from 'next/link'
import { Card, Carousel, Button } from 'react-bootstrap'
import news from './news.module.scss'
import { unixTimeConverter } from '../functions/unixTimeConverter'
import parser from 'html-react-parser'
import imagePreview from '../functions/imagePreview'

export const PostPage = (params) => {
  if (!params) {
    return <h3>Empty post</h3>
  }


  else {
    return (
      <>
        <div className={news.news_page}>
          <h1>{params.title}</h1>

          <div className={news.slider_container}>
            <Carousel className={news.news_slider}>
              {

                params.upload_urls.map((item) => (

                  <Carousel.Item key={item.id}>
                    <Image
                      alt='some'
                      src={`${process.env.APIpath}` + item.url}
                      width={700}
                      height={466}
                      className={news.image}
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          </div>

          <div className=''>
            <div>{parser(params.body)}</div>
          </div>

          {/* <div className={news.news_tags}> {params.tags.map((item) => <Button href={`/news/tag/${item.name}`} className={news.tag} key={item.name}>{item.name}</Button> )} </div> */}

          <Link href="/news"><a className='button'>Назад к новостям</a></Link>
        </div>
      </>
    );
  }
}

export const PostCard = (params) => {

  if (!params) {
    return <h3>Empty post</h3>
  }

  else {
    return (
      <Link href={`/news/${params.id}`} key={params.id} >
        <div className={news.news_card} >
          <Card className={news.card}>
            <Card.Header className={news.news_header}>
              <Card.Title>{params.title}</Card.Title>
            </Card.Header>

            <Card.Body className={news.news_card_body}>
              <div className='img_container_md'>
                {imagePreview(params.preview_image)}
              </div>

              <div>
                <p>{params.news_preview}</p>
              </div>
            </Card.Body>

            <Card.Footer className={news.card_footer}>
              <div>
                {/* {params.tags.map((item) => <Button href={`/news/tag/${item.name}`} className={`${news.tags}`} key={item.name}>{item.name}</Button>)} */}
              </div>
              <div>
                {unixTimeConverter(params.createdAt)}
              </div>
            </Card.Footer>
          </Card>
        </div >
      </Link>
    )
  }
}