import parser from 'html-react-parser'
import { PageName } from '../../components/PageName/PageName'
import Head from 'next/head'

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.APIpath}/api/main-activity-page?populate=*`)
  const content = await res.json()

  return {
    props: {
      content: content.data
    }
  }
}

const MainActivity = ({ content }) =>
  <>
    <Head>
      <title>Ключевые направления работы</title>
    </Head>
    <PageName title='Ключевые направления работы' />

    <div>
      {parser(content.content)}
    </div>
  </>

export default MainActivity