import { DocumentPage } from "../../components/Document/Document";

export const getServerSideProps = async (context) => {
  const { id } = context.params
  const res = await fetch(`${process.env.APIpath}/api/documents/${id}?populate=*`)
  const docs = await res.json()
  return {
    props: { docs: docs.data }
  }
}

const DocumentItem = ({ docs }) => {
  return <DocumentPage
    title={docs.title}
    url={docs.file.url}
  />
}

export default DocumentItem