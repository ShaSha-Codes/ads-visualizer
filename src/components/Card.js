
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { WidgetsSharp } from '@mui/icons-material';

export default function ImgMediaCard(props) {
  return (
    <Card sx={{height:"400px",marginLeft:"10px",marginRight:"10px", marginTop:"20px",maxWidth: 345 }}>
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
        <Stack sx={{width:"100%"}} alignItems="center">
          <Button href={props.link} size="large" color="secondary" variant="outlined">Visit</Button>
        </Stack>
      </CardActions>
    </Card>
  );
}