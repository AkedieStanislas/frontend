import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import Javascript from '../Images/javascript.png'
import Angular from '../Images/Angular.png'
import Reactlogo from '../Images/React.png'
import PythonLogo from '../Images/Python.png'
import TechnologiesText from '../TechnologiesText'
import { ComposantTechnologies } from '../../Constants/constant'

export default function Technologies() {
    return (
        <div><Box sx={{backgroundColor: '#f3f3f3' }}>
                <Grid container>
                    <Typography sx={{
                        marginLeft: '550px', marginTop: '20px',
                        fontWeight: 'bold', color: '#003168', fontSize: '25px'
                    }}>Nos technologies</Typography> <br />
                    <TechnologiesText abouts={ComposantTechnologies} />
                </Grid>
          <Grid container sx={{marginLeft: '195px'}}>
          <Grid>
      </Grid>
        <Grid item xs={2} sx={{marginTop:'5px'}}> <Box component='img' src={PythonLogo} sx={{ height: '40px' }} /> </Grid>
        <Grid item xs={2} sx={{marginTop:'5px', marginBottom:'50px', marginLeft: '55px'}}> <Box component='img' src={Reactlogo} sx={{ height: '40px' }} /> </Grid>
        <Grid item xs={2} sx={{marginTop:'5px', marginLeft: '15px'}}> <Box component='img' src={Angular} sx={{height: '50px' }} /> </Grid>
        <Grid item xs={2} sx={{marginTop:'-15px', marginLeft: '55px'}}>  <Box component='img' src={Javascript} sx={{ height: '80px' }} /> </Grid>
        </Grid>
      </Box>
        </div >
    )
}
