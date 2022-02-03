import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Movie({name, year, pictureName}) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pictureName ? "https://localhost:8000/uploads/" + pictureName : './default-movie.png'}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Year: {year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}