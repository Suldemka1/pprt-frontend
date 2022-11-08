import { PageName } from "../../components/PageName/PageName";
import ProjectCard from "../../components/Project/Project";
import React from 'react';
import { LeftMenu, MenuItem, MobileMenu, MobileMenuItem } from "../../components/LeftMenu";
import { VscTypeHierarchySub } from "react-icons/vsc";

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.APIpath}/api/projects?populate=*`)
  const projects = await res.json()

  return {
    props: { projects: projects.data }

  }
}

export default function Projects({ projects }) {
  return (
    <>
      <PageName title='Нормотворческая деятельность государственного органа' />
      <div className="flex items-center justify-between">
        <MobileMenu className="md:hidden">
          {/* <MobileMenuItem title={'Основные задачи'} url={'/activity/main-activity'}/> */}
          <MobileMenuItem title={'Нормотворческая деятельность государственного органа'}
            url={'/projects'} />
          <MobileMenuItem title={'Функции государственного органа'} url={'/activity/functions'} />
          <MobileMenuItem title={'Перечень законов и иных нормативно-правовых актов, определяющих полномочия, задачи, функции государственного органа'} url={'/activity/npa'} />
        </MobileMenu>
      </div>

      <div className='flex xs:flex-col md:flex-row gap-5 w-full py-3'>
        <LeftMenu>
          {/* <MenuItem title={'Основные задачи'} url={'/activity/main-activity'}
                              icon_function={FaChessQueen()}/> */}
          <MenuItem title={'Нормотворческая деятельность государственного органа'} url={'/projects'}
            icon_function={VscTypeHierarchySub()} />
          <MenuItem title={'Функции государственного органа'} url={'/activity/functions'}
            icon_function={VscTypeHierarchySub()} />
          <MenuItem title={'Перечень законов и иных нормативно-правовых актов, определяющих полномочия, задачи, функции государственного органа'}
            url={'/activity/npa'} icon_function={VscTypeHierarchySub()} />
        </LeftMenu>
        <div className="xs:w-full md:w-9/12">
          {projects.length >= 1
          ?
          projects.map(item => {

            return (
              <ProjectCard
                key={item.id}
                id={item.id}
                title={item.title}
                shortDescription={item.description}
                href={`/projects/${item.id}`}
                status={item.status}
                image={item.image.url}
                documentURL={item.documentation.url}
              />
            )

          }) :
          <p>В настоящий момент Полномочным представительством Республики Тыва в г. Москве каких-
            либо проектов нормативно-правовых актов внесено не было.</p>
        }
        </div>
        

      </div>
    </>
  )
}