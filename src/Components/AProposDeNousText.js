import React from 'react'
import { Typography } from '@mui/material'
import Tracé from '../Images/Trace14396.png'

export default function AProposDeNousText(props) {
  const content = props.abouts.map((about) =>
    <div key={about.id}>
      <Typography sx={{
        fontSize: '20px', fontFamily: 'Orelega One',
        textTransform: 'titlecase', fontWeight: 'bold'
      }}> <img src={Tracé} alt="" sx={{ marginRight: "10px" }}/> {about.title}</Typography>
      <Typography sx={{ marginLeft: '45px', fontFamily: 'orelega-one', textTransform: 'titlecase', fontSize: '15px' }}>{about.content}</Typography>
    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}
