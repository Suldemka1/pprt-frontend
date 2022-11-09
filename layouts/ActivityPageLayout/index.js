import MobileMenu from "../../components/MobileMenu"
import MobileMenuItem from "../../components/MobileMenu/MobileMenuItem"
import SidebarMenu from "../../components/Sidebar/SidebarMenu"
import SidebarMenuItem from "../../components/Sidebar/SidebarMenuItem"
import StandartLayout from "../StandartLayout"

const ActivityPageLayout = ({ children }) => {

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
      </MobileMenu>
      <div className="container mx-auto text-black font-light min-h-[500px] py-10">

        <div className="flex xs:flex-col md:flex-row gap-5">
          <SidebarMenu>
            <SidebarMenuItem title='Нормотворческая деятельность государственного органа' url='/projects'
            />
            <SidebarMenuItem title='Функции государственного органа' url='/activity/functions'
            />
            <SidebarMenuItem
              title='Перечень законов и иных нормативно-правовых актов, определяющих полномочия, задачи, функции государственного органа'
              url='/activity/npa' />
          </SidebarMenu>

          <div className='xs:full md:w-9/12 leading-7 [&>p]:pb-3 [&>ul]:list-disc translate-x-6'>
            {children}
          </div>
        </div>
      </div>

    </>
  )
}

export default ActivityPageLayout