import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
    background: 'rgba(0,0,0,0.6)',
    borderRadius: '10px',
    boxShadow: '1px 1px 30px 1px rgba(0,0,0,.5), -1px -1px 5px 1px rgba(0,0,0,.5)',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.01)',
    },
  },
  media: {
    backgroundAttachment: 'fixed',
    width: '100%',
    minHeight: 375,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: 'whitesmoke',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#dfdfdf',
  },
});

export default function ImageCard({ place }) {
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
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            className={classes.desc}
          >
            {place.desc}
          </Typography>
        </CardContent>
      </Card>
  );
}