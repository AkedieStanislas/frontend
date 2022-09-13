import * as React from 'react';
import { Typography, Box } from '@mui/material';
import Menu from '@mui/material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const href=["Conseil", "Product Design", "Développement Produit", "Adaptation Continue Du SI", "Data Science"]

export default function Services(props) {
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
            <Typography onClick={handClick} sx={{ fontSize: '13px' }}>Services<ExpandMoreIcon sx={{ width: '25px', marginTop: -1, marginBottom: -1 }} /></Typography>
            <Menu anchorEl={anchor} open={open}
                onClose={handClose}
            ><Box sx={{ backgroundColor: '#f3f3f3' }}>
                {href.map((elt) =>
                    <MenuItem key={elt} onClick={handClose} sx={{ fontFamily: 'Montserrat', lineSpacing: '24px', textTransform: 'titlecase' }}>{elt}</MenuItem>
                    )}
                </Box>
            </Menu>
        </>
    );
}
