import Head from 'next/head'
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import dynamic from 'next/dynamic';
import { Grid, Typography } from '@mui/material';

import { Carregando } from '../src/common/Carregando'
import Link from 'next/link';
import  { themes } from '@/styles/theme';

const BaseSite = dynamic(
  () => import('@/src/componensts/Base'),
  { loading: () => <Carregando />, ssr: true }
)
const BoxText = dynamic(
  () => import('@/src/componensts/BoxText'),
  { loading: () => <Carregando />, ssr: true }
)
const WordGenerator = dynamic(
  () => import('@/src/componensts/palavra'),
  { loading: () => <Carregando />, ssr: true }
)





export default function Home() {

  return (
   
      <React.Fragment>
        <CssBaseline />
        <Head>
          <title>Gerador de pseudopalavras - clínica palavrinhas </title>
          <meta name="description" content="easy calculos com a versão mais atualizada do Gerador de pseudopalavras" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container >

          <Box display={'grid'} component={'section'} alignItems={'center'} alignContent={'space-evenly'} justifyContent={'space-around'} sx={{  height: '100vh' }} >
            <Typography variant='h3' component={'h1'} bgcolor={themes.colors.laranja} padding={2} borderRadius={2}>Gerador de pseudopalavras com a versão mais atualizada : <Link href={'https://www.easycalculos.com/ferramentas/gerador-de-pseudopalavras'}> Versão do Easy cálculos </Link></Typography>
           
            {/* <Grid sx={{ bgcolor: '#ffffffda', padding: 1, textAlign: 'center', borderRadius: 10, textShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
              <ShareButtons title={'Clínica palavrinhas - Gerador de pseudopalavras'} />
            </Grid>
            <WordGenerator /> */}
          </Box>

    
        </Container>

      </React.Fragment >

  )
}
