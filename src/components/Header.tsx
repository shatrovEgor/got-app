/* eslint-disable react/react-in-jsx-scope */
import { AppBar, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: '#000' }}>
      <Toolbar>
        <img src='/images/logo.jpg' alt='logo' style={{ width: 250 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
