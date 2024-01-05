// WordGenerator.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import GrandePalavra from './modal';
import { themes } from '@/styles/theme';
import animationData from '../../public/loading.json';
import Lottie from 'lottie-react';

interface WordGeneratorProps { }


const WordGenerator: React.FC<WordGeneratorProps> = () => {
  const [vogais, setVogais] = useState<string[]>(['a', 'o', 'i']);
  const [consoantes, setConsoantes] = useState<string[]>(['b', 'c', 'd', 'f']);
  const [qtdPalavras, setQtdPalavras] = useState<number>(1);
  const [generatedWord, setGeneratedWord] = useState<string[]>([]);
  const [showButton, setShowButton] = useState(true);
  const [erroSelecaoConsoantes, setErroSelecaoConsoantes] = useState<string | null>(null);
  const [erroSelecaoVogais, setErroSelecaoVogais] = useState<string | null>(null);

  const handleGenerateWord = async () => {
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
    setShowButton(false);
    handleGenerateWord();
  };

  const consoantess = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z'];
  const voagais = ['a', 'e', 'i', 'o', 'u'];

  useEffect(() => {
    handleGenerateWord();
  }, []);

  return (
    <>
      <Grid container xs={12} padding={1} justifyContent={'space-around'} bgcolor={'#ffffff76'} borderRadius={5} border={'1px solid #000000'} boxShadow={'0px 4px 4px 0px #00000052'}>
        <Grid item xs={8} padding={1} borderRadius={5} bgcolor={themes.colors.amarelo} border={'1px solid #000000'} boxShadow={'0px 4px 4px 0px #00000052'}>
          <Typography component={'h2'} textAlign={'center'} variant='h2'>
            {!showButton ? (
              <Lottie animationData={animationData} loop={false} style={{ width: '90px', height: '90px' }} onComplete={() => setShowButton(true)} />
            ) : generatedWord}
          </Typography>
        </Grid>

        <Button variant="contained" sx={{ bgcolor: themes.colors.rosa, color: '#000000', borderRadius: '20px', m: 1 }} onClick={handleAnimation}>
          Gerar Palavra
        </Button>

        <Grid xs={12} mt={8} bgcolor={'#ffffff'} borderRadius={2} component={'section'} display={'flex'} flexWrap={'wrap'} justifyContent={'space-around'}>

          <Stack spacing={2}  m={2}>
          <FormControl  fullWidth>
            <Autocomplete
              multiple
              options={voagais}
              value={vogais}
              onChange={(_, newValue) => setVogais(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Vogais"
               
                />
              )}
              />
              {erroSelecaoVogais && <Alert severity="error">{erroSelecaoVogais}</Alert>}
          </FormControl>
          </Stack>
           
          <Stack  spacing={2} m={2}>
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
                  label="Consoantes"
                
                />
              )}
              />
                            {erroSelecaoConsoantes && <Alert severity="error">{erroSelecaoConsoantes}</Alert>}

          </FormControl>
          </Stack>
         

        </Grid>
      </Grid>
    </>
  );
};


export default WordGenerator;
