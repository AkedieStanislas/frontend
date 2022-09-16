import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import {ComposantAProposHeader} from '../../Constants/constant'

export default function APropos() {
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
            <Typography onClick={handleClick} sx={{ fontSize: '13px', cursor: "pointer" }}>
                A Propos<ExpandMoreIcon sx={{ width: '25px', marginTop: -1, marginBottom: -1 }} />
            </Typography>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <Box sx={{ backgroundColor: '#f3f3f3' }}>
                    {ComposantAProposHeader.map((root) => <MenuItem key={root} onClick={handleClose} sx={{ fontFamily: 'Orelega One', lineSpacing: '24px', textTransform: 'titlecase' }}>{root}</MenuItem>)}
                </Box>
            </Menu>
        </>
    );
}
