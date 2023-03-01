/* eslint-disable no-useless-escape */
/* eslint-disable react/react-in-jsx-scope */
import { Stack, Grid } from '@mui/material';
import BoardCard from './BoardCard';
import { useParams } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useSelector } from '../store';
import { useFilteredData } from '../services/hooks/useAllData';
import SkeletonLoader from './SkeletonLoader';

interface RequestData {
  name: string;
}

const MainBoard = () => {
  const { pageId: currentPage } = useParams();
  const { currentFilter }: { currentFilter: string } = useSelector((state) => state.filters);

  const { data, isLoading }: { data: RequestData[]; isLoading: boolean } = useFilteredData(
    Number(currentPage),
    15,
    currentFilter,
  );
  // console.log(data);

  return (
    <Stack marginTop='30px' width='85vw' height={680}>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <PerfectScrollbar style={{ overflow: 'hidden', paddingLeft: '10px', paddingRight: '10px' }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12, lg: 12 }}>
            {data.map((elem, index) => {
              return (
                <Grid key={index} item xs={1} sm={8} md={6} lg={4}>
                  <BoardCard cardInfo={elem} type={currentFilter}></BoardCard>
                </Grid>
              );
            })}
          </Grid>
        </PerfectScrollbar>
      )}
    </Stack>
  );
};

export default MainBoard;
