// WordGenerator.tsx
import React, { useState, useEffect } from 'react';
import {
  Alert,
  Autocomplete,
  Button,
  FormControl,
  Grid,

  Stack,
  TextField,

} from '@mui/material';
import GrandePalavra from './modal';
import { themes } from '@/styles/theme';

import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';
import Link from 'next/link';
import { Carregando } from '../common/Carregando';
interface WordGeneratorProps { }

const WordGenerator: React.FC<WordGeneratorProps> = () => {
  const [vogais, setVogais] = useState<string[]>(['a', 'o', 'i']);
  const [consoantes, setConsoantes] = useState<string[]>(['b', 'c', 'd']);
  const [qtdPalavras, setQtdPalavras] = useState<number>(1);
  const [generatedWord, setGeneratedWord] = useState<string[]>([]);
  const [erroSelecaoConsoantes, setErroSelecaoConsoantes] = useState<string | null>(null);
  const [erroSelecaoVogais, setErroSelecaoVogais] = useState<string | null>(null);
  const [carregando, setCarregando] = useState<boolean | null>(true);

  const handleGenerateWord = async () => {
    setCarregando(true)
    try {
      const response = await fetch('/api/geradorPalavras', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ vogais, consoantes, qtdPalavras }),
      });

      if (!response.ok) {
        throw new Error('Erro ao buscar a palavra gerada');
      }

      const data = await response.json();
      setGeneratedWord(data.palavras);
      setCarregando(false)
    } catch (error) {
      console.error('Erro ao buscar a palavra gerada:', error);
    }
  };

  const handleAnimation = () => {
    if (consoantes.length < 3) {
      setErroSelecaoConsoantes('Selecione pelo menos 3 consoantes.');
      return;
    } else if (vogais.length < 3) {
      setErroSelecaoVogais('Selecione pelo menos 3 vogais.');
      return;
    }

    // Se o número de consoantes for 3 ou mais, limpe a mensagem de erro
    setErroSelecaoConsoantes(null);
    setErroSelecaoVogais(null);
    handleGenerateWord();
  };

  const consoantess = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z'];
  const voagais = ['a', 'e', 'i', 'o', 'u'];

  useEffect(() => {
    handleGenerateWord();
  }, []);

  return (
    <>
      <Grid container xs={12} padding={1} justifyContent={'space-around'} borderRadius={5} >

        <Grid item xs={10} width={'90%'} padding={2} height={'100px'} borderRadius={2} bgcolor={themes.colors.amarelo} justifyContent={'center'} textAlign={'center'} border={'1px solid #000000'} boxShadow={'0px 4px 4px 0px #00000052'}>
          <GrandePalavra palavra={generatedWord} />
        </Grid>
       
          <Button variant="contained" sx={{
            bgcolor: themes.colors.rosa, color: '#000', boxShadow: '1px solid #000000', m: 1, fontSize: '1.3rem', fontWeight: 700, '&:hover': {
              backgroundColor: themes.colors.rosa, // Substitua pelo tom desejado
            },
            '&:focus': {
              backgroundColor: themes.colors.rosa, // Substitua pelo tom desejado
            },
          }} onClick={handleAnimation}>
            Start
          </Button>

     
        {carregando ? <Carregando/> : null}
         

        <Grid xs={12} mt={5} bgcolor={'#ffffff'} borderRadius={2} boxShadow={'0px 4px 4px 0px #00000052'} component={'section'} display={'flex'} flexWrap={'wrap'} justifyContent={'space-around'}>

          <Stack spacing={2} m={2} flexDirection={'row'}>
            <FormControl fullWidth >
              
              <Autocomplete
                multiple
                options={voagais}
                value={vogais}
                
                onChange={(_, newValue) => setVogais(newValue)}
                renderInput={(params) => (
                  <TextField
                  sx={{width: 280}}
                    {...params}
                    variant="standard"
                    label="Vogais"
                    color="secondary" focused
                  />
                )}
              />
              {erroSelecaoVogais && <Alert severity="error">{erroSelecaoVogais}</Alert>}
            </FormControl>
            <Link href='#vogal'><DeviceUnknownIcon /></Link>

          </Stack>

          <Stack spacing={2} m={2} flexDirection={'row'}>
            <FormControl fullWidth>
              <Autocomplete
                multiple
                options={consoantess}
                value={consoantes}
                onChange={(_, newValue) => setConsoantes(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    sx={{width: 280}}
                    label="Consoantes"
                    color="success" focused
                  />
                )}
              />
              {erroSelecaoConsoantes && <Alert severity="error">{erroSelecaoConsoantes}</Alert>}

            </FormControl>
            <Link href='#consoante'><DeviceUnknownIcon /></Link>
          </Stack>


        </Grid>
      </Grid>
    </>
  );
};


export default WordGenerator;
