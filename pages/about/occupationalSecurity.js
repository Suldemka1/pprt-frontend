import parser from 'html-react-parser'
import Head from 'next/head'
import { PageName } from '../../components/PageName/PageName';
import { AboutPageLayout } from '../../layouts/AboutPageLayout';
import MainPageLayout from '../../layouts/MainPageLayout';
import StandartLayout from '../../layouts/StandartLayout';

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
    <StandartLayout>
        <Head>
            <title>Охрана труда</title>
        </Head>
        <PageName title="Охрана труда" />
        <AboutPageLayout>


            {parser(content?.content)}

        </AboutPageLayout>
    </StandartLayout>


export default OccupationalSecurity