import Head from "next/head";
import { PageName } from "../../components/PageName/PageName";
import CivilservicePageLayout from "../../layouts/CivilservicePageLayout";
import StandartLayout from "../../layouts/StandartLayout";

const Requirements = () => {
    return (
        <StandartLayout>
            <Head>
                <title>
                    Квалификационные требования к кандидатам на замещение вакантных должностей государственной гражданской службы
                </title>
            </Head>
            <PageName title="Квалификационные требования к кандидатам на замещение вакантных должностей государственной гражданской службы" />
            <CivilservicePageLayout>
                <div className="text-md">
                    «Настоящий раздел находится на стадии разработки»
                </div>
            </CivilservicePageLayout>
        </StandartLayout>
    );
};

export default Requirements;