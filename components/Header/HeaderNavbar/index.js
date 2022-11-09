import React from 'react';
import Link from "next/link";

const HeaderNavbar = () => {
    return (
        <div className="xs:hidden md:block bg-gray-200 py-3 text-black">
            <div className="container mx-auto flex flex-row justify-between">
                <Link href="/"><a>Главная</a></Link>
                <Link href="/documents"><a>Документы</a></Link>
                <Link href='/sendrequest'><a>Прием обращений</a></Link>
                <Link href='/about'><a>О государственном органе</a></Link>
                <Link href='/activity'><a>Деятельность</a></Link>
                <Link href='/press-service'><a>Пресс-служба</a></Link>
                <Link href='/contacts'><a>Контакты</a></Link>
            </div>
        </div>
    );
};

export default HeaderNavbar;
