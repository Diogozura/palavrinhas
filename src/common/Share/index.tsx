import { Box, Button, Grid } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShareIcon from '@mui/icons-material/Share';
import XIcon from '@mui/icons-material/X';
const ShareButtons = ({ title }:any) => {
  // URLs de compartilhamento para cada rede social
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title)}%20https://www.clinicapalavrinhas.com.br`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=https://www.clinicapalavrinhas.com.br&text=${encodeURIComponent(title)}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=https://www.clinicapalavrinhas.com.br&title=${encodeURIComponent(title)}`;
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: 'Conheça o easy cálculos',
        url: window.location.href,
      })
        .then(() => console.log('Compartilhado com sucesso!'))
        .catch((error) => console.error('Erro ao compartilhar:', error));
    } else {
      // Lógica de compartilhamento alternativo para navegadores que não suportam navigator.share
      // Pode ser um modal de compartilhamento personalizado ou uma simples caixa de diálogo
      alert('Compartilhamento não suportado neste navegador.');
    }
  };
  return (
    <Box component={'aside'} display={'flex'} flexWrap={'wrap'} maxWidth={300} margin={'3em auto'}  justifyContent={'space-around'}>
      <Grid item>
        <Button
          variant="contained"
          color="success"
          sx={{
            "justify-content": "flex-end"}}
          startIcon={<WhatsAppIcon />}
          href={whatsappShareUrl}
        >
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="inherit"
          sx={{
            "justify-content": "flex-end"}}
          startIcon={<XIcon />}
          href={twitterShareUrl}
        >
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          sx={{
            "justify-content": "flex-end"}}
          startIcon={<LinkedInIcon />}
          href={linkedinShareUrl}
        >
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained"
          onClick={handleShare}
          sx={{
            "justify-content": "flex-end"}}
          color="secondary" startIcon={<ShareIcon/>}>
        </Button>

      </Grid>
    </Box>

  );
};

export default ShareButtons;


