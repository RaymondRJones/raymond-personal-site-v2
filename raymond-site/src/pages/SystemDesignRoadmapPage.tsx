import React, { useState, useEffect } from 'react';
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
import { CheckCircle, Timeline, Architecture, Storage } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

declare global {
  interface Window {
    fbq: any;
  }
}

const SystemDesignRoadmapPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
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
      const response = await fetch('https://hook.us2.make.com/jvqefq1pgp367pgpvenfbibb0v6olcxd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          source: 'system_design_roadmap',
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        if (window.fbq) {
          window.fbq('track', 'Lead');
        }
        
        navigate('/swe-thank-you');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const roadmapSteps = [
    {
      icon: <Timeline sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Master the Fundamentals',
      description: 'Learn core concepts: scalability, reliability, availability, and consistency patterns',
    },
    {
      icon: <Architecture sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'System Components & Architecture',
      description: 'Understand load balancers, databases, caching, message queues, and microservices',
    },
    {
      icon: <Storage sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Real-World Case Studies',
      description: 'Design systems like Netflix, Uber, Twitter, and Instagram from scratch',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Navigation />
      
      <Box sx={{ pt: 12, pb: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ color: 'text.primary', mb: 3, fontWeight: 'bold' }}
            >
              System Design <span style={{ color: '#FFD700' }}>Roadmap</span>
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: 'text.secondary', mb: 4 }}
            >
              Your Complete Guide to Mastering System Design Interviews
            </Typography>
          </Box>

          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ color: 'text.primary', mb: 6 }}
            >
              What You'll <span style={{ color: '#FFD700' }}>Master</span>
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr' }, gap: 3 }}>
              {roadmapSteps.map((step, index) => (
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
                        {step.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ color: 'text.primary', mb: 2, fontWeight: 'bold' }}>
                          {index + 1}. {step.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                          {step.description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

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
              Get Your Free System Design Roadmap
            </Typography>
            
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: 'text.primary', mb: 4 }}
            >
              Download the Complete <span style={{ color: '#FFD700' }}>Roadmap</span>
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
                    Sending...
                  </Box>
                ) : (
                  'Get My Free Roadmap'
                )}
              </Button>
            </Box>

            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
              No spam ever. Unsubscribe anytime with just one click.
            </Typography>
          </Paper>

          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
              Join engineers who've mastered system design interviews
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={{ color: 'secondary.main' }} />
                <Typography sx={{ color: 'text.primary' }}>Sarah → Meta ($320k)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={{ color: 'secondary.main' }} />
                <Typography sx={{ color: 'text.primary' }}>Mike → Netflix ($280k)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={{ color: 'secondary.main' }} />
                <Typography sx={{ color: 'text.primary' }}>Alex → Apple ($295k)</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SystemDesignRoadmapPage;