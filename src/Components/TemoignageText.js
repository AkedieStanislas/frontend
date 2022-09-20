import { Box, Typography } from '@mui/material'
import React from 'react'
import CheckMark from '../Images/CheckMark.png'
import Akileur from '../Images/Akileur.png'

export default function TemoignageText(props) {
    const contenu = props.abouts.map((ComposantTemoignage) =>
        <div key={ComposantTemoignage.id}>
            <Typography sx={{
                fontFamily: 'Orelega One'
            }}>
                <Box component='img' src={CheckMark} sx={{ marginRight: "10px" }} />{ComposantTemoignage.title}</Typography><Typography sx={{ marginLeft: '38px', fontFamily: 'Orelega One' }}>{ComposantTemoignage.content}</Typography>
            <Box component='img' src={Akileur} sx={{ width: '45px', height: '45px', borderRadius: '60%', marginLeft: '25px', marginTop: '15px' }} /></div>);
    return (
        <div>
            {contenu}
        </div>
    )
}

