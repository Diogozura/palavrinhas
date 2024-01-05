/* eslint-disable @next/next/next-script-for-ga */

import type { AppProps } from 'next/app'
import Head from 'next/head';
import Script from 'next/script';
import { ThemeProvider } from '@mui/material/styles';
import '../styles/globalStyles.css';
import theme, { themes } from "../styles/theme";
import { NextSeo } from 'next-seo';
import { MyContextProvider } from '../src/componensts/contexts/inputs';
import React from 'react';
import 'react-toastify/dist/ReactToastify.min.css';

 


export default function App({ Component, pageProps }: AppProps) {

  return (

    <>
      <NextSeo
        additionalMetaTags={[{
          property: 'Front-end',
          content: 'Diogo Zura',
        },
        {
          property: 'Back-end',
          content: 'Danilo Silva',
        },]}
      />

      <Head>
        <link rel="icon" href="./favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png" />
        <link rel="manifest" href="./favicon/site.webmanifest" />

        <meta name="keywords" content="Palavras , gerador de palavras" />
        <meta name="author" content="Diogo zura" />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script strategy="lazyOnload" async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script async type="application/javascript"
        src="https://news.google.com/swg/js/v1/swg-basic.js" />
      <Script
        strategy="lazyOnload"
        id="GOOGLE_ANALYTICS"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
              `
        }}
      />
     

      <ThemeProvider theme={theme}>
        <MyContextProvider>
          <Component {...pageProps} />
        </MyContextProvider>
      </ThemeProvider>

    </>
  )
}
