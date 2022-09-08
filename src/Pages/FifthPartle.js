import React from 'react'
import { Box, Typography, Grid, Container } from '@mui/material'
import Tracé from '../Images/Tracé_14396.png'
import Akileur from '../Images/Akileur.png'

export default function FifthPartleok() {
    return (
        <div><Box>
            <Container>
                <Grid>
                    <Typography sx={{
                        marginLeft: '400px',
                        fontWeight: 'bold', color: '#003168', marginTop: '54px'
                    }}>Ils nous ont fait confiance</Typography>
                </Grid>
                <Grid container sx={{ marginLeft: '95px', marginTop: '35px' }}>
                    <Grid xs={6}>
                        <Typography sx={{ fontFamily: 'Orelega One' }}>
                            <Box component='img' src={Tracé} sx={{ marginRight: "10px" }} />Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            <Typography sx={{ marginLeft: '38px', fontFamily: 'Orelega One' }}> Dicta e55555x a, deserunt maxime vel expedita ab, at voluptatibus.</Typography></Typography>
                        <Box component='img' src={Akileur} sx={{ width: '45px', height: '45px', borderRadius: '60% 60% 60% 60%', marginLeft: '25px', marginTop: '15px' }} />
                    </Grid>
                    <Grid xs={4}>
                        <Typography sx={{
                            fontFamily: 'Orelega One'
                        }}>
                            <Box component='img' src={Tracé} sx={{ marginRight: "10px" }} />Lorem ipsum dolor<Typography sx={{ marginLeft: '38px', fontFamily: 'Orelega One' }}>Dicta eOKKKKKx a, deserunt maxime vel expedita</Typography></Typography>
                        <Box component='img' src={Akileur} sx={{ width: '45px', height: '45px', borderRadius: '60% 60% 60% 60%', marginLeft: '25px', marginTop: '15px' }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
        </div >
    )
}
