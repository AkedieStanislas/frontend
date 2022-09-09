import {
    Grid, Button, Box, Card,
    Typography
} from '@mui/material'
import React from 'react'
import Picture from '../Components/Picture'
import Contenu_3 from './Contenu_3';
import Contenu_5 from './Contenu_5';
import Contenu_7 from './Contenu_7';
import Contenu_6 from './Contenu_6';
import Contenu_1 from './Contenu_1';
import Footer from './Footer';
import Contenu_4 from './Contenu_4';
import Header from './Header';
import Contenu_2 from './Contenu_2';


export default function HeaderContent() {
    return (
        <><Card sx={{ maxWidth: 1390 }}>
            <Header />
            <Grid container margin='170px' sx={{ fontFamily: 'orelega-one' }}>
                <Grid item xs={6}>
                    <Box>
                        <Typography variant="h3" sx={{ cursor: "default", marginRight: '75px', fontSize: '50px', fontWeight: 'Bold', fontFamily: 'Montsserat', lineSpacing: '55px' }}>Nos technologies, des solutions d'automatisations de vos processus métiers</Typography></Box>
                    <Box>
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
            <Grid><Contenu_1 /></Grid>
            <Grid><Contenu_2 /></Grid>
            <Grid><Contenu_3 /></Grid>
            <Grid><Contenu_4 /> </Grid>
            <Grid><Contenu_5 /></Grid>
            <Grid>
                <Contenu_6 />
            </Grid>
            <Grid>
                <Contenu_7 />
            </Grid>
            <footer >
                <Footer />
            </footer>
        </Card>
        </>
    )
}  