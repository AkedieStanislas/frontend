import React from 'react'
import { Box, Typography, Grid, Container, Link, Card } from '@mui/material'
import Image1 from '../Images/Image1.png'
import idée from '../Images/idée.png'
import Work from '../Images/Work.png'

export default function Partie() {
    return (
        <div><Box px={{ xs: 3, sm: 3 }} py={{ xs: 3, sm: 3 }} sx={{ backgroundColor: '#f3f3f3', marginTop: '-315px' }}>
            <Grid container>
                <Typography sx={{
                    marginLeft: '450px', marginTop: '20px',
                    fontWeight: 'bold', color: '#003168', fontSize: '25px'
                }}>Processus de Travail</Typography>
            </Grid>
            <Grid container sx={{ marginRight: '505px', marginTop: '45px'}}>
                <Grid xs={4}>
                    <Box component='img' src={Image1} sx={{ width: '80px', marginLeft: '105px' }} />
                    <Box borderBottom={1} sx={{ marginTop: '91px' }}></Box>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '23px', marginTop: '77px', color: '#001833' }}>Cadrage et <br /> Etude de faisabilité</Typography> <br />
                    <Typography sx={{ marginRight: '55px', fontSize: '12px', fontFamily: 'Orelega One' }}>Nous échangeons avec vous pour mieux cerner vos besoins, vos idées sont transmis à nos ingénieurs pour une offre qui répond à vos attentes.</Typography>
                </Grid>
                <Grid xs={4} >
                    <Box component='img' src={idée} sx={{ width: '80px', marginLeft: '75px' }} />
                    <Box borderBottom={1} sx={{ marginTop: '87px', }}></Box>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '23px', marginTop: '78px', color: '#001833' }}>Idéation et proposition <br /> de Designs</Typography> <br />
                    <Typography sx={{ marginRight: '55px', fontSize: '12px', fontFamily: 'Orelega One' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptatem repellat aspernatur voluptatibus, architecto cumque aliquam hic repellendus iusto
                        velit maiores incidunt enim. Aliquid dolor nihil similique fugiat! Nemo, laudantium doloribus!</Typography>
                </Grid>
                <Grid xs={4}>
                    <Box component='img' src={Work} sx={{ width: '80px', marginLeft: '75px' }} />
                    <Box borderBottom={1} sx={{ marginTop: '87px', marginRight: '55px' }}></Box>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px', marginTop: '78px', color: '#001833' }}>Développement Agile <br /> par la methode <br /> SCRUM</Typography> <br />
                    <Typography sx={{ marginRight: '55px', fontSize: '12px', fontFamily: 'Orelega One' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Ipsa veritatis soluta, nulla molestias provident distinctio nisi modi
                        rerum cum est voluptate dignissimos eveniet reprehenderit nostrum alias
                        necessitatibus accusamus quae ullam?</Typography>
                </Grid>
            </Grid>
        </Box>
        </div >
    )
}
