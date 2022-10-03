import {FaChessQueen} from 'react-icons/fa'
import {VscTypeHierarchySub} from 'react-icons/vsc'
import parser from 'html-react-parser'
import {PageName} from "../../components/PageName/PageName";
import Head from "next/head";
import {LeftMenu, MenuItem} from "../../components/LeftMenu";

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
        <>
            <Head>
                <title>Деятельность</title>
            </Head>
            <PageName title='Деятельность'/>

            <div className='spl'>
                <LeftMenu>
                    <MenuItem title={'Направления работы'} url={'/activity/main-activity'}
                              icon_function={FaChessQueen()}/>
                    <MenuItem title={'Нормотворческая деятельность государственного органа'} url={'/projects'}
                              icon_function={VscTypeHierarchySub()}/>
                    <MenuItem title={'Функции государственного органа'} url={'/activity/functions'}
                              icon_function={VscTypeHierarchySub()}/>
                </LeftMenu>

                <div className='spl-content'>
                    {parser(content.content)}
                </div>
            </div>
        </>
    )
}