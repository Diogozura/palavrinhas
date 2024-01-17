import Image from "next/image"
import Link from "next/link"
import { Box, Typography } from "@mui/material";
import { themes } from "@/styles/theme";
export default function Footer() {


    return (
        <>
            <Box component={'footer'} sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                bgcolor: themes.colors.rosa,
                bottom: 'auto'
            }}>
                <Link href={'/contato'}>Contato</Link>
                <Typography sx={{ padding: '10px' }}>&copy; Desenvolvido por <Link href={'https://easycalculos.com'}>Easy cálculos</Link> 2024</Typography>


                <Link href={'/politicadeprivacidade'}>Politicas de privacidade</Link>


            </Box>


        </>
    )
}