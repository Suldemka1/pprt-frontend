import parser from 'html-react-parser'
import Head from 'next/head'
import { PageName } from "../components/PageName/PageName";
import MainPageLayout from '../layouts/MainPageLayout';
import StandartLayout from '../layouts/StandartLayout';

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
    <StandartLayout>
      <MainPageLayout>
        <Head>
          <title>Контакты</title>
        </Head>
        <PageName title="Контакты" />

        <div className="xs:w-full md:w-9/12">
          {parser(contact.content)}
          <div>

          </div>
          <div className="flex flex-col gap-5 text-xl font-semibold">
            <p>Полномочное представительство Республики Тыва в г. Москве на карты</p>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A7045c293e45fe37592b1c515871daae32362eeb26ace504dafa8483038b835ca&amp;source=constructor"
              width="100%" height="500"></iframe>
          </div>

        </div>
      </MainPageLayout>
    </StandartLayout>

  )
}