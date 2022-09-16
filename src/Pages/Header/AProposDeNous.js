import React from 'react'
import { Box, Grid, Typography, Button } from '@mui/material'
import ImageAProposDeNous from '../../Components/ImageAProposDeNous'
import AProposDeNousText from '../../Components/AProposDeNousText'
import {about} from '../../Constants/constant'

export default function AProposDeNous() {
  return (
    <div>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 3, sm: 10 }} bgcolor='#003168' color='white' sx={{ marginTop: -5 }} >
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <ImageAProposDeNous />
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{
                fontSize: '25px', fontFamily: 'Orelega One',
                lineSpacing: '24px', textTransform: 'titlecase', fontWeight: 'bold', marginTop: '-8px'
              }}>A propos de nous</Typography><br />
              <Typography marginLeft='auto' sx={{
                fontSize: '15px', fontFamily: 'Orelega One', 
                textTransform: 'titlecase'
              }}>AKIL Technologies est une société de services en ingénierie<br />informatique (SS2I) dont le siège social est situé à Abidjan et<br />qui possède des bureaux affiliés à Paris et à Washington DC.<br /><br />
                Depuis notre création en 2015, nous avons fourni une large gamme de services pour <br />l'automatisation et la transformation
                digitale des différentes instutions de l'Etat <br />Ivoirien, de
                Grandes Entreprises, de PME et de startups de par le monde.
                Ces services incluent le Software engineering, le conseil et
                l'assistance informatique, la mise en oeuvre de solutions
                spécifiques et le pilotage de projets.
              </Typography> <br />
              <AProposDeNousText abouts={about} />
            </Box>
            <br />
            <Box>
              <Button variant="contained" sx={
                {
                  backgroundColor: "white", color: "#003168",
                  fontFamily: 'orelega-one', textTransform: 'lowercase', fontWeight: 'bold',
                  width: '30%', "&:hover": { backgroundColor: "white" }
                }
              }>Voir Plus</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}