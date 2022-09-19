import { Link, Typography } from '@mui/material'
import React from 'react'

export default function ComposantsduHeader(props) {
  return (
    <div>
        <Typography sx={{ fontSize: '14px', fontFamily: 'orelega-one', textTransform: 'titlecase'}}><Link href="#" underline="none" color="#707070">{props.text}</Link></Typography>
    <Typography sx={{ fontSize: '14px', fontFamily: 'orelega-one', textTransform: 'titlecase' }}><Link href="#" underline="none" color="#707070">{props.text}</Link></Typography></div>
  )
}