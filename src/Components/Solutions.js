import React from 'react'
import { Box, Grid, Container, Typography, Button } from '@mui/material'
import Teams from '../Images/Team.png'

export default function Solutions() {
  return (
    <div>
      <Box px={{ xs: 5, sm: 5 }} py={{ xs: 5, sm: 5 }} bgcolor='#003168' color='white' sx={{ marginTop: 15 }} >
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={6}>
            <Box>
                <Typography sx={{
                  cursor: "default",marginLeft: '14px', fontSize: '50px', fontWeight: 'Bold', fontFamily: 'Montsserat', lineSpacing: '55px', marginTop: '-8px'
                }}>Solutions innovantes, Etats d'esprits</Typography><br />
                <Typography marginLeft='14px' sx={{
                  fontSize: '15px',
                  fontFamily: 'Orelega One', textTransform: 'titlecase', lineSpacing: '10000px'
                }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium culpa quo libero repudiandae <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, veritatis? <br />qui possède des bureaux affiliés à Paris et à Washington DC.<br /><br />
                  Depuis notre création en 2015, nous avons fourni une large gamme de services pour <br />l'automatisation et la transformation
                  digitale des différentes instutions de l'Etat <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  <br /> <br /> Quae ut fuga ea numquam ex neque, repudiandae debitis dolorem accusantium voluptates cupiditate nam ratione vero accusamus veniam odio deserunt maiores.
                </Typography> <br />
              </Box>
              <br />
              <Box>
                <Button variant="contained" sx={
                  {
                    backgroundColor: "white", color: "#003168", marginLeft: '15px', fontSize: '17px',
                    fontFamily: 'orelega-one', textTransform: 'lowercase', fontWeight: 'bold',
                    width: '205px', "&:hover": { backgroundColor: "white" }, height: '46px', borderRadius: '7px 7px'
                  }
                }>J'ai un projet</Button>
              </Box>
            </Grid>
            <Grid item xs={6}>
            <Box component='img' src={Teams} sx={{ width: '500px', height: '580px', marginLeft: '0px', marginTop: -10}} />
            </Grid>
          </Grid>
        </Container>
        <Box sx={{backgroundColor: '#0F234B', borderRadius: '10px 10px', width: '1075px', height: '120px', marginTop: 5, marginLeft: '55px'}}>
          <Grid container sx={{marginLeft: '195px'}}>
        <Grid item xs={2} sx={{marginTop:'15px', fontWeight: 'bold', fontSize: '35px'}}>1244 <br /> <Typography> Projets</Typography></Grid>
        <Grid item xs={2} sx={{marginTop:'15px', fontWeight: 'bold', fontSize: '35px'}}>34598 <br /> <Typography> Client staisfaits</Typography></Grid>
        <Grid item xs={2} sx={{marginTop:'15px', fontWeight: 'bold', fontSize: '35px'}}>50 <br /> <Typography>Developpeurs</Typography></Grid>
        <Grid item xs={2} sx={{marginTop:'15px', fontWeight: 'bold', fontSize: '35px'}}>45 <br /> <Typography>Applications <br /> réalisées</Typography></Grid>
        </Grid>
      </Box>
      </Box>
      
    </div>
  )
}