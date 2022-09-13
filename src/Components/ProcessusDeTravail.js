import React from 'react'
import { Box, Typography, Grid, Link} from '@mui/material'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import Image1 from '../Images/Image1.png'
import idée from '../Images/idée.png'
import Work from '../Images/Work.png'

export default function ProcessusDeTravail() {
    return (
        <div><Box px={{ xs: 3, sm: 3 }} py={{ xs: 3, sm: 3 }} sx={{ backgroundColor: '#f3f3f3', marginTop: '-315px' }}>
            <Grid container>
                <Typography sx={{
                    marginTop: '20px', display: 'flex', justifyContent: 'center',
                    fontWeight: 'bold', color: '#003168', fontSize: '25px'
                }}>Processus de Travail</Typography>
            </Grid>
            <Grid container sx={{ marginRight: '505px', marginTop: '45px'}}>
                <Grid item xs={4}>
                    <Box component='img' src={Image1} sx={{ width: '80px', marginLeft: '105px' }} />
                    <Box borderBottom={1} sx={{ marginTop: '91px' }}></Box>
                    <ArrowCircleLeftOutlinedIcon sx={{marginTop: '-95px', color: '#b3b3b3',}} />
                    <Typography sx={{ fontWeight: 'bold', fontSize: '23px', marginTop: '57px', color: '#001833' }}>Cadrage et <br /> Etude de faisabilité</Typography> <br />
                    <Typography sx={{ marginRight: '55px', fontSize: '12px', fontFamily: 'Orelega One' }}>Nous échangeons avec vous pour mieux cerner vos besoins, vos idées sont transmis à nos ingénieurs pour une offre qui répond à vos attentes.</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Box component='img' src={idée} sx={{ width: '80px', marginLeft: '75px' }} />
                    <Box borderBottom={1} sx={{ marginTop: '87px', }}></Box>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '23px', marginTop: '78px', color: '#001833' }}>Idéation et proposition <br /> de Designs</Typography> <br />
                    <Typography sx={{ marginRight: '55px', fontSize: '12px', fontFamily: 'Orelega One' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptatem repellat aspernatur voluptatibus, architecto cumque aliquam hic repellendus iusto
                        velit maiores incidunt enim. Aliquid dolor nihil similique fugiat! Nemo, laudantium doloribus!</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Box component='img' src={Work} sx={{ width: '80px', marginLeft: '75px' }} />
                    <Box borderBottom={1} sx={{ marginTop: '88px', marginRight: '55px' }}></Box>
                    <Link href='#'><ArrowCircleRightOutlinedIcon sx={{marginTop: '-105px', marginBottom: '1px', width: '550px', color: '#003168',}} /></Link>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px', marginTop: '58px', color: '#001833', textAlign: "start" }}>Développement Agile <br /> par la methode <br /> SCRUM</Typography> <br />
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
