import { themes } from "@/styles/theme";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/legacy/image";
import Link from "next/link";
// import animationData from '../public/rocket.json';
import Lottie from 'lottie-react';
import dynamic from "next/dynamic";

const BaseSite = dynamic(
    () => import('@/src/componensts/Base'),
    { loading: () => <p>Loading ...</p>, ssr: true }
)

const { default: animationData } = await import("../public/rocket.json", { assert: { type: "json" } });


export default function Error404() {
    return (
        <BaseSite>

            <Container>
                <Box display={'grid'} component={'section'} justifyItems={'center'} alignContent={'space-evenly'} justifyContent={'space-around'} sx={{ my: 2, padding: 1, height: '100vh' }} bgcolor={'#ffffff78'}>

                    <Lottie animationData={animationData} loop={true} style={{ width: '180px', height: '180px' }} />
                    <Typography component={'h1'} variant="h3">Infelizmente essa página não foi encontrada</Typography>
                    <Stack spacing={2} m={2} bgcolor={themes.colors.amarelo} textAlign={'center'} padding={1} borderRadius={2}><Link href={'/'}>Voltar para home</Link></Stack>
                </Box>

            </Container>
        </BaseSite>
    )
}