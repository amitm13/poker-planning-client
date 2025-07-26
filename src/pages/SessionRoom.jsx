import { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Chip,
  IconButton,
  Divider,
} from '@mui/material';
import { useParams } from 'react-router-dom';

const cards = ['1', '2', '3', '5', '8', '13', '21', '?'];

const SessionRoom = () => {
  const { id } = useParams();
  const [selectedCard, setSelectedCard] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [participants] = useState([
    { id: 1, name: 'John Doe', vote: '5' },
    { id: 2, name: 'Jane Smith', vote: '3' },
    { id: 3, name: 'Bob Johnson', vote: '?' },
  ]);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleNextStory = () => {
    setSelectedCard(null);
    setRevealed(false);
  };

  return (
    <Grid container spacing={3}>
      {/* Left panel - Story and Participants */}
      <Grid item xs={12} md={4}>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Current Story
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Implement user authentication system
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description: Add login, signup, and password reset functionality...
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Participants
            </Typography>
            <List>
              {participants.map((participant) => (
                <ListItem key={participant.id}>
                  <ListItemAvatar>
                    <Avatar>{participant.name[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={participant.name} />
                  {revealed && (
                    <Chip
                      label={participant.vote}
                      color={participant.vote === '?' ? 'default' : 'primary'}
                    />
                  )}
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>

      {/* Right panel - Planning Cards and Actions */}
      <Grid item xs={12} md={8}>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Your Vote
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                gap: 2,
                mb: 3,
              }}
            >
              {cards.map((card) => (
                <Button
                  key={card}
                  variant={selectedCard === card ? 'contained' : 'outlined'}
                  sx={{
                    height: 120,
                    fontSize: '1.5rem',
                  }}
                  onClick={() => handleCardSelect(card)}
                >
                  {card}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="contained"
                color="primary"
                disabled={!selectedCard || revealed}
                onClick={handleReveal}
              >
                Reveal Cards
              </Button>
              <Button
                variant="contained"
                color="secondary"
                disabled={!revealed}
                onClick={handleNextStory}
              >
                Next Story
              </Button>
            </Box>
          </CardContent>
        </Card>

        {revealed && (
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Voting Results
              </Typography>
              <Typography variant="body1">
                Average: 4.5
              </Typography>
              {/* Add more statistics or visualization here */}
            </CardContent>
          </Card>
        )}
      </Grid>
    </Grid>
  );
};

export default SessionRoom;
