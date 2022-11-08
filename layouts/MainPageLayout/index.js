import Header from "../../components/Header"
import Footer from "../../components/Footer/Footer"

const MainPageLayout = ({ children }) => {

  return (
    <>
      <Header />

      <div className="container mx-auto text-black font-light min-h-[500px]">
        <MobileMenuItem url='/' title='Главная' />
        <MobileMenuItem url='/documents' title='Документы' />
        <MobileMenuItem url='/sendrequest' title='Прием обращений' />
        <MobileMenuItem url='/about' title='О государственном органе' />
        <MobileMenuItem url='/activity' title='Деятельность' />
        <MobileMenuItem url='/press-service' title='Пресс-служба' />
        <MobileMenuItem url='/contacts' title='Контакты' />
        {children}
      </div>

      <Footer />
    </>
  )
}

export default MainPageLayout