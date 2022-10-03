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
import Image from "next/image";

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
    <StaticPageLayout pagename='О государственном органе'>
      <Head>
        <title>О государственном органе</title>
      </Head>

      <PageName title={'О государственном органе'} />

      <div className="spl">

        <LeftMenu>
          <MenuItem url='/management' title='Руководство' icon_function={FaChessQueen()} />
          <MenuItem url='/about/structure' title='Структура' icon_function={MdArticle()} />
          <MenuItem url='/news' title='Новости' icon_function={FaRegWindowMaximize()} />
          <MenuItem url='/documents' title='Документы' icon_function={MdArticle()} />
          <MenuItem url='/about/occupationalSecurity' title='Охрана труда' icon_function={MdArticle()} />
          <MenuItem url={'/about/anticorruption'} title={'Противодействие коррупции'} icon_function={VscTypeHierarchySub()} />
          <MenuItem url={'/about/antiterror'} title={'Противодействие терроризму'} icon_function={VscTypeHierarchySub()} />
          <MenuItem url={'/vacancy'} title={'Государственная служба'} icon_function={VscTypeHierarchySub()} />
        </LeftMenu>

        <div className="spl-content">
          {parser(about.content)}
          <Image src={'/location.jpg'} width={1280} height={960} objectFit='cover' />
          {console.log(about.files)}
          <Link href={`${process.env.APIpath}${about.files.url}`}>
            <a>{about.files.name}</a>
          </Link>
        </div>

      </div>

    </StaticPageLayout>
  )
}