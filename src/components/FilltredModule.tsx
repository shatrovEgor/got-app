/* eslint-disable react/react-in-jsx-scope */
import { Stack, Typography } from '@mui/material';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import PeopleIcon from '@mui/icons-material/People';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CastleIcon from '@mui/icons-material/Castle';
import { dispatch, useSelector } from '../store';
import { selectFilter } from '../store/slices/filters';
import { useNavigate } from 'react-router';

const FilltredModule = () => {
  const navigate = useNavigate();
  const { currentFilter } = useSelector((state) => state.filters);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    navigate(`/1`);
    dispatch(selectFilter(event.target.value as 'characters' | 'books' | 'houses'));
  };

  return (
    <Stack
      marginTop='100px'
      width='85vw'
      height='110px'
      sx={{
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '4px 4px 5px -3px rgba(34, 60, 80, 0.2)',
      }}
    >
      <Typography variant='h5' component='div' paddingTop={1}>
        Filltres
      </Typography>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby='demo-row-radio-buttons-group-label'
          name='row-radio-buttons-group'
          value={currentFilter}
          onChange={handleChange}
          sx={{ justifyContent: 'space-evenly', paddingTop: '4px' }}
        >
          <FormControlLabel
            value='characters'
            control={<Radio />}
            label={
              <Stack flexDirection='row' alignItems='center'>
                <Typography paddingRight={1}>Characters</Typography>

                <PeopleIcon fontSize='large' />
              </Stack>
            }
          />
          <FormControlLabel
            value='books'
            control={<Radio />}
            label={
              <Stack flexDirection='row' alignItems='center'>
                <Typography paddingRight={1}>Books</Typography>

                <AutoStoriesIcon fontSize='large' />
              </Stack>
            }
          />
          <FormControlLabel
            value='houses'
            control={<Radio />}
            label={
              <Stack flexDirection='row' alignItems='center'>
                <Typography paddingRight={1}>Houses</Typography>

                <CastleIcon fontSize='large' />
              </Stack>
            }
          />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};

export default FilltredModule;
