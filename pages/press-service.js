import { PageName } from '../components/PageName/PageName'
import parser from 'html-react-parser'
import Head from 'next/head'

const APIpath = process.env.APIpath

export async function getServerSideProps() {

  const res = await fetch(`${process.env.APIpath}/api/press-service`)
  const press = await res.json()

  return {
    props: {
      press: press.data
    }
  }
}

export default function Press({ press }) {
  return (
    <>
      <Head>
        <title>Пресс служба</title>
      </Head>
      <PageName title='Пресс-служба' />

      <div className='spl-content'>
        {parser(press.content)}
      </div>
    </>

  )
}