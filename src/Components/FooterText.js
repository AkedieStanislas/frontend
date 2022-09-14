import { Typography } from '@mui/material'
import React from 'react'

export default function FooterText(props) {
    console.log(props)
  return (
    <Typography sx={{
        fontSize: '12px',
        fontFamily: 'Orelega One', marginBottom: '13px'
    }}>{props.text}
    </Typography>   
  )
}
