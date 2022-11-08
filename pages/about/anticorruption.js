import parser from "html-react-parser";
import Head from "next/head";
import React from "react";
import { GrDocumentPdf } from "react-icons/gr";
import { useRouter } from "next/router";
import { AboutPageLayout } from "../../layouts/AboutPageLayout";

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/anticorruption-page?populate=*`)
    const content = await res.json()

    return {
        props: {
            content: content.data
        }
    }
}

const Anticorruption = ({ content }) => {
    const router = useRouter()
    return (
        <AboutPageLayout>
            <Head>
                <title>Антикоррупционная деятельность</title>
            </Head>




            {parser(content?.content)}

            <div className="flex flex-row items-center justify-start gap-3 py-6"
                onClick={() => router.push(`${process.env.APIpath}${content.file.url}`)}>
                <div className="w-10 h-10 cursor-pointer">
                    <GrDocumentPdf className="w-full h-full" />
                </div>

                <div className="hover:text-blue-900 cursor-pointer">
                    {content.file.name}
                </div>
            </div>
        </AboutPageLayout>
    );
};

export default Anticorruption;