import { Link, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import React from 'react'

const service = [
    {
        id: 1,
        title: 'Produit Design',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Doloremque veniam ipsam eveniet architecto adipisci numquam reiciendis,
      tempora delectus nihil suscipit nulla deleniti dolore voluptates.
      Minima quis at iure ratione eaque.`
    },
    {
        id: 2,
        title: 'Conseil',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Doloremque veniam ipsam eveniet architecto adipisci numquam reiciendis,
      tempora delectus nihil suscipit nulla deleniti dolore voluptates.
      Minima quis at iure ratione eaque.`, 
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'
    },
    {
        id: 3,
        title: 'Developpement Produit',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Doloremque veniam ipsam eveniet architecto adipisci numquam reiciendis,
      tempora delectus nihil suscipit nulla deleniti dolore voluptates.
      Minima quis at iure ratione eaque.`,
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'
    },
    {
        id: 4,
        title: 'Adapatation Continue du SI',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloremque veniam ipsam eveniet architecto adipisci numquam reiciendis,
        tempora delectus nihil suscipit nulla deleniti dolore voluptates.
        Minima quis at iure ratione eaque.`,
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'
    },
    {
        id: 5,
        title: 'Data Science',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloremque veniam ipsam eveniet architecto adipisci numquam reiciendis,
        tempora delectus nihil suscipit nulla deleniti dolore voluptates.
        Minima quis at iure ratione eaque.`,
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
    }
    
];

export default function NoServiceText(props) {
    const content = props.abouts.map((about) =>
        <div key={service.id}>
            {service.img}
            <Typography sx={{
                fontSize: '20px', fontFamily: 'Orelega One',
                textTransform: 'titlecase', fontWeight: 'bold'
            }}>{service.title}</Typography>
            <Typography sx={{ marginRight: '55px' }}>{service.content}</Typography>
            <Link underline='none' fontSize="18px" color="#003168" fontWeight="bold">En savoir plus<ArrowRightAltIcon /></Link>
        </div>
    );
    return (
        <div>
            {content}
        </div>
    );
}


