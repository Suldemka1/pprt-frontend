import Head from "next/head";
import { PageName } from "../../components/PageName/PageName";
import CivilservicePageLayout from "../../layouts/CivilservicePageLayout";
import StandartLayout from "../../layouts/StandartLayout";

const Results = () => {
    return (
        <StandartLayout>
            <Head>
                <title>
                    Условия и результаты конкурсов на замещение вакантных должностей государственной гражданской службы
                </title>
            </Head>
            <PageName title="Условия и результаты конкурсов на замещение вакантных должностей государственной гражданской службы" />
            <CivilservicePageLayout>
                <div>
                    «Настоящий раздел находится на стадии разработки»
                </div>
            </CivilservicePageLayout>
        </StandartLayout>

    );
};

export default Results;