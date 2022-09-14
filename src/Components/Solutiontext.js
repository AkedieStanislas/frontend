import { Stack, Typography } from '@mui/material';
import React from 'react'

export default function Solutiontext(props) {
    const content = props.abouts.map((about) =>
        <div key={about.id}>
             <Stack  direction="row" spacing={3} sx={{marginTop:'15px', fontWeight: 'bold', fontSize: '35px'}}> {about.title} <br /> <Typography>{about.content} </Typography></Stack>
    </div >
  );
    return (
        <div>
            {content}
        </div>
    );
}