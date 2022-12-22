import Head from "next/head"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header"
import Script from "next/script"

const StandartLayout = ({ children }) => {
  return (

    <div className="min-h-screen">

      <div className="text-md">
        {children}
      </div>

    </div>
  )
}

export default StandartLayout