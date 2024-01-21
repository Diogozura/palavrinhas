import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, Box, Typography } from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';
import Link from 'next/link';
import nookies from 'nookies';

const ONE_WEEK = 60 * 60 * 24 * 7; // Uma semana em segundos

export interface SnackbarMessage {
  message: string;
  key: number;
}

export default function PermissionCookie({ ctx }: { ctx: any }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const cookies = nookies.get(ctx);
    if (!cookies.auth_cookie) {
      setOpen(true);
    }
  }, [ctx]);

  const handleClick = () => {
    nookies.set(ctx, 'auth_cookie', 'true', {
      maxAge: ONE_WEEK,
      path: '/',
    });
    setOpen(false);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <>
      <Button color="info" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="large" aria-label="close" color="info" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Box component="span">
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={handleClose}
        message="Note archived"
        action={action}
      >
        <Alert severity="warning">
          <Typography variant="h5" component="p">
            Cookies <CookieIcon />
          </Typography>
          <Typography>Usamos cookies para otimizar nosso site e nosso serviço.</Typography>
          <Button onClick={handleClick}>Aceitar</Button>
          <Button color="error" onClick={handleClose}>
            Não aceitar
          </Button>
          <Typography component="p">
            <Link href="/politicadeprivacidade" style={{ color: 'black' }}>
              Politica de privacidade
            </Link>
          </Typography>
        </Alert>
      </Snackbar>
    </Box>
  );
}
