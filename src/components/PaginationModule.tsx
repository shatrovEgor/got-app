/* eslint-disable react/react-in-jsx-scope */
import { Stack, Pagination } from '@mui/material';

const PaginationModule = () => {
  return (
    <Stack
      marginTop='15px'
      paddingTop='2px'
      paddingBottom='2px'
      sx={{ backgroundColor: 'white', borderRadius: '16px' }}
    >
      <Pagination count={10} />
    </Stack>
  );
};

export default PaginationModule;
