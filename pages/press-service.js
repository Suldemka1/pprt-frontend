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
    <div className="">
      <Head>
        <title>Пресс служба</title>
      </Head>
      <PageName title='Пресс-служба' />

      <div className='text-xl'>
        {parser(press.content)}
      </div>
    </div>

  )
}