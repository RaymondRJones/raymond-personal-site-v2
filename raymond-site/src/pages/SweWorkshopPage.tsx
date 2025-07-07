import React, { useState, useEffect} from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Paper,
  Alert,
  CircularProgress,
} from '@mui/material';
import { CheckCircle, Code, Build, Description } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

declare global {
  interface Window {
    fbq: any;
  }
}

const SweWorkshopPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Track page view using the global fbq function
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Replace with your actual MAKE webhook URL
      const response = await fetch('https://hook.us2.make.com/jvqefq1pgp367pgpvenfbibb0v6olcxd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          source: 'swe-workshop-2025',
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // Track lead generation event
        if (window.fbq) {
          window.fbq('track', 'Lead');
        }
        
        // Redirect to thank you page
        navigate('/swe-thank-you');
      } else {
        throw new Error('Failed to register');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const workshopTopics = [
    {
      icon: <Code sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'How to Start and Crush LeetCode',
      description: 'Master the systematic approach to coding problems that gets you hired',
    },
    {
      icon: <Build sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'How to Build Great Projects that Impress Recruiters',
      description: 'Create portfolio projects that showcase your skills and stand out',
    },
    {
      icon: <Description sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'How to Have a Good Resume/Profile to Get Interviews',
      description: 'Optimize your resume and LinkedIn to get noticed by top companies',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Navigation />
      
      <Box sx={{ pt: 12, pb: 8 }}>
        <Container maxWidth="md">

          {/* Workshop Topics */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ color: 'text.primary', mb: 6 }}
            >
              What You'll <span style={{ color: '#FFD700' }}>Learn</span>
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr' }, gap: 3 }}>
              {workshopTopics.map((topic, index) => (
                <Card 
                  key={index}
                  sx={{ 
                    bgcolor: 'background.paper', 
                    border: '2px solid #333',
                    '&:hover': {
                      border: '2px solid #FFD700',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                      <Box sx={{ flexShrink: 0 }}>
                        {topic.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ color: 'text.primary', mb: 2, fontWeight: 'bold' }}>
                          {index + 1}. {topic.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                          {topic.description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          {/* Registration Section */}
          <Paper
            sx={{
              p: 6,
              bgcolor: 'rgba(255, 215, 0, 0.1)',
              border: '3px solid #FFD700',
              borderRadius: 4,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h6"
              sx={{ 
                color: 'secondary.main', 
                mb: 4, 
                fontWeight: 'bold',
                fontSize: '1.2rem',
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              Register to Save Your Seat
            </Typography>
            
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: 'text.primary', mb: 4 }}
            >
              Secure Your Spot Now - <span style={{ color: '#FFD700' }}>It's Free!</span>
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ maxWidth: 400, mx: 'auto' }}
            >
              <TextField
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                variant="outlined"
                disabled={isSubmitting}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'background.default',
                    '& fieldset': {
                      borderColor: '#333',
                      borderWidth: 2,
                    },
                    '&:hover fieldset': {
                      borderColor: '#FFD700',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#FFD700',
                    },
                  },
                  '& .MuiInputBase-input': {
                    fontSize: '1.1rem',
                    py: 2,
                  },
                }}
              />

              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                disabled={isSubmitting}
                sx={{
                  color: 'black',
                  py: 2,
                  fontWeight: 'bold',
                  fontSize: '1.3rem',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                  transition: 'transform 0.2s',
                }}
              >
                {isSubmitting ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CircularProgress size={20} sx={{ color: 'black' }} />
                    Registering...
                  </Box>
                ) : (
                  'Sign Up'
                )}
              </Button>
            </Box>

            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
              No spam ever. Unsubscribe anytime with just one click.
            </Typography>
          </Paper>

          {/* Social Proof */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
              Join hundreds of developers who've already transformed their careers
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={{ color: 'secondary.main' }} />
                <Typography sx={{ color: 'text.primary' }}>Andrew → C3.ai ($255k)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={{ color: 'secondary.main' }} />
                <Typography sx={{ color: 'text.primary' }}>Om → Google ($180k)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={{ color: 'secondary.main' }} />
                <Typography sx={{ color: 'text.primary' }}>Fuad → Amazon ($300k)</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SweWorkshopPage;