/* eslint-disable react/react-in-jsx-scope */
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';

import Typography from '@mui/material/Typography';
import InfoModal from './InfoModel';
import { useState } from 'react';

//FXED TYPES
const BoardCard = ({ cardInfo, type }: { cardInfo: any; type: string }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let title = '';
  let name = '';
  let subTitle = '';
  let secondSubTitle = '';

  switch (type) {
    case 'characters':
      title = cardInfo.aliases[0] !== '' ? `Alias "${cardInfo.aliases[0]}"` : 'No alias 😞';
      name = `Names: ${cardInfo.name || '-'}`;
      subTitle = `Played by: ${cardInfo.playedBy[0] || '-'}`;
      secondSubTitle = cardInfo.titles[0]
        ? `Titles: ${cardInfo.titles.map((title: string) => ` "${title}"`)}`
        : 'No titles';
      break;
    case 'books':
      title = cardInfo.name || '-';
      name = `Authors: ${cardInfo.authors.map((elem: string) => elem)}`;
      subTitle = `Released ${new Date(cardInfo.released).getFullYear()}`;
      secondSubTitle = `Country - ${cardInfo.country}`;
      break;
    case 'houses':
      title = cardInfo.name || '-';
      name = `Region: ${cardInfo.region}`;
      secondSubTitle = cardInfo.coatOfArms ? `Coat of arms - ${cardInfo.coatOfArms}` : '';
      break;
    default:
      break;
  }
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {name}
          </Typography>
          <Typography variant='h5' component='div'>
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            {subTitle}
          </Typography>
          <Typography variant='body2'>{secondSubTitle}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Button size='small' onClick={handleClickOpen}>
            Learn More
          </Button>
          <Button variant='outlined' startIcon={<DeleteIcon />} color='error'>
            Delete
          </Button>
        </CardActions>
      </Card>
      {/* Info Modal */}
      <InfoModal open={open} handleClose={handleClose} />
    </>
  );
};

export default BoardCard;
