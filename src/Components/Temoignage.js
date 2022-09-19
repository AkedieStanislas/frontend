import React from 'react'
import { Box, Typography, Grid, Container } from '@mui/material'
import TemoignageText from '../TemoignageText'
import { ComposantTemoignage } from '../../Constants/constant'

export default function Temoignage() {
    return (
        <Box>
            <Container>
                <Grid>
                    <Typography sx={{
                        marginLeft: '400px',
                        fontWeight: 'bold', color: '#003168', marginTop: '54px'
                    }}>Ils nous ont fait confiance</Typography>
                </Grid>
                <Grid container sx={{ marginLeft: '95px', marginTop: '35px' }}>
                    <Grid item xs={6}>
                        <TemoignageText abouts={ComposantTemoignage} />
                    </Grid>
                    <Grid item xs={6}>
                        <TemoignageText abouts={ComposantTemoignage} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
