
import parser from 'html-react-parser'
import { PageName } from "../../components/PageName/PageName";
import Head from "next/head";
import React from "react";
import ActivityPageLayout from '../../layouts/ActivityPageLayout';

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/main-activity-page?populate=*`)
    const content = await res.json()

    return {
        props: {
            content: content.data
        }
    }
}

export default function Activity({ content }) {
    return (
        <ActivityPageLayout title="Деятельность">
            <Head>
                <title>Деятельность</title>
            </Head>

            {parser(content.content)}

        </ActivityPageLayout>
    )
}