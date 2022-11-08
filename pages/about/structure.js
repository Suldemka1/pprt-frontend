import Image from "next/image";
import {PageName} from "../../components/PageName/PageName";
import {LeftMenu, MenuItem, MobileMenu, MobileMenuItem} from "../../components/LeftMenu";
import {FaChessQueen, FaRegWindowMaximize} from "react-icons/fa";
import {MdArticle} from "react-icons/md";
import {VscTypeHierarchySub} from "react-icons/vsc";

const Structure = () => {
    return (
        <div>
            <div className="flex xs:flex-col sm:flex-row xs:items-start items-center justify-between py-4">
                <PageName title="Структура государственного органа"/>
                <MobileMenu className="md:hidden">
                    <MobileMenuItem url='/management' title='Руководство'/>
                    <MobileMenuItem url='/about/structure' title='Структура'/>
                    <MobileMenuItem url='/news' title='Новости'/>
                    <MobileMenuItem url='/documents' title='Документы'/>
                    <MobileMenuItem url='/about/occupationalSecurity' title='Охрана труда'/>
                    <MobileMenuItem url={'/about/anticorruption'} title={'Противодействие коррупции'}/>
                    <MobileMenuItem url={'/about/antiterror'} title={'Противодействие терроризму'}/>
                    <MobileMenuItem url={'/vacancy'} title={'Государственная служба'}/>
                </MobileMenu>
            </div>

            <div className="flex xs:flex-col md:flex-row gap-5">

                <LeftMenu>
                    <MenuItem url='/management' title='Руководство' icon_function={FaChessQueen()}/>
                    <MenuItem url='/about/structure' title='Структура' icon_function={MdArticle()}/>
                    <MenuItem url='/news' title='Новости' icon_function={FaRegWindowMaximize()}/>
                    <MenuItem url='/documents' title='Документы' icon_function={MdArticle()}/>
                    <MenuItem url='/about/occupationalSecurity' title='Охрана труда' icon_function={MdArticle()}/>
                    <MenuItem url={'/about/anticorruption'} title={'Противодействие коррупции'}
                              icon_function={VscTypeHierarchySub()}/>
                    <MenuItem url={'/about/antiterror'} title={'Противодействие терроризму'}
                              icon_function={VscTypeHierarchySub()}/>
                    <MenuItem url={'/civilservice'} title={'Государственная служба'}
                              icon_function={VscTypeHierarchySub()}/>
                </LeftMenu>


                <div className="xs:w-full md:w-9/12">
                    <p>Структура Полномочного представительства Республики Тыва в г. Москве утверждена
                        постановлением Правительства Республики Тыва от 11.06.2008 № 362 (в ред.
                        постановления Правительства Республики Тыва 31.05.2022 № 327)</p>
                    <Image src={'/structure.svg'} alt={"some"} width={394} height={174.5} layout={"responsive"}
                           className="dark:grayscale"/>
                </div>
            </div>
        </div>
    );
};

export default Structure;