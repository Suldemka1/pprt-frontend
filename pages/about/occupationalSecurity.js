import parser from 'html-react-parser'
import { PageName } from '../../components/PageName/PageName'
import Head from 'next/head'
import Link from 'next/link'

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.APIpath}/api/occupational-security-page?populate=*`)
  const content = await res.json()

  return {
    props: {
      content: content.data
    }
  }
}

const OccupationalSecurity = ({ content }) =>
  <>
    <Head>
      <title>Охрана труда</title>
    </Head>
    <PageName title='Охрана труда' />

    <div>
      {parser(content?.content)}

      <Link href={`${process.env.APIpath}${content?.file?.url}`} >{content?.file?.name}</Link>
    </div>
  </>

export default OccupationalSecurity