import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import AkilLogo2 from '../Images/AkilLogo2.png'
import FooterText from './FooterText'

const textService= ["Product Design", "Conseil", "Developpement Produit", "Adapatation Continue du SI", "Data Science"]
const textLocalisations=["Abidjan, Cocody Riviera, Faya, Lauriers 9", "Washington DC, 8101 Sandy Sping RD Suite 100k", "Paris 4, Rue Michel-Ange, 7506-Paris, France" ]
const textContact=["+225 27 22 42 74 04","+337 58 73 23 13"]


export default function Footer() {
    return (
            <Box maxWidth='100%' sx={{display:'flex', justifyContent:'space-around', alignItems:'center', marginTop:'95px', flexDirection:'column', backgroundColor:"#003168", color:"white"}}>
                <Grid container borderBottom={2} sx={{marginRight:'-10rem'}}>
                    <Grid item xs={3} sx={{}}>
                        <Box component='img' src={AkilLogo2} sx={{marginTop: '15px'}}/>
                        <Typography sx={{
                            fontSize: '12px',
                            fontFamily: 'Orelega One', marginRight:'165px'
                        }}>
                            Nous accompagnons les entreprises dans la mise en place de solutions technologiques, qui facilitent et augmentent leurs productivités ainsi que leur valeur compétitive.
                        </Typography> <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography
                         sx={{ fontWeight: 'bold', fontSize: '20px', marginTop: '20px' }}>Services <br /> <br />
                         {textService.map((nom)=> { return <FooterText key={nom} text={nom}/>})}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ fontWeight: 'bold', fontSize: '20px', marginRight:'10px' , marginTop: '20px' }}>Localisations <br /> <br />
                        {textLocalisations.map((nom)=> { return <FooterText key={nom} text={nom}/>})}
                            </Box>
                    </Grid> <br />
                    <Grid item xs={3}>
                        <Box sx={{ fontWeight: 'bold', fontSize: '20px', marginRight:'10px' , marginTop: '20px' }} >Contacts <br /> <br />
                        {textContact.map((nom)=> { return <FooterText key={nom} text={nom}/>})}
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center" marginTop='25px' marginBottom='25px'>info@akiltechnologies.com</Box>
            </Box>
    )
}
