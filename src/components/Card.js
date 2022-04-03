
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
  return (
    <Card sx={{marginLeft:"10px",marginRight:"10px", maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="160"
        image={props.image}
      

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={props.link} size="small">Visit</Button>
        
      </CardActions>
    </Card>
  );
}