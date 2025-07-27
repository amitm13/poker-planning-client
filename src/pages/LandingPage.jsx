import React from 'react';
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
} from '@mui/material';
import {
  Group,
  AccessTime,
  EmojiEvents,
  GitHub,
  ArrowForward,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <Group fontSize="large" color="primary" />,
    title: 'Real-Time Collaboration',
    description: 'Estimate stories live with your whole team — remote or in-house.',
  },
  {
    icon: <AccessTime fontSize="large" color="primary" />,
    title: 'Time Saver',
    description: 'Lightning-fast estimation with no meetings or confusion.',
  },
  {
    icon: <EmojiEvents fontSize="large" color="primary" />,
    title: 'Gamified Planning',
    description: 'Turn planning into a fun, engaging activity your team will enjoy.',
  },
];

const LandingPage = () => {
  return (
    <Box sx={{
      // backgroundColor: '#0e101c',
      backgroundColor: '#0425e4ff',
      color: 'white',
      width: '100%',
      minHeight: '100vh',
      margin: 0,
      padding: '0 !important',
      overflowX: 'hidden'
    }}>
      {/* Navbar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: '#0e101c', // Use a solid color for no blur
          // Remove width and backdropFilter
        }}
      >
        <Toolbar sx={{ width: '100%', px: { xs: 4, md: 8 } }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              🚀 Story Poker
            </Typography>
          </Link>
          <Button
            variant="outlined"
            color="secondary"
            href="#get-started"
            sx={{ px: 4, float: 'right', marginLeft: '10px' }}
          >
            Get Started
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          paddingTop: '64px', // Adjust for fixed navbar height
          minHeight: '100vh',
          background: 'linear-gradient(to right, #1f1f2f, #2b2b40)',
          display: 'flex',
          alignItems: 'center',
          pt: { xs: 8, md: 0 },
          px: 0,
          margin: 0
        }}
      >
        <Box sx={{
          width: '100%',
          mx: 'auto',
          px: { xs: 3, md: 8, lg: 12 }
        }}>
          <Grid container sx={{ marginTop: '100px'}} spacing={6} alignItems="center">
            <Grid item xs={12} md={12} lg={6} >
              <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
                Agile Estimation<br /> Made Beautiful
              </Typography>
              <Typography variant="h6" paragraph sx={{ color: 'rgba(255,255,255,0.8)' }}>
                No more awkward calls. Estimate user stories with your team using an intuitive,
                fast, and fun interface.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  href="#get-started"
                  endIcon={<ArrowForward />}
                >
                  Start Planning
                </Button>
                <Button variant="outlined" color="inherit" size="large">
                  Learn More
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://placehold.co/800x400/000000/FFF"
                alt="App UI"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  boxShadow: '0 0 30px rgba(0,0,0,0.3)',
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{
        backgroundColor: '#17192d',
        py: 12,
        width: '100%'
      }}>
        <Box sx={{
          width: '100%',
          mx: 'auto',
          px: { xs: 3, md: 8, lg: 12 }
        }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
            Why Story Poker?
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            gutterBottom
            sx={{ color: 'rgba(255,255,255,0.6)', mb: 6 }}
          >
            Trusted by agile teams to simplify planning and boost engagement.
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, i) => (
              <Grid item xs={12} md={3} key={i}>
                <Card
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(8px)',
                    color: '#fff',
                    textAlign: 'center',
                    p: 4,
                    height: '100%',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <CardContent>
                    {feature.icon}
                    <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          py: 10,
          width: '100%',
          background: 'linear-gradient(to right, #3f51b5, #2196f3)',
          color: '#fff',
          textAlign: 'center',
        }}
        id="get-started"
      >
        <Box sx={{
          maxWidth: '100%',
          mx: 'auto',
          px: { xs: 3, md: 8, lg: 12 }
        }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Ready to Transform Your Planning?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Start your first story poker session in less than 60 seconds.
          </Typography>
          <Button variant="contained" size="large" color="secondary">
            Sign Up Now
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{
        backgroundColor: '#0e101c',
        py: 6,
        textAlign: 'center',
        width: '100%'
      }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Story Poker. All rights reserved.
        </Typography>
        <IconButton
          href="https://github.com/your-repo"
          target="_blank"
          sx={{ mt: 1, color: 'white' }}
        >
          <GitHub />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LandingPage;
