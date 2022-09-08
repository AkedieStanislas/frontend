import {
    Grid, Button, Box, Card, Link,
    Typography, Container
} from '@mui/material'
import React from 'react'
import Grille from '../Images/Grille_de_répétition_2.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import Employee from '../Images/Employee.png'
import Rectangle19 from '../Images/Rectangle_1913.png'
import Images from '../Components/Images'
import developmentProduit from '../Images/development_Produit.png'
import productdesign from '../Images/Product_Design.png'
import DataScience from '../Images/Data_Science.png'
import conseil from '../Images/Conseil.png'
import AdaptationSI from '../Images/Adaption_du_SI.png'
import ThirdPartle from './ThirdPartle';
import FifthPartle from './FifthPartle';
import SeventhPartle from './SeventhPartle';
import Sixthpartle from './Sixthpartle';
import Firstpartle from './Firstpartle';
import Footer from './Footer';
import FourthPartle from './FourthPartle';
import Header from './Header';


export default function HeaderContent() {
    return (
        <><Card sx={{ maxWidth: 1390 }}>
            <Header />
            <Grid container margin='170px' sx={{ fontFamily: 'orelega-one' }}>
                <Grid item xs={6}>
                    <Box>
                        <Typography variant="h3" sx={{ cursor: "default", marginRight: '75px', fontSize: '50px', fontWeight: 'Bold', fontFamily: 'Montsserat', lineSpacing: '55px' }}>Nos technologies, des solutions d'automatisations de vos processus métiers</Typography></Box>
                    <Box>
                        <Typography sx={{
                            fontFamily: 'Orelega One', cursor: "default", fontSize: '17px', lineSpacing: '24px', textTransform: 'titlecase', marginRight: '95px',
                        }}>Nous mettons avec vous des solutions sur-mesure pour faire face à vos défis commerciaux
                        </Typography>
                        <br /> <br />
                        <Button variant="contained" sx={
                            {
                                backgroundColor: "#003168", color: "white",
                                fontFamily: 'Montserrat', textTransform: 'lowercase', fontWeight: 'bold',
                                width: '30%', borderRadius: '5px', "&:hover": { backgroundColor: "#003168" }
                            }
                        }>J'ai Un Projet</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Images />
                </Grid>
            </Grid>
            <Grid>
                <Firstpartle />
            </Grid>
            <Card sx={{ boxShadow: 'none', marginBottom: '45px' }}>
                <Grid>
                    <Typography sx={{
                        marginLeft: '599px', marginTop: '58px', fontSize: '25px',
                        fontWeight: 'bold', color: '#003168'
                    }}>Nos services</Typography>
                </Grid>
                <Container sx={{ left: '200px', top: '390px', paddingLeft: "950px", marginTop: '25px', marginLeft: '125px' }}>
                    <Grid container>
                        <Grid xs={4} sx={{ "&:hover": { color: "white", backgroundColor: '#003168' } }}>
                            <Box component='img' src={productdesign} sx={{ width: '80px', marginTop: '15px', backgroundColor: 'white' }} />
                            <Typography sx={{ fontWeight: 'bold' }}>Produit Design</Typography>
                            <Typography sx={{ marginRight: '55px', }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Doloremque veniam ipsam eveniet architecto adipisci numquam reiciendis,
                                tempora delectus nihil suscipit nulla deleniti dolore voluptates.
                                Minima quis at iure ratione eaque.</Typography><br />
                            <Link underline='none' fontSize="18px" fontWeight="bold" color='#003168' sx={{ "&:hover": { color: 'white', backgroundColor: '#003168' } }}>En savoir plus</Link>
                        </Grid>
                        <Grid xs={4} >
                            <Box component='img' src={conseil} sx={{ width: '80px' }} />
                            <Typography sx={{ fontWeight: 'bold', color: '#003168' }}>Conseil</Typography>
                            <Typography sx={{ marginRight: '55px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatem repellat aspernatur voluptatibus, architecto cumque aliquam hic repellendus iusto
                                velit maiores incidunt enim. Aliquid dolor nihil similique fugiat! Nemo, laudantium doloribus!</Typography><br />
                            <Link underline='none' fontSize="18px" color="#003168" fontWeight="bold">En savoir plus</Link>
                        </Grid>
                        <Grid xs={4}>
                            <Box component='img' src={developmentProduit} sx={{ width: '90px', marginTop: '11px' }} />
                            <Typography sx={{ fontWeight: 'bold', color: '#003168' }}>Developpement Produit</Typography>
                            <Typography sx={{ marginRight: '55px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Ipsa veritatis soluta, nulla molestias provident distinctio nisi modi
                                rerum cum est voluptate dignissimos eveniet reprehenderit nostrum alias
                                necessitatibus accusamus quae ullam?</Typography> <br />
                            <Link underline='none' fontSize="18px" color="#003168" fontWeight="bold">En savoir plus</Link>
                        </Grid>
                        <Grid xs={4} >
                            <Box component='img' src={AdaptationSI} sx={{ width: '80px', marginTop: '25px' }} />
                            <Typography sx={{ fontWeight: 'bold', color: '#003168' }}>Adapatation Continue du SI</Typography>
                            <Typography sx={{ marginRight: '55px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi suscipit laborum,
                                quam ad tempore illo animi, tempora inventore nemo ipsa nobis,
                                minus consequuntur doloremque! Id, consequatur consequuntur! Debitis, in!</Typography><br />
                            <Link underline='none' fontSize="18px" color="#003168" fontWeight="bold">En savoir plus</Link>
                        </Grid>
                        <Grid xs={4} >
                            <Box component='img' src={DataScience} alt="" sx={{ width: '80px', marginTop: '25px' }} />
                            <Typography sx={{ fontWeight: 'bold', color: '#003168' }}>Data Science</Typography>
                            <Typography sx={{ marginRight: '55px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi suscipit laborum,
                                quam ad tempore illo animi, tempora inventore nemo ipsa nobis,
                                minus consequuntur doloremque! Id, consequatur consequuntur! Debitis, in!</Typography><br />
                            <Link underline='none' fontSize="18px" color="#003168" fontWeight="bold">En savoir plus</Link>
                        </Grid>
                        <Grid xs={4} >
                            <Box component='img' src={Employee} sx={{ width: '210px', height: '260px', marginTop: '25px', marginLeft: '25px' }} />
                            <Box component='img' src={Rectangle19} sx={{ width: '220px', height: '260px', marginTop: '-211px', marginBottom: '290px', marginLeft: '67px', transform: 'translate(-20%, -20%)',}}/>
                            <Typography sx={{
                                fontSize: '20px', width: '195px', height: '215px', marginLeft: '135px', marginTop: '-439px', transform: 'translate(-50%, -50%)', fontWeight: 'Bold', color: 'white'
                            }}>Nous faire confiance pour vos projets  <br /> <br /><Button variant="contained" sx={
                                    {
                                        backgroundColor: "white", color: "#003168", marginLeft: '85px', fontSize: '13px', marginTop: '10px',
                                        fontFamily: 'orelega-one', textTransform: 'lowercase', fontWeight: 'bold', transform: 'translate(-50%, -50%)',
                                        width: '125px', "&:hover": { backgroundColor: "white" }, height: '29px', borderRadius: '7px 7px'
                                    }
                                }>J'ai un projet</Button></Typography>
                                <Box component='img' src={Grille} sx={{ width: '100px', height: '240px', marginTop: '-270px', marginBottom: '290px', marginLeft: '200px', transform: 'translate(-20%, -20%)' }} />
                        </Grid>
                    </Grid>
                </Container>
            </Card>
            <Grid><ThirdPartle /></Grid>
            <Grid>
                <FourthPartle />
            </Grid>
            <Grid>
                <FifthPartle />
            </Grid>
            <Grid>
                <Sixthpartle />
            </Grid>
            <Grid>
                <SeventhPartle />
            </Grid>
            <footer >
                <Footer />
            </footer>
        </Card>
        </>
    )
}  