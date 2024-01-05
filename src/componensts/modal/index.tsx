import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Fab, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function GrandePalavra({ palavra }: any) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Fab variant="extended"  onClick={handleClickOpen}>
                <MenuBookIcon sx={{ mr: 1 ,}}  />
                {palavra}
            </Fab>
            
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    <Typography variant='h2' color={'Highlight'} textTransform={'uppercase'}>
                        {palavra}
                    </Typography>
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose}>Sair</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
