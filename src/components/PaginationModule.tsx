/* eslint-disable react/react-in-jsx-scope */
import { Stack, Pagination } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const PaginationModule = () => {
  const { pageId: currentPage } = useParams();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    navigate(`/${value}`);
  };

  return (
    <Stack
      marginTop='15px'
      paddingTop='2px'
      paddingBottom='2px'
      sx={{ backgroundColor: 'white', borderRadius: '16px' }}
    >
      <Pagination count={10} page={Number(currentPage)} onChange={handleChange} />
    </Stack>
  );
};

export default PaginationModule;
