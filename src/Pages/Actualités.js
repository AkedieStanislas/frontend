import React from 'react'
import { Button, Grid, Typography, Stack } from '@mui/material'
import ActualitésText from '../Components/ActualitésText';
import { ComposantDActualité } from '../Constants/constant';

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
                <Grid item xs={4}>
                    <ActualitésText abouts={ComposantDActualité} /><br /></Grid>
                <Grid item xs={4}>
                    <ActualitésText abouts={ComposantDActualité} /><br /></Grid>
                <Grid item xs={4}>
                    <ActualitésText abouts={ComposantDActualité} />
                    <br />
                </Grid>
            </Grid>
        </div>
    )
}
