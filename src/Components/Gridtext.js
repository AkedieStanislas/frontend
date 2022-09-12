import React from 'react'
import { Grid } from '@mui/material'

const textService= ["Product Design", "Conseil", "Developpement Produit", "Adapatation Continue du SI", "Data Science"]

export default function Gridtext(props) {
  return (
    <div><Grid item xs={3}><Typography
    sx={{ fontWeight: 'bold', fontSize: '20px', marginTop: '20px' }}>Services <br /> <br />
    {textService.map((nom)=> { return <FooterText key={nom} text={nom}/>})}{props.text}
   </Typography></Grid></div>
  )
}
