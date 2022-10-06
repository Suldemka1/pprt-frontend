import parser from 'html-react-parser'
import Head from 'next/head'
import {PageName} from "../components/PageName/PageName";

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
        <PageName title="Контакты" />

      <div>
        {parser(contact.content)}
      </div>
    </>
  )
}