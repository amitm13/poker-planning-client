import { useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Chip,
  Button,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LaunchIcon from '@mui/icons-material/Launch';
import { useParams, useNavigate } from 'react-router-dom';
import { useSession } from '../contexts/SessionContext';
import StoryManager from '../components/StoryManager';
import VotingControls from '../components/VotingControls';

const SessionRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { 
    session,
    participants,
    votes,
    isRevealed,
    setSession,
    currentStory,
    stories
  } = useSession();

  useEffect(() => {
    // TODO: Fetch session details from backend
    setSession({
      id,
      name: 'Sprint Planning Session',
      moderator: 'John Doe',
      cardSet: 'fibonacci'
    });
  }, [id, setSession]);

  if (!session) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography>Loading session...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: '100%', overflowX: 'hidden' }}>
      {/* Header */}
      <Box 
        sx={{ 
          mb: 4, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}
      >
        <Typography variant="h4" component="h1">
          {session.name}
        </Typography>
        <Button
          variant="outlined"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
          }}
          startIcon={<ContentCopyIcon />}
        >
          Copy Invite Link
        </Button>
      </Box>

      <Grid container spacing={2}>
        {/* Left Sidebar - Stories and Participants */}
        <Grid item xs={12} md={4} size={4}>
          <Box sx={{ position: { md: 'sticky' }, top: { md: 24 } }}>
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <StoryManager />
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Participants
                </Typography>
                <List sx={{ maxHeight: 400, overflowY: 'auto' }}>
                  {participants.map((participant) => (
                    <ListItem key={participant.id} divider>
                      <ListItemAvatar>
                        <Avatar>{participant.name?.[0] || '?'}</Avatar>
                      </ListItemAvatar>
                      <ListItemText 
                        primary={participant.name}
                        secondary={participant.isSpectator ? 'Spectator' : 'Voter'}
                      />
                      {isRevealed && votes[participant.id] && (
                        <Chip
                          label={votes[participant.id]}
                          color={votes[participant.id] === '?' ? 'default' : 'primary'}
                          size="small"
                        />
                      )}
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* Main Content - Current Story and Voting */}
        <Grid item xs={12} md={8} size={8} float="left">
          {currentStory ? (
            <Box>
              <Card sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Current Story
                  </Typography>
                  {stories.map(story => {
                    if (story.id === currentStory) {
                      return (
                        <Box key={story.id}>
                          <Typography variant="h5" gutterBottom>
                            {story.title}
                          </Typography>
                          <Typography 
                            variant="body1" 
                            paragraph
                            sx={{ 
                              whiteSpace: 'pre-wrap',
                              wordBreak: 'break-word' 
                            }}
                          >
                            {story.description}
                          </Typography>
                          {story.link && (
                            <Button
                              href={story.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              variant="outlined"
                              size="small"
                              startIcon={<LaunchIcon />}
                            >
                              View in JIRA
                            </Button>
                          )}
                        </Box>
                      );
                    }
                    return null;
                  })}
                </CardContent>
              </Card>
              
              <Card>
                <CardContent>
                  <VotingControls />
                </CardContent>
              </Card>
            </Box>
          ) : (
            <Card>
              <CardContent sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  No story selected for voting
                </Typography>
                <Typography color="text.secondary">
                  Select a story from the list to start voting
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SessionRoom;
