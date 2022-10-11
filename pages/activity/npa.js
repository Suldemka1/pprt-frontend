import React from 'react';
import Head from "next/head";
import {PageName} from "../../components/PageName/PageName";
import {LeftMenu, MenuItem, MobileMenu, MobileMenuItem} from "../../components/LeftMenu";
import {FaChessQueen} from "react-icons/fa";
import {VscTypeHierarchySub} from "react-icons/vsc";
import parser from "html-react-parser";
import {GrDocumentText} from "react-icons/gr";

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/list-of-npas?populate=*`)
    const data = await res.json()

    return {
        props: data.data
    }
}

const Npa = ({content}) => {
    return (
        <>
            <Head>
                <title>Основные задачи</title>
            </Head>

            <div className="flex items-center justify-between">
                <PageName title='Основные задачи'/>
                <MobileMenu className="md:hidden">
                    <MobileMenuItem title={'Основные задачи'} url={'/activity/main-activity'}/>
                    <MobileMenuItem title={'Нормотворческая деятельность государственного органа'}
                                    url={'/projects'}/>
                    <MobileMenuItem title={'Функции государственного органа'} url={'/activity/functions'}/>
                </MobileMenu>
            </div>

            <div className='flex xs:flex-col md:flex-row gap-5 w-full py-3'>
                <LeftMenu>
                    <MenuItem title={'Основные задачи'} url={'/activity/main-activity'}
                              icon_function={FaChessQueen()}/>
                    <MenuItem title={'Нормотворческая деятельность государственного органа'} url={'/projects'}
                              icon_function={VscTypeHierarchySub()}/>
                    <MenuItem title={'Функции государственного органа'} url={'/activity/functions'}
                              icon_function={VscTypeHierarchySub()}/>
                </LeftMenu>

                <div>
                    {parser(content)}
                </div>

                {/* <div className='flex flex-col gap-5 xs:full md:w-9/12 leading-7 [&>p]:pb-3'>
                    <button
                        className=" flex items-center gap-3 text-left cursor-pointer text-xl hover:text-blue-900">
                        <div>
                            <GrDocumentText/>
                        </div>
                        Постановление Правительства Республики Тыва от 31 октября 2007 года № 976 «Об
                        утверждении
                        Положения о Полномочном представительстве Республики Тыва в г. Москве»;
                    </button>
                    <button
                        className=" flex items-center gap-3 text-left cursor-pointer text-xl hover:text-blue-900">
                        <div>
                            <GrDocumentText/>
                        </div>
                        Постановление Правительства Республики Тыва от 29 декабря 2007 года № 1104 «О порядке
                        взаимодействия органов исполнительной власти Республики Тыва с Полномочным
                        представительством Республики Тыва в г. Москве»;
                    </button>
                    <button
                        className=" flex items-center gap-3 text-left cursor-pointer text-xl hover:text-blue-900">
                        <div>
                            <GrDocumentText/>
                        </div>
                        Постановление Правительства Республики Тыва от 26 мая 2014 года № 218 «Об утверждении
                        Положения о порядке формирования, защиты предложений и бюджетных заявок на участие
                        Республики Тыва в государственных программах Российской Федерации, федеральных целевых
                        программах и федеральной адресной инвестиционной программе».
                    </button>
                </div> */}
            </div>
        </>
    )
        ;
};

export default Npa;