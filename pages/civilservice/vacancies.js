import {VacancyCard} from "../../components/Vacancy/Vacancy";
import {PageName} from "../../components/PageName/PageName";
import {LeftMenu, MenuItem, MobileMenu, MobileMenuItem} from "../../components/LeftMenu";

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
        <div>

            <div>
                <PageName title='Сведения о вакантных должностях государственной гражданской службы'/>
                <MobileMenu className="xs:block md:hidden">
                    <MobileMenuItem url='/vacancies'
                                    title="Сведения о вакантных должностях государственной гражданской службы"/>
                    <MobileMenuItem url='/requirements'
                                    title="Квалификационные требования к кандидатам на замещение вакантных должностей государственной гражданской службы"/>
                    <MobileMenuItem url='/results'
                                    title="Условия и результаты конкурсов на замещение вакантных должностей государственной гражданской службы"/>
                </MobileMenu>
            </div>

            <div className="flex flex-row gap-5 w-full">
                <LeftMenu>
                    <MenuItem url='/civilservice/vacancies'
                              title="Сведения о вакантных должностях государственной гражданской службы"/>
                    <MenuItem url='/civilservice/requirements'
                              title="Квалификационные требования к кандидатам на замещение вакантных должностей государственной гражданской службы"/>
                    <MenuItem url='/civilservice/results'
                              title="Условия и результаты конкурсов на замещение вакантных должностей государственной гражданской службы"/>
                </LeftMenu>

                <div className="flex flex-col gap-5 md:w-9/12">
                    {datamap}
                </div>
            </div>
        </div>
    )
}

export default Vacancies