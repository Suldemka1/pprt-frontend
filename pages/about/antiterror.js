import parser from 'html-react-parser'
import { PageName } from '../../components/PageName/PageName'
import Head from 'next/head'

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.APIpath}/api/antiterror-page?populate=*`)
  const content = await res.json()

  return {
    props: {
      content: content.data
    }
  }
}

const Antiterror = ({ content }) =>
  <>
    <Head>
      <title>Противодействие терроризму</title>
    </Head>
    <PageName title='Противодействие терроризму' />

    <div>
      {parser(content.content)}
    </div>
  </>

export default Antiterror