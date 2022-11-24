import Header from "../../components/Header"
import Footer from "../../components/Footer/Footer"
import MobileMenu from "../../components/MobileMenu"
import MobileMenuItem from "../../components/MobileMenu/MobileMenuItem"
import SidebarMenu from "../../components/Sidebar/SidebarMenu"
import SidebarMenuItem from "../../components/Sidebar/SidebarMenuItem"
import { PageName } from "../../components/PageName/PageName"

const CivilservicePageLayout = ({ children }) => {
  return (
    <>
      <MobileMenu>
        <MobileMenuItem url='/' title='Главная' />
        <MobileMenuItem url='/documents' title='Документы' />
        <MobileMenuItem url='/sendrequest' title='Прием обращений' />
        <MobileMenuItem url='/about' title='О государственном органе' />
        <MobileMenuItem url='/activity' title='Деятельность' />
        <MobileMenuItem url='/press-service' title='Пресс-служба' />
        <MobileMenuItem url='/contacts' title='Контакты' />
        <MobileMenuItem title='Нормотворческая деятельность государственного органа'
          url='/projects' />
        <MobileMenuItem title='Функции государственного органа' url='/activity/functions' />
        <MobileMenuItem title='Перечень законов и иных нормативно-правовых актов, определяющих полномочия, задачи, функции государственного органа' url='/activity/npa' />
        <MobileMenuItem url='civilservice/vacancies'
          title="Сведения о вакантных должностях государственной гражданской службы" />
        <MobileMenuItem url='civilservice/requirements'
          title="Квалификационные требования к кандидатам на замещение вакантных должностей государственной гражданской службы" />
        <MobileMenuItem url='civilservice/results'
          title="Условия и результаты конкурсов на замещение вакантных должностей государственной гражданской службы" />
      </MobileMenu>
      <div className="container mx-auto text-black font-light min-h-[500px] py-10">


        <div className="container mx-auto flex flex-row gap-5">
          <SidebarMenu>
            <SidebarMenuItem title="Сведения о вакантных должностях государственной гражданской службы" url='/civilservice/vacancies' />
            <SidebarMenuItem title="Квалификационные требования к кандидатам на замещение вакантных должностей государственной гражданской службы" url='/civilservice/requirements' />
            <SidebarMenuItem title="Условия и результаты конкурсов на замещение вакантных должностей государственной гражданской службы" url='/civilservice/results' />
          </SidebarMenu>

          <div className="xs:full md:w-9/12 leading-7 [&>p]:pb-3 [&>ul]:list-disc translate-x-6 py-3">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default CivilservicePageLayout