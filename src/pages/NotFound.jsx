import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Typography,
  Container,
} from '@mui/material';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          The page you are looking for does not exist.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/')}
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
