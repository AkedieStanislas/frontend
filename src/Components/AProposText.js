import React from 'react'
import { Typography, Box } from '@mui/material'
import Tracé from '../Images/Trace14396.png'

export default function AProposText(props) {
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <Typography sx={{
        fontSize: '20px', fontFamily: 'Orelega One',
        textTransform: 'titlecase', fontWeight: 'bold'
      }}> <Box component='img' src={Tracé} sx={{ marginRight: "10px" }} /> {post.title}</Typography>
      <Typography sx={{ marginLeft: '45px', fontFamily: 'orelega-one', textTransform: 'titlecase', fontSize: '15px' }}>{post.content}</Typography>
    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}
