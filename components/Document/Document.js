import Link from "next/link"
import document from './document.module.scss'
import { Card } from 'react-bootstrap'
import { PageName } from "../PageName/PageName"
import Time from "../../classes/Time/Time"

export const DocumentCard = (params) => (
  // <div className={document.documentCard}>
  <Card>
    <Card.Header>
      <Card.Title>
        <Link href={`/documents/${params.id}`}><a>{params.name}</a></Link>
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Text>Для загрузки и печати в формате pdf: <Link href={`${process.env.APIpath}${params.url}`}>{params.name}</Link></Card.Text>
    </Card.Body>
    <Card.Footer className="d-flex">
      <div>{Time.timeConvert(params.date)}</div>
    </Card.Footer>
  </Card>
  // </div>
)

export const DocumentPage = (params) => (
  <div className={document.documentPage}>
    <PageName title={params.title} />

    <p>Для загрузки и печати в формате pdf: <Link href={`${process.env.APIpath}${params.url}`}><a>{params.title}</a></Link></p>

    <p>Дата размещения: { Time.timeConvert(params.date) }</p>

  </div>
)