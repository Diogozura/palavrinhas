import Head from 'next/head'
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import dynamic from 'next/dynamic';
import { Grid, Typography } from '@mui/material';
import ShareButtons from '@/src/common/Share';
import { Carregando } from '../src/common/Carregando'

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
    <BaseSite>
      <React.Fragment>
        <CssBaseline />
        <Head>
          <title>Gerador de pseudopalavras - clínica palavrinhas </title>
          <meta name="description" content="Por meio da combinação de sílabas e vogais, desenvolvemos um gerador de palavras que proporciona criação 'aleatória'. Este projeto é direcionado ao público infantil, especialmente aqueles que utilizam fornos, visando estimular a linguagem das crianças. A variedade de palavras geradas oferece uma abordagem única para promover a comunicação e o aprendizado de forma lúdica e envolvente." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container >

          <Box display={'grid'} component={'section'} alignItems={'center'} alignContent={'space-evenly'} justifyContent={'space-around'} sx={{ my: 2, padding: 1, height: '100vh' }}>
            <Grid sx={{ bgcolor: '#ffffffda', padding: 1, textAlign: 'center', borderRadius: 10, textShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
              <ShareButtons title={'Clínica palavrinhas - Gerador de pseudopalavras'} />
            </Grid>
            <WordGenerator />
          </Box>

          <Box component={'section'} padding={1} justifyContent={'space-around'} borderRadius={5} >

           

            <BoxText id='gerador' title='Como funciona o gerador de palavras '
              text='Por meio da combinação de sílabas e vogais, desenvolvemos um gerador de palavras que proporciona criação "aleatória" . 
              <br/><br/>
              Este projeto é direcionado ao público infantil, especialmente aqueles que utilizam fornos, visando estimular a linguagem das crianças. A variedade de palavras geradas oferece uma abordagem única para promover a comunicação e o aprendizado de forma lúdica e envolvente .'/>


            <BoxText id='vogal' title='O que é vogal' text='Uma vogal é um tipo de som na fala humana que é produzido sem obstrução significativa do fluxo de ar. Em termos mais simples, uma vogal é um som de fala que é produzido quando o ar flui livremente através da boca, sem ser bloqueado por obstáculos como os lábios, a língua ou a garganta.
            <br/><br/>
            As vogais são uma parte fundamental da linguagem e são essenciais na formação de sílabas em palavras. Em muitos idiomas, incluindo o português, as vogais são classificadas como sons sonoros e geralmente são representadas pelas letras: A, E, I, O, U .' />

            <BoxText id='consoante' title='O que é consoante' text='As consoantes são sons de fala nos quais o fluxo de ar é obstruído ou restrito de alguma forma durante a produção do som. Em contraste com as vogais, as consoantes envolvem a interrupção ou restrição do fluxo de ar por meio de diferentes articulações, como os lábios, a língua, o palato, e faringe ou as cordas vocais.
            <br/><br/>
            No português e em muitos outros idiomas, as consoantes são classificadas de acordo com vários critérios, incluindo o modo de articulação, o ponto de articulação e a sonoridade. Alguns exemplos de consoantes incluem /b/, /p/, /m/, /t/, /d/, /n/, /s/, /z/, /ʃ/, /ʒ/, entre outros.
            <br/><br/>
            Assim como as vogais, as consoantes desempenham um papel crucial na formação de palavras e na clareza da linguagem. A combinação de vogais e consoantes em diferentes padrões cria a diversidade de sons que constituem as palavras em um idioma .' />

            <BoxText id='consoante' title='O que é silaba' text='As sílabas são unidades fonológicas nas palavras que consistem em um ou mais sons. Cada sílaba geralmente contém uma vogal, que é o núcleo da sílaba, e pode ser precedida ou seguida por consoantes. Em muitos idiomas, incluindo o português, a formação de sílabas segue algumas regras específicas.
            <br/><br/>
          - <strong> Abertura de sílaba </strong>: As vogais podem aparecer sozinhas em uma sílaba (ex: "a", "o") ou podem ser precedidas ou seguidas por consoantes .
          <br/><br/>
          - <strong> Consoantes iniciais </strong> : Uma sílaba pode começar com uma consoante ou um conjunto de consoantes (ex: "pra-to", "es-co-la") .
          <br/><br/>
          - <strong> Consoantes finais </strong>: Uma sílaba pode terminar com uma consoante ou um conjunto de consoantes (ex: "an-do", "tem") .
          <br/><br/>
          - <strong> Encontros consonantais </strong>: Algumas sílabas podem ter encontros consonantais, onde duas ou mais consoantes aparecem juntas (ex: "blu-me") .
          <br/><br/>
          A compreensão das sílabas é importante para a pronúncia correta das palavras e é fundamental na ortografia e na fonologia de uma língua. Ao dividir palavras em sílabas, é possível determinar a tonicidade (ênfase) e a estrutura fonética de uma palavra .' />
          </Box>
        </Container>

      </React.Fragment >

    </BaseSite>
  )
}
