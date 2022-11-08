import parser from 'html-react-parser'
import Head from 'next/head'
import { AboutPageLayout } from '../../layouts/AboutPageLayout';

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.APIpath}/api/occupational-security-page?populate=*`)
    const content = await res.json()

    return {
        props: {
            content: content.data
        }
    }
}

const OccupationalSecurity = ({ content }) =>
    <AboutPageLayout>
        <Head>
            <title>Охрана труда</title>
        </Head>

        {parser(content?.content)}

    </AboutPageLayout>

export default OccupationalSecurity