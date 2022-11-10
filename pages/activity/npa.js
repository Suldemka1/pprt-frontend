import React from 'react';
import Head from "next/head";
import { GrDocumentText } from "react-icons/gr";
import ActivityPageLayout from '../../layouts/ActivityPageLayout';
import { useRouter } from 'next/router';
import MainPageLayout from '../../layouts/MainPageLayout';
import { PageName } from '../../components/PageName/PageName';
import StandartLayout from '../../layouts/StandartLayout';
import DocumentLink from '../../components/Document/DocumentLink';

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/list-of-npa?populate=*`)
    const data = await res.json()

    return {
        props: data.data
    }
}

const Npa = (props) => {
    const router = useRouter()
    return (
        <StandartLayout>
            <Head>
                <title>Перечень законов и иных нормативно-правовых актов, определяющих полномочия, задачи, функции государственного органа</title>
            </Head>
            <PageName title="Перечень законов и иных нормативно-правовых актов, определяющих полномочия, задачи, функции государственного органа" />
            <ActivityPageLayout>
                <div className='flex flex-col gap-2'>
                    <DocumentLink filename="Постановление Правительства Республики Тыва от 31 октября 2007 года № 976 «Об  утверждении Положения о Полномочном представительстве Республики Тыва в г. Москве»;"
                        url="https://api.pprt.rtyva.ru/uploads/Postanovlenie_Pravitelstva_Respubliki_Tyva_Ob_utverzhdenii_Polozheniya_o_Polnomochnom_predstavitelstv_Moskve_d197824cd1.docx" />
                    <DocumentLink filename="Постановление Правительства Республики Тыва от 29 декабря 2007 года № 1104 «О порядке
                        взаимодействия органов исполнительной власти Республики Тыва с Полномочным
                        представительством Республики Тыва в г. Москве»;"
                        url="https://api.pprt.rtyva.ru/uploads/906700169_1_e7fa0d3329.pdf" />
                    <DocumentLink filename="Постановление Правительства Республики Тыва от 26 мая 2014 года № 218 «Об утверждении
                        Положения о порядке формирования, защиты предложений и бюджетных заявок на участие
                        Республики Тыва в государственных программах Российской Федерации, федеральных целевых
                        программах и федеральной адресной инвестиционной программе»."
                        url="https://api.pprt.rtyva.ru/uploads/Postanovlenie_Pravitelstva_Respubliki_Tyva_ot_26_maya_2014_goda_218_6e1cfff7ed.docx" />
                </div>
            </ActivityPageLayout>
        </StandartLayout>

    )
        ;
};

export default Npa;