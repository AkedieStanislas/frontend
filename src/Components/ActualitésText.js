import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import Tab2 from '../Images/Tab2.png'

export default function ActualitésText(props) {
  const content = props.abouts.map((ComposantDActualité) =>
    <div key={ComposantDActualité.id}>
      <Box >
        <Box component='img' src={Tab2} sx={{ width: "360px", fontWeight: 'Bold', color: '#003168'}} /> <br /> <br />
        <Typography>{ComposantDActualité.date}</Typography> <br />
        <Typography sx={{ fontWeight: 'Bold', color: '#003168', fontSize: '18px', }}> {ComposantDActualité.title}</Typography> <br />
        <Typography sx={{ fontSize: '14px' }}> {ComposantDActualité.content}</Typography> <br />
        <Link underline='none' color="#003168">{ComposantDActualité.link}</Link><ArrowForwardSharpIcon sx={{ color: "#003168", marginRight: '35px' }} />
      </Box>
    </div>);
  return (
    <div>
      {content}
    </div>
  )
}
