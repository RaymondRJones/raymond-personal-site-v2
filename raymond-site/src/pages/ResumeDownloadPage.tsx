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
import { CheckCircle, Description, Work, Download } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

declare global {
  interface Window {
    fbq: any;
  }
}

const ResumeDownloadPage: React.FC = () => {
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
          source: 'my_resume',
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

  const resumeHighlights = [
    {
      icon: <Work sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Senior Software Engineer Experience',
      description: 'Real-world experience at top tech companies with proven track record',
    },
    {
      icon: <Description sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'ATS-Optimized Format',
      description: 'Structured to pass Applicant Tracking Systems and get noticed by recruiters',
    },
    {
      icon: <Download sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Proven Results Template',
      description: 'The exact format that helped me land multiple $200k+ offers',
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
              Download My <span style={{ color: '#FFD700' }}>Resume</span>
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: 'text.secondary', mb: 4 }}
            >
              See the Exact Resume Format That Landed Me Multiple $200k+ Job Offers
            </Typography>
          </Box>

          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ color: 'text.primary', mb: 6 }}
            >
              What Makes This Resume <span style={{ color: '#FFD700' }}>Special</span>
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr' }, gap: 3 }}>
              {resumeHighlights.map((highlight, index) => (
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
                        {highlight.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ color: 'text.primary', mb: 2, fontWeight: 'bold' }}>
                          {highlight.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                          {highlight.description}
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
              Get Your Free Resume Template
            </Typography>
            
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: 'text.primary', mb: 4 }}
            >
              Download My <span style={{ color: '#FFD700' }}>Proven Resume</span>
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
                  'Download My Resume'
                )}
              </Button>
            </Box>

            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
              No spam ever. Unsubscribe anytime with just one click.
            </Typography>
          </Paper>

          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
              Join engineers who've optimized their resumes for success
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={{ color: 'secondary.main' }} />
                <Typography sx={{ color: 'text.primary' }}>Jessica → Microsoft ($275k)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={{ color: 'secondary.main' }} />
                <Typography sx={{ color: 'text.primary' }}>David → Amazon ($290k)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={{ color: 'secondary.main' }} />
                <Typography sx={{ color: 'text.primary' }}>Emma → Google ($310k)</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ResumeDownloadPage;