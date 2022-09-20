import header from './/header.module.scss'
import { Container } from 'react-bootstrap'
import Link from 'next/link'

export const LinkItem = (props) => <li><Link href={props.href}><a>{props.link}</a></Link></li>

export const NavMenu = ({children}) => {

  return <div className={header.nav_menu}>
    <Container>
      <menu>
        {children}
      </menu>
    </Container>
  </div>
}