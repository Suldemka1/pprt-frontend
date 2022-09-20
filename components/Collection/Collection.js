import parser from 'html-react-parser'
import Image from 'next/image'
import { Card, Row, Col } from 'react-bootstrap'
import styles from './collection.module.scss'


export const CollectionCard = (params) =>

  <Card className={styles.collection}>
    <Card.Header>
      {params.title}
    </Card.Header>

    <Card.Body>
      <Row>
        <div className="img_container_md" key={params.id}>
          <Image alt='some' src={params.image} layout="fill" objectFit="cover" className="image" />
        </div>

        <Col>{parser(params.description)}</Col>
      </Row>


    </Card.Body>
  </Card>

{/* <div className={styles.footer}>
      <Link href={`/collections/${params.id}`} ><a>Подробнее</a></Link>
    </div> */}




export const CollectionPage = (params) => <div>page</div>