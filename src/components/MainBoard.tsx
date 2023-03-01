/* eslint-disable react/react-in-jsx-scope */
import { Stack, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { gotService } from '../services/api';
import BoardCard from './BoardCard';
import { useParams } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

const MainBoard = () => {
  const [characters, setCharacters] = useState([]);
  const { pageId: currentPage } = useParams();

  useEffect(() => {
    gotService.getCharacters(Number(currentPage), 12).then((data) => {
      setCharacters(data);
      console.log(data);
    });
  }, [currentPage]);

  return (
    <Stack marginTop='30px' width='calc(100vw - 300px)' height={680}>
      <PerfectScrollbar style={{ overflow: 'hidden', paddingLeft: '10px', paddingRight: '10px' }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12, lg: 12 }}>
          {characters.map((elem, index) => {
            return (
              <Grid key={index} item xs={1} sm={8} md={6} lg={4}>
                <BoardCard cardInfo={elem}></BoardCard>
              </Grid>
            );
          })}
        </Grid>
      </PerfectScrollbar>
    </Stack>
  );
};

export default MainBoard;
