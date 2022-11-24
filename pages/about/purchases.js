import { PageName } from "../../components/PageName/PageName"
import { AboutPageLayout } from "../../layouts/AboutPageLayout"
import StandartLayout from "../../layouts/StandartLayout"
import parser from 'html-react-parser'

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.APIpath}/api/purchases-page?populate=*`)
  const content = await res.json()
  console.log(content)
  return {
    props: {
      content: content.data
    }
  }
}

const Purchases = ({ content }) => {
  return (
    <StandartLayout>
      <PageName title="Государственные закупки" />
      <AboutPageLayout>
        {parser(content?.content)}
      </AboutPageLayout>
    </StandartLayout>
  )
}


export default Purchases