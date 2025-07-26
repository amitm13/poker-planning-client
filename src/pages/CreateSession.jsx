import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
} from '@mui/material';

const CreateSession = () => {
  const [sessionData, setSessionData] = useState({
    name: '',
    description: '',
    pointSystem: 'fibonacci',
    isPrivate: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSessionData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSwitchChange = (e) => {
    setSessionData(prev => ({
      ...prev,
      isPrivate: e.target.checked
    }));
  };

  const handleSubmit = (e) => {
    const navigate = useNavigate();
    e.preventDefault();
    // TODO: Implement session creation logic with backend
    console.log(sessionData);
    // For now, navigate to a new session with a random ID
    const sessionId = Math.random().toString(36).substr(2, 9);
    navigate(`/session/${sessionId}`);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            Create New Session
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Session Name"
              name="name"
              value={sessionData.name}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              id="description"
              label="Description"
              name="description"
              multiline
              rows={3}
              value={sessionData.description}
              onChange={handleChange}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="point-system-label">Point System</InputLabel>
              <Select
                labelId="point-system-label"
                id="pointSystem"
                name="pointSystem"
                value={sessionData.pointSystem}
                label="Point System"
                onChange={handleChange}
              >
                <MenuItem value="fibonacci">Fibonacci (1,2,3,5,8,13,21)</MenuItem>
                <MenuItem value="sequential">Sequential (1,2,3,4,5,6,7,8,9,10)</MenuItem>
                <MenuItem value="tshirt">T-Shirt Sizes (XS,S,M,L,XL)</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              control={
                <Switch
                  checked={sessionData.isPrivate}
                  onChange={handleSwitchChange}
                  name="isPrivate"
                />
              }
              label="Private Session"
              sx={{ mt: 2 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Session
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreateSession;
