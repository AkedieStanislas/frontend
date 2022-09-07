import React from 'react'
import { Box, Grid, Button, Link } from '@mui/material'
import Grille from '../Images/Grille_de_répétition_2.png'
import Akileur from '../Images/Akileur.png'
import ForumIcon from '@mui/icons-material/Forum';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Images() {
  return (
    <div>
      <Box component='img' src={Akileur} sx={{ width: '60%', height: '100%', borderRadius: '10px 10px', zIndex: 2 }} />
      <Box component='img' src={Grille} sx={{ position: 'absolute', left: '200px', top: '390px', height: '290px', paddingLeft: "950px" }} />
      <Grid><Button><ForumIcon sx={{
        "&:hover": { color: "#003168", backgroundColor: 'white' },
        width: '45px', height: '45px', marginLeft: '355px', marginTop: -10, marginBottom: -15, backgroundColor: '#003168', color: 'white', borderRadius: '60% 60% 60% 60%'
      }} /></Button></Grid>
    </div>
  )
}
