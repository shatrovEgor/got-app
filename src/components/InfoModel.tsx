import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from '../store';
import Autocomplete from '@mui/material/Autocomplete';

interface InfoModalProps {
  open: boolean;
  handleClose: () => void;
}

const InfoModal = ({ open, handleClose }: InfoModalProps) => {
  const { currentCard } = useSelector((state) => state.dataCards);
  const detailInfo = () => {
    if (currentCard) {
      return Object.entries(currentCard).map((elem) => {
        if (typeof elem[1] !== 'string' && typeof elem[1] !== 'number') {
          return (
            <Autocomplete
              key={elem[0]}
              multiple
              sx={{ paddingTop: '10px' }}
              limitTags={2}
              id={elem[0]}
              options={elem[1]}
              getOptionLabel={(option) => {
                if (option) {
                  return option;
                } else return 'No option';
              }}
              defaultValue={elem[1]}
              readOnly
              renderInput={(params) => (
                <TextField {...params} label={elem[0]} placeholder={elem[0]} />
              )}
            />
          );
        } else {
          return (
            <TextField
              key={elem[0]}
              margin='dense'
              id={elem[0]}
              label={elem[0]}
              value={elem[1]}
              fullWidth
              variant='standard'
            />
          );
        }
      });
    }
    return <></>;
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Detailed information</DialogTitle>
      <DialogContent>{detailInfo()}</DialogContent>
      <DialogActions>
        {/* <Button onClick={handleClose} variant='outlined'>
          Save
        </Button> */}
        <Button onClick={handleClose} variant='contained'>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoModal;
