import { PageName } from "../../components/PageName/PageName";
import ProjectCard from "../../components/Project/Project";

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
      <div>

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
    </>
  )
}