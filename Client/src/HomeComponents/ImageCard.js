import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 600,
    background: 'rgba(0,0,0,0.3)',
    margin: '20px',
    borderRadius: '10px',
    boxShadow: '1px 1px 30px 1px rgba(0,0,0,.5), -1px -1px 5px 1px rgba(0,0,0,.5)',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.01)',
    },
  },
  media: {
    height: 410,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {place.title}
          </Typography>
        </CardContent>
      </Card>
  );
}