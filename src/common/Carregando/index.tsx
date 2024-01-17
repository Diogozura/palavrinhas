import { Backdrop, CircularProgress } from "@mui/material";

export function Carregando(open: any) {
    return (<>
    <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
  
  >
  <CircularProgress color="inherit" />
  </Backdrop></>)
  }