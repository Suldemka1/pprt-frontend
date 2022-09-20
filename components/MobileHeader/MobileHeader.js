import menu from './mobile-header.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MobileHeader() {
  const [checked, setChecked] = useState(false)

  return (
    <header className={menu.mobileHeader}>
      <div className={menu.hamburger_menu}>
        <input id={menu.menu__toggle} type="checkbox" checked={checked} onChange={e => setChecked(checked)} />
        <label className={menu.menu__btn} htmlFor="menu__toggle" onClick={e => setChecked(!checked)}>
          <span></span>
        </label>
        <ul className={menu.menu__box}>
          
          <li><Link href="/about"><a className={menu.menu__item}>О министерстве</a></Link></li>
          <li><Link href="/activity"><a className={menu.menu__item}>Деятельность</a></Link></li>
          <li><Link href="/projects"><a className={menu.menu__item}>Проекты</a></Link></li>
          <li><Link href="/press-service"><a className={menu.menu__item}>Пресс-служба</a></Link></li>
          <li><Link href="/contacts"><a className={menu.menu__item}>Контакты</a></Link></li>

          <li><Link href="/"><a className={menu.menu__item}>Министерство</a></Link></li>
          <li><Link href="/"><a className={menu.menu__item}>Банк документов</a></Link></li>
          <li><Link href="/"><a className={menu.menu__item}>Сервисы</a></Link></li>
        </ul>
      </div>

      <div className={menu.min_logo_name}>
        <Image alt='some' src='/herb.svg.png' width={40} height={40} />
        <div>МинЭк Тыва</div>
      </div>
    </header>

  )
}