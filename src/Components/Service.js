import * as React from 'react';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

export default function Services() {
    const [anchor, setAnchor] = useState(null);
    const handClick = (event) => {
        setAnchor(event.currentTarget);
    };
    const open = Boolean(anchor)
    const handClose = () => {
        setAnchor(null);
    };
    return (
        <>
            <Typography
                id="ressources-button" onClick={handClick} sx={{fontSize: '13px'}}>Services<ExpandMoreIcon sx={{width: '25px', marginTop: -1, marginBottom: -1}}/></Typography>
            <Menu
                id="ressources-menu" anchorEl={anchor} open={open}
                onClose={handClose}
            >
                <MenuItem onClick={handClose} sx={{fontFamily: 'Montserrat', lineSpacing: '24px', textTransform: 'titlecase'}}>Product Design</MenuItem>
                <MenuItem onClick={handClose} sx={{fontFamily: 'Montserrat', lineSpacing: '24px', textTransform: 'titlecase'}}>Conseil</MenuItem>
                <MenuItem onClick={handClose} sx={{fontFamily: 'Montserrat', lineSpacing: '24px', textTransform: 'titlecase'}}>Développement Produit</MenuItem>
                <MenuItem onClick={handClose} sx={{fontFamily: 'Montserrat', lineSpacing: '24px', textTransform: 'titlecase'}}>Adaptation Continue Du SI</MenuItem>
                <MenuItem onClick={handClose} sx={{fontFamily: 'Montserrat', lineSpacing: '24px', textTransform: 'titlecase'}}>Data Science</MenuItem>
            </Menu>
        </>
    );
}
