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
    const res = await fetch(`${process.env.APIpath}/api/npas?populate=*`)
    const data = await res.json()

    return {
        props: {
            documents: data.data
        }
    }
}

const Npa = ({ documents }) => {
    const router = useRouter()
    return (
        <StandartLayout>
            <Head>
                <title>Перечень законов и иных нормативно-правовых актов, определяющих полномочия, задачи, функции государственного органа</title>
            </Head>
            <PageName title="Перечень законов и иных нормативно-правовых актов, определяющих полномочия, задачи, функции государственного органа" />
            <ActivityPageLayout>
                <div className='flex flex-col gap-2'>
                    {
                        documents.map((item) =>
                            <DocumentLink filename={item.document[0].name} url={`${item.document[0].url}`} />
                        )
                    }

                </div>
            </ActivityPageLayout>
        </StandartLayout>

    )
        ;
};

export default Npa;