import parser from 'html-react-parser'
import { PageName } from '../../components/PageName/PageName'
import Head from 'next/head'
import { AboutPageLayout } from '../../layouts/AboutPageLayout';
import MainPageLayout from '../../layouts/MainPageLayout';
import StandartLayout from '../../layouts/StandartLayout';

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
  <StandartLayout>
    <PageName title="Противодействие терроризму" />
    <AboutPageLayout>
      <Head>
        <title>Противодействие терроризму</title>
      </Head>

      {parser(content?.content)}

    </AboutPageLayout>
  </StandartLayout>


export default Antiterror