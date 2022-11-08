import parser from 'html-react-parser'
import { PageName } from '../../components/PageName/PageName'
import Head from 'next/head'
import { AboutPageLayout } from '../../layouts/AboutPageLayout';

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
  <AboutPageLayout>
    <Head>
      <title>Противодействие терроризму</title>
    </Head>

    {parser(content?.content)}

  </AboutPageLayout>

export default Antiterror