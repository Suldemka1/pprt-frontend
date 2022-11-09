import MobileMenuItem from "../../components/MobileMenu/MobileMenuItem";
import MobileMenu from "../../components/MobileMenu";

const MainPageLayout = ({ children }) => {

  return (
    <>
      <div className="bg-blue-900">
        <div className="container mx-auto">
          <MobileMenu>

            <MobileMenuItem url='/' title='Главная' />
            <MobileMenuItem url='/documents' title='Документы' />
            <MobileMenuItem url='/sendrequest' title='Прием обращений' />
            <MobileMenuItem url='/about' title='О государственном органе' />
            <MobileMenuItem url='/activity' title='Деятельность' />
            <MobileMenuItem url='/press-service' title='Пресс-служба' />
            <MobileMenuItem url='/contacts' title='Контакты' />

          </MobileMenu>
        </div>
      </div>

      <div className="container mx-auto text-black font-light min-h-[800px]">

        {children}
      </div>
    </>
  )
}

export default MainPageLayout