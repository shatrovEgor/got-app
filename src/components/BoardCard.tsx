/* eslint-disable react/react-in-jsx-scope */
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { CardInfo } from '../types/cardType';
import { dispatch } from '../store';
import { deleteCard } from '../store/slices/dataCard';

interface CardProps {
  cardInfo: CardInfo;
  type: string;
  openModal: (url: string) => void;
}

const BoardCard = ({ cardInfo, type, openModal }: CardProps) => {
  const handleDeleteCard = (url: string) => {
    dispatch(deleteCard(url));
    // This is a function at work
    // window.dataLayer.push({
    //   event: 'delete',
    //   eventProps: {
    //       id: url,
    //       type: type
    //   }
    // });
  };

  let title = '';
  let name = '';
  let subTitle = '';
  let secondSubTitle = '';

  switch (type) {
    case 'characters':
      title =
        cardInfo.aliases && cardInfo.aliases[0] !== ''
          ? `Alias "${cardInfo.aliases[0]}"`
          : 'No alias 😞';
      name = `Names: ${cardInfo.name || '-'}`;
      subTitle = `Played by: ${(cardInfo.playedBy && cardInfo.playedBy[0]) || '-'}`;
      secondSubTitle =
        cardInfo.titles && cardInfo.titles[0]
          ? `Titles: ${cardInfo.titles.map((title: string) => ` "${title}"`)}`
          : 'No titles';
      break;
    case 'books':
      title = cardInfo.name || '-';
      name = `Authors: ${cardInfo.authors && cardInfo.authors.map((elem: string) => elem)}`;
      subTitle = `Released ${cardInfo.released && new Date(cardInfo.released).getFullYear()}`;
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
          <Button size='small' onClick={() => openModal(cardInfo.url)}>
            Learn More
          </Button>
          <Button
            variant='outlined'
            startIcon={<DeleteIcon />}
            color='error'
            onClick={() => handleDeleteCard(cardInfo.url)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default BoardCard;
