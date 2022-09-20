import { PageName } from "../../components/PageName/PageName";
import parser from 'html-react-parser'
import { FaBlackTie, FaChessQueen, FaRegWindowMaximize } from 'react-icons/fa'
import { VscTypeHierarchySub } from 'react-icons/vsc'
import { MdArticle } from 'react-icons/md'
import { VscSymbolStructure } from 'react-icons/vsc'
import Head from "next/head";
import { LeftMenu, MenuItem } from "../../components/LeftMenu";
import StaticPageLayout from "../../layouts/StaticPageLayout/StaticPageLayout";
import Link from "next/link";

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.APIpath}/api/about?populate=*`)
  const about = await res.json()

  return {
    props: {
      about: about.data,
    }
  }
}

export default function About({ about }) {
  return (
    <StaticPageLayout pagename='Об администрации'>
      <Head>
        <title>Об администрации</title>
      </Head>

      <PageName title={'Об администрации'} />

      <div className="spl">

        <LeftMenu>
          <MenuItem url='/management' title='Руководство' icon_function={FaChessQueen()} />
          <MenuItem url='/news' title='Новости' icon_function={FaRegWindowMaximize()} />
          <MenuItem url='/documents' title='Документы' icon_function={MdArticle()} />
          <MenuItem url='/about/occupationalSecurity' title='Охрана труда' icon_function={MdArticle()} />
          <MenuItem title={'Противодействие терроризму'} url={'/about/antiterror'} icon_function={VscTypeHierarchySub()} />
        </LeftMenu>

        <div className="spl-content">
          {parser(about.content)}
          <Link href={`${process.env.APIpath}${about.files.url}`}>
            <a>{about.files.name}</a>
          </Link>
        </div>

      </div>

    </StaticPageLayout>
  )
}