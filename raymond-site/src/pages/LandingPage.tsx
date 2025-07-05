import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  Avatar,
  Paper,
  Divider,
} from '@mui/material';
import { PlayArrow, Email, Star, Group } from '@mui/icons-material';
import Navigation from '../components/Navigation';

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Navigation />
      
      {/* Hero Section */}
      <Box sx={{ pt: 12, pb: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 4, md: 0 } }}>
                <Avatar
                  src="/profile_pic.jpg"
                  alt="Ray Jones"
                  sx={{
                    width: 280,
                    height: 280,
                    border: '4px solid',
                    borderColor: 'secondary.main',
                    boxShadow: '0 0 30px rgba(255, 215, 0, 0.3)',
                  }}
                >
                  <Typography variant="h1" sx={{ color: 'secondary.main', fontSize: '6rem' }}>
                    R
                  </Typography>
                </Avatar>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={8}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  color: 'text.primary',
                  textAlign: { xs: 'center', md: 'left' },
                  mb: 3,
                }}
              >
                Hey, I'm <span style={{ color: '#FFD700' }}>Ray</span>.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.primary',
                  textAlign: { xs: 'center', md: 'left' },
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Software Engineer at <span style={{ color: '#FFD700', fontWeight: 'bold' }}>Walmart</span> and YouTuber. 
                I'm top 3% in competitive programming. I've helped people like you land their dream software engineering job. 
                Now, it's your turn. 🚀
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(255, 215, 0, 0.1)', px: 2, py: 1, borderRadius: 2 }}>
                  <Star sx={{ color: 'secondary.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    Top 3% Competitive Programming
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(255, 215, 0, 0.1)', px: 2, py: 1, borderRadius: 2 }}>
                  <Group sx={{ color: 'secondary.main' }} />
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    Walmart Software Engineer
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* YouTube Video Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ color: 'text.primary', mb: 6 }}
          >
            Watch my recent <span style={{ color: '#FFD700' }}>YouTube Video</span>
          </Typography>
          
          <Box sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}>
            <Card sx={{ bgcolor: 'background.default', border: '2px solid #333' }}>
              <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/ZsHr9eXt9A0"
                  title="I just got an offer"
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
              <CardContent>
                <Typography variant="h6" sx={{ color: 'text.primary', mb: 1 }}>
                  I just got an offer
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Watch my journey and get actionable tips for your tech career
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Additional Videos Row */}
          <Grid container spacing={3}>
            {[
              {
                title: 'Tech Interview Tips',
                videoId: 'mQ_hF7jhw6k',
                description: 'Essential tips for acing your tech interviews',
              },
              {
                title: 'LeetCode Strategy That Got Me Into FAANG',
                videoId: 'ZaLSwhciSfs',
                description: 'My complete system for mastering coding interviews',
              },
              {
                title: 'Coding Interview Success',
                videoId: '6zQAES-o1io',
                description: 'How to approach coding problems systematically',
              },
            ].map((video, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ bgcolor: 'background.default', border: '1px solid #333', height: '100%' }}>
                  <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
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
                  <CardContent>
                    <Typography variant="h6" sx={{ color: 'text.primary', mb: 1, fontSize: '1rem' }}>
                      {video.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {video.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Programs Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ color: 'text.primary', mb: 2 }}
          >
            My <span style={{ color: '#FFD700' }}>Programs</span>
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: 'text.secondary', mb: 6, maxWidth: 600, mx: 'auto' }}
          >
            Choose the program that fits your goals and accelerate your software engineering career
          </Typography>

          <Grid container spacing={4}>
            {/* Code With Raymond */}
            <Grid item xs={12} md={6}>
              <Card sx={{ 
                bgcolor: 'background.paper', 
                height: '100%', 
                border: '2px solid #333',
                '&:hover': {
                  border: '2px solid #FFD700',
                  transform: 'translateY(-4px)',
                },
                transition: 'all 0.3s ease',
              }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    bgcolor: 'rgba(255, 215, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Group sx={{ fontSize: 60, color: 'secondary.main' }} />
                </CardMedia>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
                    Code With Raymond
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
                    Join my exclusive Skool community where I provide weekly Q&A sessions, 
                    direct message support, and connect you with like-minded developers 
                    on their journey to landing their dream job.
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ Weekly Q&A Sessions</Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ Direct Message Support</Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ Community Access</Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ Exclusive Resources</Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Box>
                      <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                        $7
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        /month
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      sx={{
                        color: 'black',
                        px: 4,
                        py: 1.5,
                        fontWeight: 'bold',
                      }}
                    >
                      Join Community
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Tech Accelerator */}
            <Grid item xs={12} md={6}>
              <Card sx={{ 
                bgcolor: 'background.paper', 
                height: '100%', 
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
                  EXCLUSIVE
                </Box>
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    bgcolor: 'rgba(255, 215, 0, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Star sx={{ fontSize: 60, color: 'secondary.main' }} />
                </CardMedia>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
                    Tech Accelerator
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
                    Elite 1-on-1 coaching program with unlimited access to me personally. 
                    Apply-only access restricted to qualified candidates serious about 
                    their career transformation.
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ Unlimited 1-on-1 Coaching</Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ Unlimited Mock Interviews</Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ Resume Review with Ex-FAANG Recruiter</Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ Private Community Access</Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>✓ System Design + LeetCode Course</Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Box>
                      <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                        $4,999
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        /year
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      sx={{
                        color: 'black',
                        px: 4,
                        py: 1.5,
                        fontWeight: 'bold',
                      }}
                    >
                      Apply Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ color: 'text.primary', mb: 2 }}
          >
            Subscribe to My <span style={{ color: '#FFD700' }}>Newsletter</span>
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: 'text.secondary', mb: 6, maxWidth: 600, mx: 'auto' }}
          >
            Get weekly insights, coding tips, and career advice delivered straight to your inbox. 
            Plus, exclusive content you won't find anywhere else.
          </Typography>

          <Paper
            component="form"
            onSubmit={handleNewsletterSubmit}
            sx={{
              p: 4,
              bgcolor: 'background.default',
              border: '2px solid #333',
              borderRadius: 4,
              textAlign: 'center',
            }}
          >
            <Box sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'center' }}>
              <TextField
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#333',
                    },
                    '&:hover fieldset': {
                      borderColor: '#FFD700',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#FFD700',
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  color: 'black',
                  px: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                  minWidth: 120,
                }}
                startIcon={<Email />}
              >
                Subscribe
              </Button>
            </Box>
            
            {isSubscribed && (
              <Box sx={{ mt: 2, p: 2, bgcolor: 'rgba(0, 255, 0, 0.1)', borderRadius: 2 }}>
                <Typography sx={{ color: 'green', fontWeight: 'bold' }}>
                  🎉 Thanks for subscribing! Check your email for confirmation.
                </Typography>
              </Box>
            )}
            
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
              No spam ever. Unsubscribe anytime with just one click.
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, bgcolor: 'background.default', borderTop: '1px solid #333' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
            © 2025 Ray. All rights reserved. Built with React & Material-UI.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;