import { PageName } from "../../components/PageName/PageName"

const StaticPageLayout = ({ children }, params) => {

  return (

    <div>
      <PageName title={params.pagename} />
      {children}
    </div>

  )
}

export default StaticPageLayout