import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  LinearProgress,
  Chip,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { useSession } from '../contexts/SessionContext';

const CARD_SETS = {
  fibonacci: ['0', '1', '2', '3', '5', '8', '13', '21', '?', '☕'],
  sequential: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '?', '☕'],
  tshirt: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '?', '☕'],
};

const VotingControls = () => {
  const {
    currentStory,
    votes,
    isRevealed,
    timer,
    participants,
    submitVote,
    toggleReveal,
    startTimer,
  } = useSession();
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardSet, setCardSet] = useState(CARD_SETS.fibonacci);

  const handleVote = (value) => {
    setSelectedCard(value);
    submitVote(participants.find(p => p.isCurrentUser).id, value);
  };

  const handleStartTimer = () => {
    startTimer(60); // 60 seconds timer
  };

  const calculateAverage = () => {
    const numericVotes = Object.values(votes).filter(v => !isNaN(v));
    if (numericVotes.length === 0) return 0;
    return (numericVotes.reduce((a, b) => Number(a) + Number(b), 0) / numericVotes.length).toFixed(1);
  };

  const getVoteDistribution = () => {
    const distribution = {};
    Object.values(votes).forEach(vote => {
      distribution[vote] = (distribution[vote] || 0) + 1;
    });
    return distribution;
  };

  return (
    <Box>
      {timer > 0 && (
        <Box sx={{ width: '100%', mb: 2 }}>
          <LinearProgress variant="determinate" value={(timer / 60) * 100} />
          <Typography variant="caption" display="block" textAlign="center">
            Time remaining: {timer}s
          </Typography>
        </Box>
      )}

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box spacing={2} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Button
              variant="contained"
              onClick={toggleReveal}
              disabled={Object.keys(votes).length === 0}
            >
              {isRevealed ? 'Hide Votes' : 'Reveal Votes'}
            </Button>
            <Button
              variant="outlined"
              onClick={handleStartTimer}
              disabled={timer > 0}
            >
              Start Timer (60s)
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
                Voting Cards
              </Typography>
              <ButtonGroup variant="text" sx={{ flexWrap: 'wrap', gap: 1 }}>
                {cardSet.map((value) => (
                  <Button
                    key={value}
                    variant={selectedCard === value ? 'contained' : 'outlined'}
                    onClick={() => handleVote(value)}
                    sx={{ minWidth: '60px', height: '80px', fontSize: '1.2rem' }}
                  >
                    {value}
                  </Button>
                ))}
              </ButtonGroup>
        </Grid>

        {isRevealed && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Voting Results
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1">
                    Average: {calculateAverage()}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {Object.entries(getVoteDistribution()).map(([vote, count]) => (
                    <Chip
                      key={vote}
                      label={`${vote}: ${count}`}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default VotingControls;
