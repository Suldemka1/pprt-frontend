import { PageName } from "../../components/PageName/PageName"
import { VacancyCard } from "../../components/Vacancy/Vacancy"


export const getServerSideProps = async () => {
  // const res = await fetch(`https://${process.env.APIpath}/api/vacancy`)
  const res = await fetch(`${process.env.APIpath}/api/vacancies?populate=*`)
  const vacancy = await res.json()

  return {
    props: { vacancy: vacancy.data }
  }
}

const Vacancy = ({vacancy}) => {
  const datamap = vacancy.map(item =>
    <VacancyCard
      key={item.id}
      title={item.title}
      department={item.department}
      salary={item.salary}
      requirements={item.requirements}
      responsibilities={item.responsibilities}
      socialVaranty={item.social_warranty}
    />
  )
  return (
    <>
      <PageName title='Вакансии' />

      {datamap}

    </>
  )
}

export default Vacancy