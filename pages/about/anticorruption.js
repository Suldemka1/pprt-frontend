import {PageName} from "../../components/PageName/PageName";
import {LeftMenu, MenuItem, MobileMenu, MobileMenuItem} from "../../components/LeftMenu";
import {FaChessQueen, FaRegWindowMaximize} from "react-icons/fa";
import {MdArticle} from "react-icons/md";
import {VscTypeHierarchySub} from "react-icons/vsc";
import parser from "html-react-parser";
import Head from "next/head";
import React from "react";
import {GrDocumentPdf} from "react-icons/gr";
import {useRouter} from "next/router";
import { AboutPageLayout } from "../../layouts/MainLayout/AboutPageLayout";

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/anticorruption-page?populate=*`)
    const content = await res.json()

    return {
        props: {
            content: content.data
        }
    }
}

const Anticorruption = ({content}) => {
    const router = useRouter()
    return (
        <AboutPageLayout>
            <Head>
                <title>Антикоррупционная деятельность</title>
            </Head>

            <div className="flex xs:flex-col sm:flex-row xs:items-start items-center justify-between py-4">
                <PageName title='Антикоррупционная деятельность'/>
                <MobileMenu className="md:hidden">
                    <MobileMenuItem url='/management' title='Руководство'/>
                    <MobileMenuItem url='/about/structure' title='Структура'/>
                    <MobileMenuItem url='/news' title='Новости'/>
                    <MobileMenuItem url='/documents' title='Документы'/>
                    <MobileMenuItem url='/about/occupationalSecurity' title='Охрана труда'/>
                    <MobileMenuItem url={'/about/anticorruption'} title={'Противодействие коррупции'}/>
                    <MobileMenuItem url={'/about/antiterror'} title={'Противодействие терроризму'}/>
                    <MobileMenuItem url={'/vacancy'} title={'Государственная служба'}/>
                </MobileMenu>
            </div>

            <div className="flex xs:flex-col md:flex-row gap-5">

                <LeftMenu>
                    <MenuItem url='/management' title='Руководство' icon_function={FaChessQueen()}/>
                    <MenuItem url='/about/structure' title='Структура' icon_function={MdArticle()}/>
                    <MenuItem url='/news' title='Новости' icon_function={FaRegWindowMaximize()}/>
                    <MenuItem url='/documents' title='Документы' icon_function={MdArticle()}/>
                    <MenuItem url='/about/occupationalSecurity' title='Охрана труда' icon_function={MdArticle()}/>
                    <MenuItem url={'/about/anticorruption'} title={'Противодействие коррупции'}
                              icon_function={VscTypeHierarchySub()}/>
                    <MenuItem url={'/about/antiterror'} title={'Противодействие терроризму'}
                              icon_function={VscTypeHierarchySub()}/>
                    <MenuItem url={'/civilservice'} title={'Государственная служба'}
                              icon_function={VscTypeHierarchySub()}/>
                </LeftMenu>


                <div className="xs:w-full md:w-9/12">
                    {parser(content?.content)}

                    <div className="flex flex-row items-center justify-start gap-3 text-lg py-6"
                         onClick={() => router.push(`${process.env.APIpath}${content.file.url}`)}>
                        <div className="w-10 h-10 cursor-pointer">
                            <GrDocumentPdf className="w-full h-full"/>
                        </div>

                        <div className="hover:text-blue-900 cursor-pointer">
                            {content.file.name}
                        </div>
                    </div>
                </div>
            </div>
        </AboutPageLayout>
    );
};

export default Anticorruption;