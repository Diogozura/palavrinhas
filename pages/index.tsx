import Head from 'next/head'
import * as React from 'react';
import { Paper, Switch, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { themes } from '@/styles/theme';
import WordGenerator from '@/src/componensts/palavra';
import Footer from '@/src/componensts/Footer';
import Header from '@/src/componensts/header';







export default function Home() {

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Head>
          <title>Gerador de palavrinhas </title>
          <meta name="description" content="Gerador de palavrinhas com opção de customização de acordo com sua necessidade e qual fim você precisar usar , podendo escolher silabas e vogais. aproveite e compartilhe o clinica palavrinhas , seu nome gerador de palavrinhas" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <Container >
          <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'} sx={{ my: 2 , padding:2, height: '100vh'}}> 
            <WordGenerator /> 
          </Box>
        </Container>
  
        <Footer />
      </React.Fragment >

    </>
  )
}
