import * as React from 'react';
import { Typography, Box, MenuItem, Menu } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import {textService} from '../../Constants/constant'

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
            <Typography onClick={handClick} sx={{ fontSize: '13px', cursor: "pointer" }}>Services<ExpandMoreIcon sx={{ width: '25px', marginTop: -1, marginBottom: -1 }} /></Typography>
            <Menu anchorEl={anchor} open={open} onClose={handClose}>
                <Box sx={{ backgroundColor: '#f3f3f3' }}>
                    {textService.map((elt) =>
                        <MenuItem key={elt} onClick={handClose} sx={{ fontFamily: 'Montserrat', lineSpacing: '24px', textTransform: 'titlecase' }}>{elt}</MenuItem>
                    )}
                </Box>
            </Menu>
        </>
    );
}
