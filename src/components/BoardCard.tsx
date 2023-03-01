/* eslint-disable react/react-in-jsx-scope */
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';

import Typography from '@mui/material/Typography';

//FXED TYPES
const BoardCard = ({ cardInfo }: { cardInfo: any }) => {
  return (
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
          Name: {cardInfo.name || '-'}
        </Typography>
        <Typography variant='h5' component='div'>
          {cardInfo.aliases[0] !== '' ? `Alias "${cardInfo.aliases[0]}"` : 'No alias 😞'}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Played by: {cardInfo.playedBy[0] || '-'}
        </Typography>
        <Typography variant='body2'>
          Titles:{' '}
          {cardInfo.titles[0]
            ? cardInfo.titles.map((title: string, index: number) => {
                if (index + 1 !== cardInfo.titles.length) {
                  return `"${title}", `;
                }
                return `"${title}" `;
              })
            : 'No titles'}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button size='small'>Learn More</Button>
        <Button variant='outlined' startIcon={<DeleteIcon />} color='error'>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default BoardCard;
