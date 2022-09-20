import { PageName } from '../PageName/PageName'
import vacancy from './vacancy.module.scss'

export const VacancyCard = (params) =>
  <div className={vacancy.card}>
    <div className={vacancy.header}>
      <h5>{params.title}</h5>
    </div>

    <div className={vacancy.body}>
      <div className={vacancy.content}>
        <h5>{params.department}</h5>
        <h5>{params.salary}</h5>
        <p>{params.responsibilities}</p>
        <p>{params.requirements}</p>
      </div>

    </div>

    <div className={vacancy.footer}>
      <h6>Номер отдела кадров +73942225060</h6>
      <h6>email отдела кадров mineconom@rtyva.ru</h6>
    </div>
  </div>


export const VacancyPage = (params) =>
  <div className={vacancy.page}>
    <PageName title={params.title} />
    <h5>{params.department}</h5>
  </div>