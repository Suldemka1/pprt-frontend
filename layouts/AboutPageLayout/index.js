import Header from '../../components/Header'
import Footer from '../../components/Footer/Footer'
import { PageName } from '../../components/PageName/PageName'
import MobileMenu from '../../components/MobileMenu/'
import MobileMenuItem from '../../components/MobileMenu/MobileMenuItem'
import SidebarMenu from '../../components/Sidebar/SidebarMenu'
import SidebarMenuItem from '../../components/Sidebar/SidebarMenuItem'
import StandartLayout from '../StandartLayout'

export const AboutPageLayout = ({ children }) => {
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
        <MobileMenuItem url='/management' title='Руководство' />
        <MobileMenuItem url='/about/structure' title='Структура' />
        <MobileMenuItem url='/news' title='Новости' />
        <MobileMenuItem url='/documents' title='Документы' />
        <MobileMenuItem url='/about/occupationalSecurity' title='Охрана труда' />
        <MobileMenuItem url='/about/anticorruption' title='Противодействие коррупции' />
        <MobileMenuItem url='/about/antiterror' title='Противодействие терроризму' />
        <MobileMenuItem url='/vacancy' title='Государственная служба' />
      </MobileMenu>

      <div className="container mx-auto text-black font-light min-h-[500px] py-10">

        <div className="flex xs:flex-col md:flex-row gap-5">

          <SidebarMenu>
            <SidebarMenuItem url='/management' title='Руководство' />
            <SidebarMenuItem url='/about/structure' title='Структура' />
            <SidebarMenuItem url='/news' title='Новости' />
            <SidebarMenuItem url='/documents' title='Документы' />
            <SidebarMenuItem url='/about/occupationalSecurity' title='Охрана труда' />
            <SidebarMenuItem url='/about/anticorruption' title='Противодействие коррупции'
            />
            <SidebarMenuItem url='/about/antiterror' title='Противодействие терроризму'
            />
            <SidebarMenuItem url='/civilservice' title='Государственная служба'
            />
          </SidebarMenu>

          <div className="xs:w-full md:w-9/12 [&>ul]:list-disc [&>p]:text-justify">
            {children}
          </div>

        </div>

      </div>
    </>
  )
}