import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

const JoinSession = () => {
    const navigate = useNavigate();
    const [sessionId, setSessionId] = useState('');
    const [availableSessions, setAvailableSessions] = useState([
    // TODO: Replace with real data
    { id: '1', name: 'Sprint Planning 1', owner: 'John Doe' },
    { id: '2', name: 'Backlog Refinement', owner: 'Jane Smith' },
  ]);

  const handleJoinByCode = (e) => {
    e.preventDefault();
    // TODO: Implement join by code logic
    navigate('/session/' + sessionId);
    console.log('Joining session:', sessionId);
  };

  const handleJoinSession = (id) => {
    // TODO: Implement join session logic
    console.log('Joining session:', id);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Join by Code
          </Typography>
          <Box component="form" onSubmit={handleJoinByCode}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="sessionId"
              label="Session Code"
              name="sessionId"
              value={sessionId}
              onChange={(e) => setSessionId(e.target.value)}
              placeholder="Enter session code"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2 }}
            >
              Join Session
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Available Sessions
          </Typography>
          <List>
            {availableSessions.map((session, index) => (
              <Box key={session.id}>
                {index > 0 && <Divider />}
                <ListItem
                  secondaryAction={
                    <Button
                      variant="outlined"
                      onClick={() => handleJoinSession(session.id)}
                    >
                      Join
                    </Button>
                  }
                >
                  <ListItemText
                    primary={session.name}
                    secondary={`Created by ${session.owner}`}
                  />
                </ListItem>
              </Box>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default JoinSession;
