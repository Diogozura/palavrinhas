
import { Box, Container, Typography } from "@mui/material";
import { CardMedia } from '@mui/material';
import Link from "next/link";

import Head from "next/head";
import BaseSite from "@/src/componensts/Base";
import { themes } from "@/styles/theme";

export default function Contato() {
    return (
        <>
            <BaseSite>
            <Head>
                    <title>Easy Cáculos - Contato </title>
                    <meta name="description" content="Tá com dúvida sugestão , entre em contato easy cálculos " />
                    <link rel="canonical" href={`https://www.easycalculos.com/contato` }/>
                </Head>

                <Container >
                    <Box display={'grid'} component={'section'}  bgcolor={'#ffffff78'}>
                        
               
                    <CardMedia
                        component={'iframe'}
                        
                        height={'1200px'}
                        src="https://docs.google.com/forms/d/e/1FAIpQLSckjcxQN6Wq-2vaU0O59B01hyBBXhlLwPaGAsqySMWyLkXWxg/viewform?embedded=true">

                    </CardMedia>

                    </Box>
                    </Container>
            </BaseSite>

        </>
    )
}