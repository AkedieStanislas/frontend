import React from 'react'
import { Typography } from '@mui/material'

export default function TechnologiesText(props) {
    const contenu = props.abouts.map((ComposantTechnologies) =>
        <div key={ComposantTechnologies.id}>
            <Typography sx={{
                marginBottom: '5px', marginLeft: '455px'
            }}>{ComposantTechnologies.title}</Typography>
            <Typography sx={{
                marginBottom: '35px', marginLeft: '325px'
            }}>{ComposantTechnologies.content}</Typography></div>
    );
    return (
        <div>
            {contenu}
        </div>
    )
}
