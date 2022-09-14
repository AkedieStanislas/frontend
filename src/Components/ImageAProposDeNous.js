import React from 'react'
import { Box } from '@mui/material'
import Akilgirl from '../Images/AKILgirl.png'
import Groupe from '../Images/Groupe_14605.png'
import Grille2 from '../Images/Grille_de_répétition_3.png'

export default function ImageAProposDeNous() {
  return (
    <div><Box component='img' src={Akilgirl} sx={{
        width: '70%', height: 'auto', marginLeft: '90px',
      }} />
      <Box component='img' src={Groupe}
        sx={{ position: 'absolute', right: '10px', top: '1060px', paddingRight: "970px", width: '200px', marginTop: '10px', zIndex: '2' }} />
      <Box component='img' src={Grille2}
        sx={{ position: 'absolute', right: '10px', top: '999px', paddingRight: "1100px", width: '120px' }} /></div>
  )
}
