import React from 'react';
import Head from 'next/head'
const Footer = React.lazy(() => import('../components/Footer/Footer'))
import '../styles/globals.scss'
import theme from '../store/theme';
import { observer } from 'mobx-react-lite';
import DarkMode from "../components/Eyes";
import Script from 'next/script';
import Image from 'next/image';

const MyApp = observer(({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/tuvan_herb.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}></link>

      </Head>
      {theme.theme === 'dark' && (<DarkMode />)}

      <div className='min-h-screen flex flex-col'>
        <Component {...pageProps} />
      </div>
      <Script src="https://lidrekon.ru/slep/js/jquery.js"></Script>
      <Script src="https://lidrekon.ru/slep/js/uhpv-hover-full.min.js"></Script>
    </>
  )
})

export default MyApp