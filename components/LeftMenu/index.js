import styles from './leftmenu.module.scss'
import { FaBlackTie, FaChessQueen, FaRegWindowMaximize } from 'react-icons/fa'
import { MdArticle } from 'react-icons/md'
import { VscSymbolStructure } from 'react-icons/vsc'
import Link from 'next/link'


const MenuItem = (params) => {
  return (
    <div className={styles.link}>
      {params.icon_function}
      <Link href={params.url} >
        <a>
          {params.title}
        </a>
      </Link>
    </div>
  )

}


const LeftMenu = ({ children }) => {
  return (
    <div className={styles.links}>
      {children}
    </div>
  )
}

export { LeftMenu, MenuItem }