import {FaChessQueen} from 'react-icons/fa'
import {VscTypeHierarchySub} from 'react-icons/vsc'
import parser from 'html-react-parser'
import {PageName} from "../../components/PageName/PageName";
import Head from "next/head";
import {LeftMenu, MenuItem, MobileMenu, MobileMenuItem} from "../../components/LeftMenu";
import React from "react";

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/main-activity-page?populate=*`)
    const content = await res.json()

    return {
        props: {
            content: content.data
        }
    }
}

export default function Activity({content}) {
    return (
        <div className="">
            <Head>
                <title>Деятельность</title>
            </Head>

            <div className="flex items-center justify-between">
                <PageName title='Деятельность'/>
                <MobileMenu className="md:hidden">
                    <MobileMenuItem title={'Основные задачи'} url={'/activity/main-activity'}/>
                    <MobileMenuItem title={'Нормотворческая деятельность государственного органа'}
                                    url={'/projects'}/>
                    <MobileMenuItem title={'Функции государственного органа'} url={'/activity/functions'}/>
                    <MobileMenuItem title={'Перечень законов и иных нормативно-правовых актов, определяющих полномочия, задачи, функции государственного органа'} url={'/activity/npa'}/>
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
                    <MenuItem title={'Перечень законов и иных нормативно-правовых актов, определяющих полномочия, задачи, функции государственного органа'}
                              url={'/activity/npa'} />
                </LeftMenu>

                <div className='xs:full md:w-9/12 leading-7 [&>p]:pb-3 [&>ul]:list-disc translate-x-6'>
                    {parser(content.content)}
                </div>
            </div>
        </div>
    )
}