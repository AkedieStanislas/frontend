import React from 'react'
import {
    AppBar, Button,
    Stack, Link,
    Toolbar, Typography
} from '@mui/material'
import LogoAkil from '../Images/LogoAkil.png'
import Services from './Service'
import Abouts from './Abouts'

const ComposantsduHeader = ["Nos Methodologies", "Activites"]

export default function Header() {
    return (
        <div>
            <AppBar sx={{ boxShadow: 'none', backgroundColor: 'white' }} >
                <Toolbar sx={{ flexWrap: 'Wrap' }}>
                    <Stack sx={{ width: '170px', height: 'auto', margin: 'auto' }}>
                        <img src={LogoAkil} alt="" />
                    </Stack>
                    <Stack direction="row" spacing={3} sx={{ margin: "auto", color: '#707070' }}>
                        <Typography sx={{ fontSize: '14px', fontFamily: 'orelega-one', textTransform: 'titlecase', cursor: "default" }}>Acceuil</Typography>
                        <Abouts /><Services />
                        {ComposantsduHeader.map((elt) => <Typography key={elt} sx={{ fontSize: '14px', fontFamily: 'orelega-one', textTransform: 'titlecase' }}><Link href="#" underline="none" color="#707070">{elt}</Link></Typography>)}
                    </Stack>
                    <Stack direction="row" spacing={5} sx={{ margin: "auto" }}>
                        <Button variant="contained" sx={
                            {
                                backgroundColor: "#003168", color: "white",
                                fontFamily: 'orelega-one', textTransform: 'lowercase', fontWeight: 'bold',
                                marginRight: '200px', width: '100%', "&:hover": { backgroundColor: "#003168" }
                            }
                        }>Contactez- Nous</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
    )
}