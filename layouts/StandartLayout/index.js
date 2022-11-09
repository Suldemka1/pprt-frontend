import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header"

const StandartLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default StandartLayout