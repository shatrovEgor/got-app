/* eslint-disable react/react-in-jsx-scope */
import { Stack } from '@mui/material';
import SkeletonLoader from './SkeletonLoader';
import { useState } from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from 'react-router-dom';

const HelloWindow = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack marginTop='30px' width='85vw' height={680}>
      <SkeletonLoader />
      {/* Dialog */}
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Welcome to the Game of Thrones world app</DialogTitle>
        <Button size='large' variant='contained' onClick={() => navigate(`/1`)}>
          start the research
        </Button>
      </Dialog>
    </Stack>
  );
};

export default HelloWindow;
