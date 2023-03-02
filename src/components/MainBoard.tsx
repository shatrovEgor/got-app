/* eslint-disable no-useless-escape */
/* eslint-disable react/react-in-jsx-scope */
import { Stack, Grid } from '@mui/material';
import { useState } from 'react';
import BoardCard from './BoardCard';
import { useParams } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { dispatch, useSelector } from '../store';
import { useFilteredData } from '../services/hooks/useAllData';
import SkeletonLoader from './SkeletonLoader';
import InfoModal from './InfoModel';
import { selectCard } from '../store/slices/dataCard';

const MainBoard = () => {
  const { currentFilter }: { currentFilter: string } = useSelector((state) => state.filters);
  const { dataCards } = useSelector((state) => state.dataCards);
  const { pageId: currentPage } = useParams();

  const [open, setOpen] = useState(false);
  const handleClickOpen = (url: string) => {
    dispatch(selectCard(url));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { isLoading } = useFilteredData(Number(currentPage), 15, currentFilter);

  return (
    <Stack marginY='30px' width='85vw' height='calc(100% - 310px)'>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <PerfectScrollbar style={{ overflow: 'hidden', paddingLeft: '10px', paddingRight: '10px' }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12, lg: 12 }}>
            {dataCards &&
              dataCards.map((elem, index) => {
                return (
                  <Grid key={index} item xs={1} sm={8} md={6} lg={4}>
                    <BoardCard
                      cardInfo={elem}
                      type={currentFilter}
                      openModal={handleClickOpen}
                    ></BoardCard>
                  </Grid>
                );
              })}
          </Grid>
        </PerfectScrollbar>
      )}
      {/* Info Modal */}
      <InfoModal open={open} handleClose={handleClose} />
    </Stack>
  );
};

export default MainBoard;
