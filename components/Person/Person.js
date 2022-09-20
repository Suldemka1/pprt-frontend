import Image from "next/image"
import Link from "next/link"
import { Card, Row, Col } from "react-bootstrap"
import { PageName } from "../PageName/PageName"
import ImageViewer from 'react-simple-image-viewer'
import { useState, useCallback } from "react"
import parser from 'html-react-parser'
import styles from './person.module.scss'


export const PersonCard = (params) => {

  return (
    <div className={styles.card} key={params.id} >

      <div className={styles.header}>
        <div className='header-title'>
          <h5>{params.position}</h5>
        </div>
      </div>

      <div className={styles.body}>
        <div className="img_container_md">
          <Image alt='some' src={`${process.env.APIpath}` + params.avatar.url} layout='fill' className="image" />
        </div>

        <div className={styles.content}>
          <div>
            <p className={styles.surname}>{params.surname}</p>
            <p className={styles.name}>{params.name}</p>
            <p className={styles.patronymic}>{params.patronymic}</p>
          </div>

          <div>
            <p className="email">{params.email}</p>
            <p className="phone">{params.phone}</p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Link href={`/management/${params.id}`}><a className='button'>Перейти в профиль</a></Link>
      </div>
    </div>
  )
}

export const PersonPage = (params) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return <div>
    <PageName title={params.position} />

    <Card>

      <Card.Body>
        <Row>
          <div className="img_container_md" key={params.id}>
            <Image alt='some' src={`${process.env.APIpath}` + params.preview_image} layout="fill" objectFit="cover" className="image" />
          </div>
          <Col>
            <Card.Title>
              <h3>{params.surname} {params.name} {params.patronymic}</h3>
            </Card.Title>
            <div>
              <div>
                <h4>Образование</h4>
                <div>{parser(params.education)}</div>
              </div>

              <div>
                <h4>Биография</h4>
                <div>{parser(params.biography)}</div>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>

      <Card.Footer>
        <h4>Контактные данные</h4>
        <h5>{params.email}</h5>
        <h5>{params.phone}</h5>
      </Card.Footer>
    </Card>

    <div>

      {params.images.map((item, index) =>

        <Image
          alt="some"
          src={item}
          width={350}
          height={233}
          objectFit='cover'
          key={index}
          onClick={() => openImageViewer(index)} />
      )}
    </div>

    {
      isViewerOpen && (<ImageViewer
        src={params.images}
        currentIndex={currentImage}
        disableScroll={false}
        closeOnClickOutside={true}
        onClose={closeImageViewer}
      />)
    }
  </div>
}