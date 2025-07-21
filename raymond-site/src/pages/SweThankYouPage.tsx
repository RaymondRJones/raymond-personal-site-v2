import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Paper,
} from '@mui/material';
import { Group, EmojiEvents, ArrowForward } from '@mui/icons-material';
import Navigation from '../components/Navigation';

declare global {
  interface Window {
    fbq: any;
  }
}

const SweThankYouPage: React.FC = () => {
  useEffect(() => {
    // Track registration event using the global fbq function
    if (window.fbq) {
      window.fbq('track', 'CompleteRegistration');
    }
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Navigation />
      
      <Box sx={{ pt: 12, pb: 8 }}>
        <Container maxWidth="lg">
          {/* Thank You Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ color: 'text.primary', mb: 3, fontWeight: 'bold' }}
            >
              Thank You For <span style={{ color: '#FFD700' }}>Registering!</span>
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: 'text.secondary', mb: 6 }}
            >
              Next Step: Watch This Short Video
            </Typography>
          </Box>

          {/* VSL Video Section */}
          <Box sx={{ maxWidth: 900, mx: 'auto', mb: 8 }}>
            <Card sx={{ bgcolor: 'background.paper', border: '2px solid #FFD700' }}>
              <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/dSHzKgg5qIc"
                  title="SWE Career Transformation Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Box>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h5" sx={{ color: 'text.primary', mb: 2 }}>
                  How I Help Engineers Land $200k+ Jobs
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  My proven system for breaking into top tech companies
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Upsells Section */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{ color: 'text.primary', mb: 6 }}
            >
              Ready to <span style={{ color: '#FFD700' }}>Accelerate</span> Your Journey?
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
              {/* Community Upsell */}
              <Card sx={{ 
                bgcolor: 'background.paper', 
                border: '2px solid #333',
                '&:hover': {
                  border: '2px solid #FFD700',
                  transform: 'translateY(-4px)',
                },
                transition: 'all 0.3s ease',
              }}>
                <CardContent sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Group sx={{ fontSize: 60, color: 'secondary.main', mb: 3, mx: 'auto' }} />
                  
                  <Typography variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
                    Code With Raymond
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'secondary.main', mb: 3, fontWeight: 'bold' }}>
                    $7/month Community
                  </Typography>
                  
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.6, flexGrow: 1 }}>
                    Join my exclusive Skool community where I provide weekly Q&A sessions, 
                    direct message support, and connect you with like-minded developers 
                    on their journey to landing their dream job.
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ Weekly Live Q&A Sessions</Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ Direct Message Support</Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ Community of Motivated Developers</Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ Exclusive Resources and Guides</Typography>
                  </Box>

                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    sx={{
                      color: 'black',
                      py: 1.5,
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      mt: 'auto',
                    }}
                    endIcon={<ArrowForward />}
                    href="https://www.skool.com/raymond/about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* Mock Interview Challenge */}
              <Card sx={{ 
                bgcolor: 'background.paper', 
                border: '2px solid #FFD700',
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 10px 30px rgba(255, 215, 0, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bgcolor: 'secondary.main',
                    color: 'black',
                    px: 2,
                    py: 1,
                    borderBottomLeftRadius: 8,
                    fontWeight: 'bold',
                    fontSize: '0.75rem',
                  }}
                >
                  FREE
                </Box>
                
                <CardContent sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <EmojiEvents sx={{ fontSize: 60, color: 'secondary.main', mb: 3, mx: 'auto' }} />
                  
                  <Typography variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
                    3-Day Mock Interview Challenge
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'secondary.main', mb: 3, fontWeight: 'bold' }}>
                    Completely Free
                  </Typography>
                  
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.6, flexGrow: 1 }}>
                    Get hands-on practice with real interview scenarios. Receive personalized 
                    feedback and tips from me personally to improve your interview performance 
                    and land your dream role.
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ 3 Days of Mock Interviews</Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ Personalized Feedback</Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ Real Interview Scenarios</Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ Direct Tips from Ray</Typography>
                  </Box>

                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    sx={{
                      color: 'black',
                      py: 1.5,
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      mt: 'auto',
                    }}
                    endIcon={<ArrowForward />}
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf0YO5p7IZ8syclD4VXAtsvrv-p69qjOzUVk7p3tMx5KMVZYQ/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Here
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SweThankYouPage;