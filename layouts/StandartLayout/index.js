import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header"

const StandartLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="text-md">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default StandartLayout