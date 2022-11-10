import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import theme from '../../store/theme'
import HeaderNavbar from "./HeaderNavbar";
import { FaRegEye } from 'react-icons/fa'
import Image from 'next/image';
import HeaderSearchField from './HeaderSearchField';

const Header = observer((props, { children }) => {

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

            <div className="container mx-auto flex xs:flex-col md:flex-row items-center justify-between py-4">
                <div className="flex flex-row items-center text-lg font-light gap-3">
                    <Image alt='some' src="/tuvan_herb.png" width={50} height={50} className="md:hidden lg:block dark:grayscale" />
                    <h1 className="text-2xl font-normal">Полномочное представительство Республики Тыва в г. Москве</h1>
                </div>

                <div className="flex gap-3 items-center">
                    {/* id=specialButton включает режим для слабовидящих через скрипт */}
                    <div className="w-7 h-7">
                        <FaRegEye id='specialButton' className="w-full h-full cursor-pointer" />
                    </div>
                    <HeaderSearchField />
                </div>

            </div>
            <HeaderNavbar />


        </header>
    )
})

export default Header