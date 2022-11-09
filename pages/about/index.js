import { PageName } from "../../components/PageName/PageName";
import parser from 'html-react-parser'
import Head from "next/head";
import Image from "next/image";
import { GrDocumentPdf } from "react-icons/gr";
import { useRouter } from "next/router";
import { AboutPageLayout } from "../../layouts/AboutPageLayout";
import MainPageLayout from "../../layouts/MainPageLayout";
import StandartLayout from "../../layouts/StandartLayout";

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
    const router = useRouter()
    return (
        <StandartLayout>
            <PageName title="О государственном органе" />
            <AboutPageLayout>
            <Head>
                <title>О государственном органе</title>
            </Head>

            {parser(about.content)}

            <div className="flex flex-row items-center justify-start gap-3 py-6"
                onClick={() => router.push(`${process.env.APIpath}${about.files.url}`)}>
                <div className="w-10 h-10 cursor-pointer">
                    <GrDocumentPdf className="w-full h-full" />
                </div>

                <div className="hover:text-blue-900 cursor-pointer">
                    {about.files.name}
                </div>
            </div>

            <Image src='/location.webp' priority={"preload"} alt="some" width={1280} height={960}
                objectFit='cover' className='dark:grayscale' />

        </AboutPageLayout>
        </StandartLayout>
        
    )
}