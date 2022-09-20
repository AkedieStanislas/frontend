import {
    Grid, Button, Box,
    Typography
} from '@mui/material'
import React from 'react'
import Footer from '../Components/Footer'
import Picture from '../Components/Picture'
import Header from '../Components/Header/Header'
import AProposDeNous from '../Components/Header/AProposDeNous'
import Temoignage from '../Components/Temoignage'
import ProcessusDeTravail from '../Components/ProcessusDeTravail'
import Solutions from '../Components/Solutions'
import Technologies from '../Components/Technologies'
import Actualités from '../Components/Actualités'
import NoServices from '../Components/NoServices'

export default function Acceuil() {
    return (
        <>
            <Header />
            <Grid container margin='170px' sx={{ fontFamily: 'orelega-one' }}>
                <Grid item xs={6}>
                    <Box>
                        <Typography variant="h3" sx={{ cursor: "default", marginRight: '75px', fontSize: '50px', fontWeight: 'Bold', fontFamily: 'Montsserat', lineSpacing: '55px' }}>Nos technologies, des solutions d'automatisations de vos processus métiers</Typography>
                        <Typography sx={{
                            fontFamily: 'Orelega One', cursor: "default", fontSize: '17px', lineSpacing: '24px', textTransform: 'titlecase', marginRight: '95px',
                        }}>Nous mettons avec vous des solutions sur-mesure pour faire face à vos défis commerciaux
                        </Typography>
                        <br /> <br />
                        <Button variant="contained" sx={
                            {
                                backgroundColor: "#003168", color: "white",
                                fontFamily: 'Montserrat', textTransform: 'lowercase', fontWeight: 'bold',
                                width: '30%', borderRadius: '5px', "&:hover": { backgroundColor: "#003168" }
                            }
                        }>J'ai Un Projet</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Picture />
                </Grid>
            </Grid>
            <Grid>
                <AProposDeNous />
                <NoServices />
                <ProcessusDeTravail />
                <Solutions />
                <Temoignage />
                <Technologies />
                <Actualités />
            </Grid>
            <footer >
                <Footer />
            </footer>
        </>
    )
}  