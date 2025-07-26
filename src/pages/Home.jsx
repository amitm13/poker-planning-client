import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <Container>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Poker Planning
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Hello, {user?.name}! Start your planning session or join an existing one.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>
                Create New Session
              </Typography>
              <Typography color="text.secondary" paragraph>
                Start a new planning session and invite your team members.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/create-session')}
              >
                Create Session
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>
                Join Session
              </Typography>
              <Typography color="text.secondary" paragraph>
                Join an existing planning session with your team.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/join-session')}
              >
                Join Session
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
