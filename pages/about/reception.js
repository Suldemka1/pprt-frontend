import { PageName } from "../../components/PageName/PageName"
import { AboutPageLayout } from "../../layouts/AboutPageLayout"
import StandartLayout from "../../layouts/StandartLayout"
import Image from "next/image"
import myImageLoader from "../../loader"
import Link from "next/link";

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

          {/*<div className="flex justify-start items-start relative min-h-20 min-w-20 w-96 h-96 max-h-full max-w-full py-3">*/}
          {/*  <Image loader={myImageLoader} src="/place.bmp" layout="fill" objectFit="contain" className="py-4"/>*/}
          {/*</div>*/}

          <div style={{position:'relative', overflow: 'hidden' }}>
            <Link
              href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
              style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}>
            Москва</Link>
            <Link
              href="https://yandex.ru/maps/213/moscow/?ll=37.610870%2C55.725939&mode=routes&rtext=55.731029%2C37.612096~55.723323%2C37.606712&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9858865~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjY5MDM5NBI70KDQvtGB0YHQuNGPLCDQnNC%2B0YHQutCy0LAsINCU0L7QvdGB0LrQsNGPINGD0LvQuNGG0LAsIDjQujIiCg1FbRZCFa%2FkXkI%3D&utm_medium=mapframe&utm_source=maps&z=16.37"
              // style={{color:#eee;font-size:12px;position:absolute;top:14px;}}
            >
              Навигатор онлайн: построение маршрута на карте — Яндекс Карты
            </Link>
            <iframe src="https://yandex.ru/map-widget/v1/-/CCUn70d9WC" width="560" height="400" frameBorder="1"
                    allowFullScreen="true" style={{position: 'relative'}}></iframe>
          </div>

        </div>
      </AboutPageLayout>
    </StandartLayout>
  )
}

export default Reception
