import parser from 'html-react-parser'
import Head from 'next/head'

export async function getServerSideProps() {
  const res = await fetch(`${process.env.APIpath}/api/contact`)
  const contact = await res.json()

  return {
    props: {
      contact: contact.data,
    }
  }
}

export default function Contacts({ contact }) {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>

      <div>
        {parser(contact.content)}
      </div>
    </>
  )
}