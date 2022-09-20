import Image from 'next/image'
import Link from 'next/link'
import project from './project.module.scss'
import parse from 'html-react-parser'
import { PageName } from '../PageName/PageName'
import { Button } from 'react-bootstrap'

const ProjectCard = (params) => 
  <div className={project.card}>
    <div className={project.header}>
      <h3>{params.title}</h3>
    </div>

    <div className={project.body}>
      <div className='img_container_md'>
        <Image alt='some' src={process.env.APIpath + params.image} layout="fill" objectFit='cover' className='image' />
      </div>

      <div className={project.content}>
        {parse(params.shortDescription)}

        <Button href={`${process.env.APIpath}` + params.documentURL} className='button'>Паспорт программы</Button>
      </div>
    </div>

    <div className={project.footer}>
      <p>Статус: {params.status}</p>

      <Link href={params.href}><a className='button'>Подробнее</a></Link>
    </div>
  </div>



export const ProjectPages = (params) =>
  <>
    <PageName title={params.title} />
    <div className={project.page}>
      <div>
        {parse(params.description)}
      </div>
      <div><Button href={`${process.env.APIpath}` + params.documentURL} className='button'>Паспорт программы</Button></div>
    </div>
  </>


export default ProjectCard