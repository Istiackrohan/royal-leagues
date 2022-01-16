import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './MultiActionAreaCard.css';
import Image from '../LeagueData/LeagueData.json';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard(props) {

  const { idLeague, strLeagueAlternate, strSport } = props.leagueData;

  const showLogo = (idLeague) => {
    const leagueLogo = Image.filter(logo => logo.id === idLeague)
    if (leagueLogo.length > 0) {
      return leagueLogo[0].logo;
    }
  }

  return (
    <Card key={idLeague} sx={{ width: 345, margin: 5 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="150px"
          image={showLogo(idLeague)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{strLeagueAlternate}</Typography>
          <Typography variant="body2" color="text.secondary">Sports type: {strSport}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Link className="explore-button" to={`/leagues/${idLeague}`}>
          <Button size="small" color="primary">Explore</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
