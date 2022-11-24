import { PageName } from "../../components/PageName/PageName"
import { AboutPageLayout } from "../../layouts/AboutPageLayout"
import StandartLayout from "../../layouts/StandartLayout"
import Image from "next/image"
import myImageLoader from "../../loader"

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.APIpath}/api/purchases-page?populate=*`)
  const content = await res.json()
  
  return {
    props: {
      content: content.data
    }
  }
}

const Reception = ({ content }) => {
  return (
    <StandartLayout>
      <PageName title="Прием граждан" />
      <AboutPageLayout>
        <div>
          <p>Прием граждан временно исполняющим обязанности полномочного представителя Республики Тыва в г. Москве Новиковым М.А. осуществляется еженедельно по предварительной записи.</p>
          <p>Запись на прием возможно осуществить по телефону: +7(499)236-48-01.</p>
          <p>Прием осуществляется по адресу: 119049 г. Москва, ул. Донская, 8, корп. 2 (станции метро Шаболовская или Октябрьская).</p>

          <div className="flex justify-start items-start relative min-h-20 min-w-20 w-96 h-96 max-h-full max-w-full py-3">
            <Image loader={myImageLoader} src="/place.bmp" layout="fill" objectFit="contain" className="py-4"/>
          </div>
        </div>
      </AboutPageLayout>
    </StandartLayout>
  )
}

export default Reception