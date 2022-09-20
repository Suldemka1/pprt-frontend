import { ProjectPages } from "../../components/Project/Project"

export const getServerSideProps = async (context) => {
  const { id } = context.params
  const res = await fetch(`${process.env.APIpath}/api/projects/${id}?populate=*`)
  const project = await res.json()

  return {
    props: { project: project.data },
  }
}

const ProjectPage = ({ project }) =>
  <ProjectPages
    description={project.description}
    title={project.title}
    documentURL={project.documentation.url} />

export default ProjectPage