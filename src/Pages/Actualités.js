import React from 'react'
import { Button, Grid, Box, Typography, Stack, Link } from '@mui/material'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import Tab2 from '../Images/Tab2.png'

export default function Actualités() {
    return (
        <div>
            <Grid>
                <Stack sx={{ paddingTop: 2 }}>
                    <Typography sx={{ marginLeft: 10, color: '#003168', fontWeight: 'bold', fontSize: '25px' }}>Actualités
                        <Button sx={{
                            marginLeft: '900px', fontFamily: 'orelega-one', color: 'white',
                            textTransform: 'lowercase', fontWeight: 'bold', backgroundColor: '#003168', "&:hover": { backgroundColor: "#003168" }
                        }}>Voir toute l'actualité</Button></Typography>
                    <Typography sx={{ marginLeft: 10 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography></Stack>
            </Grid>
            <Grid container sx={{ marginLeft: "43px", marginTop: "55px" }}>
                <Grid item xs={4}><Box component='img' src={Tab2} sx={{ width: "360px", fontWeight: 'Bold', color: '#003168' }} /><br /><br /><Typography>23 janvier 2021</Typography><br />
                    <Typography sx={{ fontWeight: 'Bold', color: '#003168', fontSize: '18px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti</Typography> <br />
                    <Typography sx={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Veritatis error corrupti,  repellat maxime nisi itaque repudiandae quidem a impedit illo libero ullam est? Sed, pariatur?</Typography>
                    <br />
                    <Link underline='none' color="#003168">Lire l'article</Link> <ArrowForwardSharpIcon sx={{ color: "#003168" }} /></Grid>
                <Grid item xs={4}><Box component='img' src={Tab2} sx={{ width: "360px", fontWeight: 'Bold', color: '#003168' }} /><br /><br /><Typography>23 janvier 2021</Typography><br />
                    <Typography sx={{ fontWeight: 'Bold', fontSize: '18px', color: '#003168', marginLeft: '3px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Typography> <br />
                    <Typography sx={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Veritatis error corrupti,  repellat maxime nisi itaque repudiandae quidem a impedit illo libero ullam est? Sed, pariatur?</Typography>
                    <br />
                    <Link underline='none' color="#003168">Lire l'article</Link> <ArrowForwardSharpIcon sx={{ color: "#003168", marginRight: '335px' }} /></Grid>
                <Grid item xs={4}><Box component='img' src={Tab2} sx={{ width: "360px" }} /><br /><br /><Typography>23 janvier 2021</Typography><br />
                    <Typography sx={{ fontSize: '18px', fontWeight: 'Bold', color: '#003168' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti</Typography> <br />
                    <Typography sx={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Veritatis error corrupti,  repellat maxime nisi itaque repudiandae quidem a impedit illo libero ullam est? Sed, pariatur?</Typography>
                    <br />
                    <Link underline='none' color="#003168">Lire l'article</Link><ArrowForwardSharpIcon sx={{ color: "#003168", marginRight: '335px' }} /></Grid>
            </Grid>
        </div>
    )
}