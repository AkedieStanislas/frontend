import {
    Grid, Button, Box, Card, Link,
    Typography, Container
} from '@mui/material'
import React from 'react'
import Header from './Header'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import Firstpartle from './Firstpartle'
import Images from './Images'
import ThirdPartle from './ThirdPartle'
import Secondpartle from './Secondpartle';
import FourthPartle from './FourthPartle';
import FifthPartle from './FifthPartle';
import SixthPartle from './SixthPartle';
import Footer from './Footer';
import Sa from './Sa';


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
                    <Images />
                </Grid>
            </Grid>
            <Grid>
                <Firstpartle />
            </Grid>
            <Grid><Sa /></Grid>
            <Grid><Secondpartle /></Grid>
            <Grid>
                <ThirdPartle />
            </Grid>
            <Grid>
                <FourthPartle />
            </Grid>
            <Grid>
                <FifthPartle />
            </Grid>
            <Grid>
                <SixthPartle />
            </Grid>
            <footer >
                <Footer />
            </footer>
        </Card>
        </>
    )
}  