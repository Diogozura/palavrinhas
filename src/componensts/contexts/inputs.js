import { createContext, useState, useContext } from 'react';

// Crie o contexto
const MyContext = createContext();

// Crie um provedor para o contexto
export function MyContextProvider({ children }) {
  const [contextValues, setContextValues] = useState({
    entrada: '',
    valorMensal:'',
    valorInicial: '',
    meses: '',
    taxaJuros: '',
    amortizacaoExtra: '0',
    aviso: true,
  });
  const [relatorioValues, setRelatorioValues] = useState({
    relatorios:[]
  });
  const [parcelasValues, setParcelasValues] = useState({
    parcelas:[]
  });
  const resetContext = () => {
    setRelatorioValues({ relatorios: [] });
    setParcelasValues({ parcelas: [] }); // Isso está correto
  };

  return (
    <MyContext.Provider value={{ contextValues, setContextValues, relatorioValues , setRelatorioValues, parcelasValues, setParcelasValues , resetContext }}>
      {children}
    </MyContext.Provider>
  );
}

// Crie um hook personalizado para usar o contexto em qualquer componente
export function useMyContext() {
  return useContext(MyContext);
}