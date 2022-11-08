import React from 'react';
import Head from "next/head";
import {GrDocumentText} from "react-icons/gr";
import ActivityPageLayout from '../../layouts/ActivityPageLayout';

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/list-of-npa?populate=*`)
    const data = await res.json()

    return {
        props: data.data
    }
}

const Npa = (props) => {
    return (
        <ActivityPageLayout>
            <Head>
                <title>Основные задачи</title>
            </Head>

                <div className='flex flex-col gap-5'>
                    <button
                        className=" flex items-top gap-3 text-left cursor-pointer text-xl hover:text-blue-900">
                        <div>
                            <GrDocumentText/>
                        </div>
                        Постановление Правительства Республики Тыва от 31 октября 2007 года № 976 «Об
                        утверждении
                        Положения о Полномочном представительстве Республики Тыва в г. Москве»;
                    </button>
                    <button
                        className=" flex items-top gap-3 text-left cursor-pointer text-xl hover:text-blue-900">
                        <div>
                            <GrDocumentText/>
                        </div>
                        Постановление Правительства Республики Тыва от 29 декабря 2007 года № 1104 «О порядке
                        взаимодействия органов исполнительной власти Республики Тыва с Полномочным
                        представительством Республики Тыва в г. Москве»;
                    </button>
                    <button
                        className=" flex items-top gap-3 text-left cursor-pointer text-xl hover:text-blue-900">
                        <div>
                            <GrDocumentText/>
                        </div>
                        Постановление Правительства Республики Тыва от 26 мая 2014 года № 218 «Об утверждении
                        Положения о порядке формирования, защиты предложений и бюджетных заявок на участие
                        Республики Тыва в государственных программах Российской Федерации, федеральных целевых
                        программах и федеральной адресной инвестиционной программе».
                    </button>
                </div>
        </ActivityPageLayout>
    )
        ;
};

export default Npa;