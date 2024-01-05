// pages/api/geradorPalavras.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Método não permitido
  }

  try {
    const response = await axios.post('https://dancxz.pythonanywhere.com/api/pseudopalavra/gerarpseudopalavra', req.body);
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar a palavra gerada:', error);
    res.status(500).json({ error: 'Erro ao buscar a palavra gerada' });
  }
}
