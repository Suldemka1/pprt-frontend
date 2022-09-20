import { Carousel, Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import styles from './carousel.module.scss'
import Link from 'next/link'

export default function NewsCarousel(params, sliderLinks) {
  return (
    <div className={styles.container}>
      <Carousel className={styles.carousel}>
        {
          params.map((item) =>

            <Carousel.Item key={item.id}>
              <Image
                src={`${process.env.APIpath}${item.image.url}`}
                alt="First slide"
                width={1280}
                height={720}
                objectFit='cover'
                priority
              />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </Carousel.Caption>
            </Carousel.Item>

          )
        }
      </Carousel>

      <div className={styles.advert}>
        {
          sliderLinks.map((item) => {
            return (
              <Link href={item.url} key={item.id}>
                <a>
                  <Image
                    src={`${process.env.APIpath}${item.image.url}`}
                    alt="First slide"
                    width={320}
                    height={240}
                  />
                </a>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}