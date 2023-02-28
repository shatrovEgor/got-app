/* eslint-disable react/react-in-jsx-scope */
import { Stack, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { gotService } from '../services/api';
import BoardCard from './BoardCard';

const MainBoard = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    gotService.getCharacters(1, 9).then((data) => setCharacters(data));
  }, []);

  return (
    <Stack marginTop='30px' width='calc(100vw - 300px)'>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12, lg: 12 }}>
        {characters.map((elem, index) => {
          return (
            <Grid key={index} item xs={1} sm={8} md={6} lg={4}>
              <BoardCard></BoardCard>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default MainBoard;
