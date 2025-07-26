import {
  Box,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from '@mui/material';

const SessionHistory = () => {
  const sessions = [
    {
      id: '1',
      name: 'Sprint 34 Planning',
      date: '2025-07-25',
      stories: 12,
      participants: 5,
      status: 'completed',
    },
    {
      id: '2',
      name: 'Backlog Refinement',
      date: '2025-07-24',
      stories: 8,
      participants: 4,
      status: 'completed',
    },
    // Add more session history data
  ];

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Session History
      </Typography>

      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Session Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell align="center">Stories</TableCell>
                  <TableCell align="center">Participants</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sessions.map((session) => (
                  <TableRow key={session.id}>
                    <TableCell component="th" scope="row">
                      {session.name}
                    </TableCell>
                    <TableCell>
                      {new Date(session.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="center">{session.stories}</TableCell>
                    <TableCell align="center">{session.participants}</TableCell>
                    <TableCell align="center">
                      <Chip
                        label={session.status}
                        color={session.status === 'completed' ? 'success' : 'default'}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SessionHistory;
