import Link from 'next/link'
import Image from 'next/image'
import {useEffect} from 'react'

import {observer} from 'mobx-react-lite'
import {FaRegEye, FaSearch} from 'react-icons/fa'
import theme from '../../store/theme'
import HeaderNavbar from "./HeaderNavbar";
import HeaderSearchField from "./HeaderSearchField";

const Header = observer((props, {children}) => {

    useEffect(() => {
        theme.setTheme()
        document.documentElement.setAttribute('font-size', 'A1')
    }, [])

    const handleChangeTheme = () => {
        theme.changeTheme()
        document.documentElement.setAttribute('font-size', 'A1')
    }

    return (
        <header className="flex flex-col bg-blue-900 dark:bg-gray-400 text-white dark:text-black font-light">

            <div
                className="container mx-auto xs:hidden md:flex [&>a]:text-[17px] py-4 flex flex-row justify-between items-center">

                <Image alt='some' src="/herb.svg.png" width={50} height={50} className="dark:grayscale"/>
                <Link href="/"><a className="hover:bg-blue-600">Главная</a></Link>
                <Link href="/documents"><a className="hover:bg-blue-600">Документы</a></Link>
                <Link href='/sendrequest'><a className="hover:bg-blue-600">Прием обращений</a></Link>
                <Link href='/about'><a className="hover:bg-blue-600">О государственном органе</a></Link>
                <Link href='/activity'><a className="hover:bg-blue-600">Деятельность</a></Link>
                <Link href='/press-service'><a className="hover:bg-blue-600">Пресс-служба</a></Link>
                <Link href='/contacts'><a className="hover:bg-blue-600">Контакты</a></Link>

                {/*<HeaderSearchField />*/}
            </div>

            <div className="bg-white py-4">
                <div className="container mx-auto flex items-center justify-between text-black">
                    <div className="flex items-center text-lg font-light gap-3">
                        {/*<Image alt='some' src="/tuvan_herb.png" width={50} height={50} className="dark:grayscale"/>*/}
                        <h1 className="text-3xl">Полномочное представительство Республики Тыва в г. Москве</h1>

                    </div>

                    <div
                        className="xs:hidden lg:flex gap-2 items-center border-2 border-black rounded p-2 cursor-pointer"
                        onClick={handleChangeTheme}>
                        {/*<div className="w-4 h-4">*/}
                        {/*    <FaRegEye className="w-full h-full"/>*/}
                        {/*</div>*/}
                        <h6 className="">Версия для слабовидящих</h6>
                    </div>
                </div>
            </div>

            {/*<HeaderNavbar/>*/}

        </header>
    )
})

export default Header