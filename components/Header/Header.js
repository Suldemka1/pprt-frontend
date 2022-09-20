import header from './header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Navbar, Form, Button, Nav, NavDropdown, Offcanvas } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import searchQuery from '../../store/search-query'
import { observer } from 'mobx-react-lite'
import { FaSearch } from 'react-icons/fa'
import theme from '../../store/theme'
import { FaRegEye } from 'react-icons/fa'

const Header = observer((props, { children }) => {

  useEffect(() => {
    theme.setTheme()

  }, [])

  const handleChangeTheme = () => {
    theme.changeTheme()
    document.documentElement.setAttribute('font-size', 'A1')
  }

  return (
    <header className={header.header}>
      <div className={header.navbar_top}>
        <Container>
          <div className={header.navbar_top_content}>
            <Image alt='some' src="/tuvan_herb.png" width={100} height={100} />
            <Link href="/">Главная</Link>
            <Link href="/documents">Документы</Link>
            <Link href={'/sendrequest'}><a>Прием обращений</a></Link>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '2px', border: '1px solid blue', backgroundColor: 'white', zIndex: '0', cursor: 'pointer' }}>
              <input type="text" placeholder={'Поиск'} onChange={(e) => searchQuery.search(e.target.value)} style={{ flexGrow: '2', border: 'none', outline: 'none' }} />
              <Link href={'/search'} className='button' style={{ zIndex: '3' }}>
                <FaSearch
                  onClick={(e) => {
                    searchQuery.fetchPosts(searchQuery.query)
                  }}
                  style={{ zIndex: '3', color: 'black' }}
                />
              </Link>
            </div>


          </div>
        </Container>
      </div >

      <div className={header.navbar_brand}>
        <Container>

          <div className={header.navbar_brand_content}>

            <div className={header.navbar_brand_logo_name}>
              <Image alt='some' className={header.image} src={props.logosrc} width={100} height={100} />
              <div className='mx-3'>
                <h2 className={header.compressedName}>{props.compressedName}</h2>
                <h4>{props.fullName}</h4>
              </div>
            </div>


            <div className={header.eyes} onClick={handleChangeTheme}>
              <FaRegEye className={header.icon} />
              <p className={header.text}>Версия для слабовидящих</p>
            </div>

          </div>

        </Container>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-between flex-grow-1 pe-3">
              <Link href='/about' className='mb-3 mt-3 font-size-3'>Об администрации</Link>
              <Link href='/activity' className='mb-3 mt-3 font-size-3'>Деятельность</Link>
              <Link href='/projects' className='mb-3 mt-3 font-size-3'>Проекты</Link>
              <Link href='/press-service' className='mb-3 mt-3 font-size-3'>Пресс-служба</Link>
              <Link href='/contacts' className='mb-3 mt-3 font-size-3'>Контакты</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header >
  )
})

export default Header