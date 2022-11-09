import Image from "next/image";
import { PageName } from "../../components/PageName/PageName";
import { AboutPageLayout } from "../../layouts/AboutPageLayout";
import MainPageLayout from "../../layouts/MainPageLayout";
import StandartLayout from "../../layouts/StandartLayout";

const Structure = () => {
    return (
        <StandartLayout>
            <PageName title="Структура" />
            <AboutPageLayout>

                <p>Структура Полномочного представительства Республики Тыва в г. Москве утверждена
                    постановлением Правительства Республики Тыва от 11.06.2008 № 362 (в ред.
                    постановления Правительства Республики Тыва 31.05.2022 № 327)</p>
                <Image src='/structure.svg' alt={"some"} width={394} height={174.5} layout={"responsive"}
                    className="dark:grayscale" />

            </AboutPageLayout>
        </StandartLayout>

    );
};

export default Structure;