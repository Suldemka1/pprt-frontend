import React from 'react';
import Head from 'next/head'
const Footer = React.lazy(() => import('../components/Footer/Footer'))
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'
import '../styles/eye-easy/variables.scss'
import '../styles/eye-easy/dark-theme.scss'
import '../styles/eye-easy/light-theme.scss'
import '../styles/mainpage.scss'
import '../styles/static_page_layout.scss'
import Header from '../components/Header/Header';
import Eyes from '../components/Eyes/Eyes';
import MainLayout from '../layouts/MainLayout/MainLayout';
import theme from '../store/theme';
import { observer } from 'mobx-react-lite';

const MyApp = observer(({ Component, pageProps }) => {
  
  return (
    <MainLayout>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/tuvan_herb.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"></link>
      </Head>

      { theme.theme == 'dark' &&  (<Eyes />) }

      <Header
        logosrc={`/tuvan_herb.png`}
        // compressedName={'ППРТ в г. Москве'}
        fullName={'Полномочное представительство Республики Тыва в г. Москве'} />

      <Container className='body-container'>

        <Component {...pageProps} />

      </Container>

      <Footer
        mincompressedname={'Полномочное представительство Республики Тыва в г. Москве'}
        phone={'+7(499)236-48-01'}
        email={'info@pprt17.ru'} />
    </MainLayout>
  )
})

export default MyApp