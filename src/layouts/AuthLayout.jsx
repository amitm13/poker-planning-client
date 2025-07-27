import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

const AuthLayout = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
        minWidth: '100%',
        padding: 0,
      }}
    >
      <Container sx={{minWidth: '100%', padding: 0}}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default AuthLayout;
