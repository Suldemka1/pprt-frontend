import VacancyCard from '../../components/Civilservice/Vacancy/VacancyCard'
import { PageName } from '../../components/PageName/PageName'
import CivilservicePageLayout from '../../layouts/CivilservicePageLayout'

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/vacancies?populate=*`)
    const vacancy = await res.json()

    return {
        props: {vacancy: vacancy.data}
    }
}

const Vacancies = ({vacancy}) => {

    const datamap = vacancy.map(({id, title, description}) =>
        <VacancyCard
            key={id}
            title={title}
            description={description}
        />
    )

    return (
        <CivilservicePageLayout>

            <div>
                <PageName title='Сведения о вакантных должностях государственной гражданской службы'/>
            </div>

            <div className="flex flex-row gap-5 w-full">
                

                <div className="flex flex-col gap-5 md:w-9/12">
                    {datamap}
                </div>
            </div>
        </CivilservicePageLayout>
    )
}

export default Vacancies