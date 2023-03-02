/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
import { Skeleton, Stack } from '@mui/material';

const SkeletonLoader = () => {
  return (
    <Stack spacing={3}>
      <Stack flexDirection='row' overflow='hidden'>
        <Skeleton
          variant='rounded'
          animation='wave'
          width='calc(100%/3)'
          height={200}
          sx={{ backgroundColor: 'white', marginX: '10px' }}
        />
        <Skeleton
          variant='rounded'
          animation='wave'
          width='calc(100%/3)'
          height={200}
          sx={{ backgroundColor: 'white', marginX: '10px' }}
        />
        <Skeleton
          variant='rounded'
          animation='wave'
          width='calc(100%/3)'
          height={200}
          sx={{ backgroundColor: 'white', marginX: '10px' }}
        />
      </Stack>

      <Stack flexDirection='row'>
        <Skeleton
          variant='rounded'
          animation='wave'
          width='calc(100%/3)'
          height={200}
          sx={{ backgroundColor: 'white', marginX: '10px' }}
        />
        <Skeleton
          variant='rounded'
          animation='wave'
          width='calc(100%/3)'
          height={200}
          sx={{ backgroundColor: 'white', marginX: '10px' }}
        />
        <Skeleton
          variant='rounded'
          animation='wave'
          width='calc(100%/3)'
          height={200}
          sx={{ backgroundColor: 'white', marginX: '10px' }}
        />
      </Stack>
      <Stack flexDirection='row'>
        <Skeleton
          variant='rounded'
          animation='wave'
          width='calc(100%/3)'
          height={200}
          sx={{ backgroundColor: 'white', marginX: '10px' }}
        />
        <Skeleton
          variant='rounded'
          animation='wave'
          width='calc(100%/3)'
          height={200}
          sx={{ backgroundColor: 'white', marginX: '10px' }}
        />
        <Skeleton
          variant='rounded'
          animation='wave'
          width='calc(100%/3)'
          height={200}
          sx={{ backgroundColor: 'white', marginX: '10px' }}
        />
      </Stack>
    </Stack>
  );
};

export default SkeletonLoader;
