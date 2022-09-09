import React from 'react'
import { Box, Grid, Container, Typography, Button } from '@mui/material'
import Tracé from '../Images/Tracé_14396.png'
import FootPicture from '../Components/FootPicture'

export default function About() {
  return (
    <div>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 3, sm: 10 }} bgcolor='#003168' color='white' sx={{ marginTop: -5 }} >
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <FootPicture />
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography sx={{
                  fontSize: '25px', fontFamily: 'Orelega One',
                  lineSpacing: '24px', textTransform: 'titlecase', fontWeight: 'bold', marginTop: '-8px'
                }}>A propos de nous</Typography><br />
                <Typography marginLeft='auto' sx={{
                  fontSize: '15px',
                  fontFamily: 'Orelega One', textTransform: 'titlecase', lineSpacing: '10000px'
                }}>AKIL Technologies est une société de services en ingénierie<br />informatique (SS2I) dont le siège social est situé à Abidjan et<br />qui possède des bureaux affiliés à Paris et à Washington DC.<br /><br />
                  Depuis notre création en 2015, nous avons fourni une large gamme de services pour <br />l'automatisation et la transformation
                  digitale des différentes instutions de l'Etat <br />Ivoirien, de
                  Grandes Entreprises, de PME et de startups de par le monde.
                  Ces services incluent le Software engineering, le conseil et
                  l'assistance informatique, la mise en oeuvre de solutions
                  spécifiques et le pilotage de projets.
                </Typography> <br />
                <Typography sx={{
                  fontSize: '20px', fontFamily: 'Orelega One',
                  lineSpacing: '24px', textTransform: 'titlecase', fontWeight: 'bold'
                }}>
                  <Box component='img' src={Tracé} sx={{ marginRight: "10px" }} />Excellente solution pour les entreprises</Typography>
                <Typography sx={{ marginLeft: "40px", fontFamily: 'orelega-one', textTransform: 'titlecase', fontSize: '15px' }}>Nous fournissons un excellent service de développemnt
                  de logiciels pour créer des applications innovantes.</Typography>
                <Typography sx={{
                  fontSize: '20px', fontFamily: 'Montserrat', lineSpacing: '24px',
                  textTransform: 'titlecase', fontWeight: 'bold',
                }}><Box component='img' src={Tracé} sx={{ marginRight: "10px" }} />Satisfaction des clients</Typography>
                <Typography sx={{ marginLeft: "40px", fontSize: '15px', fontFamily: 'orelega-one', textTransform: 'titlecase' }}>Quartier voluptatum voluptatibus ipsum labore aliquid, mollitia quis facere dignissimos? Corrupti, nemo.
                  Avec nos méthodes et méthodologies, nos clients sont
                  satisfaits et deviennent nos ambassadeurs dans leurs
                  réseaux professionnels.</Typography>
                <Typography sx={{
                  marginRight: "100px", fontSize: '20px', fontFamily: 'Montserrat',
                  lineSpacing: '24px', textTransform: 'titlecase', fontWeight: 'bold'
                }}>
                  <Box component='img' src={Tracé} sx={{ marginRight: "10px" }} />Equipe Expérimentée</Typography>
                <Typography sx={{ marginLeft: "40px", fontSize: '15px', fontFamily: 'orelega-one', padding: 'auto', textTransform: 'titlecase' }}>Les skills de nos membres sont aux normes
                  internationales. Fort de leurs expériences, ils s'adaptent à
                  tout type de terrain et apportent la garantie d'une
                  expertise reconnue.</Typography>
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
        </Container>
      </Box>
    </div>
  )
}