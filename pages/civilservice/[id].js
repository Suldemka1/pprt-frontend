import { PageName } from "../../components/PageName/PageName"
import Head from "next/head"

export const getServerSideProps = async (context) => {
  const { id } = context.params
  const res = await fetch(`http://${process.env.APIpath}/api/vacancy/${id}`)
  const vacancy = await res.json()

  return {
    props: { vacancy: vacancy }
  }
}


const VacancyItem = () => {
  <>
    <Head>
      <title>{vacancy.title}</title>
    </Head>
    <div>
      <PageName title={vacancy.title} />
    </div>
  </>

}

export default VacancyItem