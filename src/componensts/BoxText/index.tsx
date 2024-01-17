import { Box, Grid, Typography } from "@mui/material";


interface BoxTextProps {
    title: string;
    text: string;
    id: string;
}

export default function BoxText({ title, text, id }: BoxTextProps) {
    return (
        <Grid id={id} xs={8} mt={5} bgcolor={'#ffffff'} padding={3} borderRadius={2} boxShadow={'0px 4px 4px 0px #00000052'} component={'article'} display={'flex'} flexWrap={'wrap'} >
            <Typography component={'h2'} fontWeight={700} textAlign={'start'}  variant="h4" mb={2}>{title} </Typography>
            <Box fontWeight={500}
            id={id} dangerouslySetInnerHTML={{ __html: text }} />
        </Grid>
    )
}