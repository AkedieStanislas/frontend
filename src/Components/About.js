import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Typography, Box } from '@mui/material';

export default function Abouts() {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const open = Boolean(anchorEl)
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Typography
                id="ressources-button" onClick={handleClick} sx={{fontSize: '13px'}}
            >A Propos<ExpandMoreIcon sx={{width: '25px', marginTop: -1, marginBottom: -1}}/></Typography>
            <Menu
                id="ressources-menu" anchorEl={anchorEl} open={open} onClose={handleClose} sx={{}}
            ><Box sx={{backgroundColor: 'blue'}}>
                <MenuItem onClick={handleClose} sx={{fontFamily: 'Orelega One', lineSpacing: '24px', textTransform: 'titlecase'}}>Qui Sommes Nous ?</MenuItem>
                <MenuItem onClick={handleClose} sx={{fontFamily: 'Orelega One', lineSpacing: '24px', textTransform: 'titlecase'}}>Notre Equipe</MenuItem>
                <MenuItem onClick={handleClose} sx={{fontFamily: 'Montserrat', lineSpacing: '24px', textTransform: 'titlecase'}}>Nos Technologies</MenuItem>
                <MenuItem onClick={handleClose} sx={{fontFamily: 'Montserrat', lineSpacing: '24px', textTransform: 'titlecase'}}>Carriere</MenuItem>
                </Box>
            </Menu>
        </>
    );
}
