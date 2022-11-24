import { PageName } from "../../components/PageName/PageName";
import parser from 'html-react-parser'
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { AboutPageLayout } from "../../layouts/AboutPageLayout";
import StandartLayout from "../../layouts/StandartLayout";
import DocumentLink from "../../components/Document/DocumentLink";
import myImageLoader from "../../loader";

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
                <div className="flex flex-col gap-4">
                    {parser(about.content)}

                    <DocumentLink filename={about.files.name} url={about.files.url} />
                    <Image loader={myImageLoader} src='/location.webp' priority={"preload"} alt="some" width={1280} height={960}
                        objectFit='cover' className='dark:grayscale' />
                </div>
            </AboutPageLayout>
        </StandartLayout>

    )
}