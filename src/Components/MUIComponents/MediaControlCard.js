import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaControlCard(props) {
  const { name, country, sportType, founded, gender } = props.detail[0].detail;

  return (
    <>
      <Card sx={{ display: 'flex', width: '80%', backgroundColor: 'rgb(18, 91, 224)', color: 'white' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: "80%" }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h4">{name}</Typography><br />
            <Typography variant="subtitle1" component="div">Founded: {founded}</Typography>
            <Typography variant="subtitle1" component="div">Country: {country}</Typography>
            <Typography variant="subtitle1" component="div">Sport Type: {sportType}</Typography>
            <Typography variant="subtitle1" component="div">Gender: {gender}</Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 300, borderRadius: 2, margin: 2 }}
          image={gender === 'Male' ? 'https://i.ibb.co/5MvSvZ0/male.png' : 'https://i.ibb.co/pvZgqVh/female.png' }
        />

      </Card>
    </>
  );
}
