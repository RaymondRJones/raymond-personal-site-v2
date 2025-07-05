import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Chip,
  Alert,
} from '@mui/material';
import { 
  PlayArrow, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  School, 
  Group,
  Timer,
  AttachMoney,
  EmojiEvents,
  ArrowBack
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const CoachingPage: React.FC = () => {
  const [showApplication, setShowApplication] = useState(false);

  const testimonials = [
    {
      name: 'Andrew',
      company: 'C3.ai',
      salary: '$255k',
      quote: 'Raymond\'s coaching was instrumental in helping me land my dream job at C3.ai. His personalized approach and deep technical knowledge made all the difference.',
      avatar: 'A',
      loomUrl: 'https://www.loom.com/embed/32f365aebbc4426b8cd098535f54f1ac?sid=cef9de69-edee-4889-a344-6f88a5e44e7e',
    },
    {
      name: 'Om',
      company: 'Google',
      salary: '$180k',
      quote: 'After working with Raymond, I passed Google\'s onsite interview with confidence. His mock interviews prepared me for every scenario.',
      avatar: 'O',
      loomUrl: 'https://www.loom.com/embed/c8ba8a64b5864dc79d1e6520af3f1ee3?sid=aec93f14-b44a-473c-91f3-ad701cff191b',
    },
    {
      name: 'RJ',
      company: 'Fortune 500',
      salary: '$179k',
      quote: 'The systematic approach Raymond taught me transformed how I tackle coding problems. Worth every penny!',
      avatar: 'R',
      loomUrl: 'https://www.loom.com/embed/83e83110c4634fe0b62dd351d8b758f6?sid=a668ef97-5408-46c5-9679-b3fda3126569',
    },
    {
      name: 'Fuad',
      company: 'Amazon',
      salary: '$300k',
      quote: 'Raymond helped me negotiate my Amazon offer and maximize my compensation. His industry insights are invaluable.',
      avatar: 'F',
    },
    {
      name: 'Matt',
      company: 'Affirm',
      salary: '$160k',
      quote: 'Got two offers thanks to Raymond\'s coaching. His resume review and interview prep strategies work!',
      avatar: 'M',
    },
  ];

  const features = [
    {
      icon: <School />,
      title: 'Unlimited Coaching with Raymond',
      description: 'Text me when you\'re stuck - get personalized guidance whenever you need it',
    },
    {
      icon: <Group />,
      title: 'Unlimited Mock Interviews',
      description: 'Practice with me directly until you\'re confident and ready',
    },
    {
      icon: <Timer />,
      title: '3 Group Study Sessions Each Week',
      description: 'Collaborative learning with other aspiring FAANG engineers',
    },
    {
      icon: <EmojiEvents />,
      title: 'Private Fortune 500+ Community',
      description: 'Network with other software engineers studying for top companies',
    },
  ];

  const bonusFeatures = [
    'Resume Review with Ex-FAANG Recruiter',
    'My 1 hour course on System Design + LeetCode',
    'Another +1 mock/week with me (for 60 days)',
    'Mock Interview with FAANG Engineer',
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Navigation />
      
      {/* Hero Section */}
      <Box sx={{ pt: 12, pb: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Alert 
              severity="warning" 
              sx={{ 
                mb: 4, 
                bgcolor: 'rgba(255, 215, 0, 0.1)',
                border: '2px solid #FFD700',
                color: 'white',
                '& .MuiAlert-icon': {
                  color: '#FFD700',
                },
                fontSize: '1.1rem',
                fontWeight: 'bold',
              }}
            >
              ❗ Now Open for next 3 people only
            </Alert>
            
            <Typography
              variant="h2"
              gutterBottom
              sx={{ color: 'text.primary', mb: 3, fontWeight: 'bold' }}
            >
              Land Your Dream <span style={{ color: '#FFD700' }}>FAANG Job</span>
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: 'text.secondary', mb: 6, maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}
            >
              I'm top 3% in competitive programming worldwide. I've worked at a Fortune 50 company and have 5+ years of experience.
              I want you to get your job as fast as possible - every month you don't have a job is money lost.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 6 }}>
              <Chip
                icon={<Star />}
                label="Top 3% Competitive Programming"
                sx={{ 
                  bgcolor: 'rgba(255, 215, 0, 0.1)', 
                  color: 'secondary.main',
                  border: '1px solid #FFD700',
                  fontSize: '1rem',
                  py: 3,
                  px: 1,
                }}
              />
              <Chip
                icon={<TrendingUp />}
                label="Fortune 50 Experience"
                sx={{ 
                  bgcolor: 'rgba(255, 215, 0, 0.1)', 
                  color: 'secondary.main',
                  border: '1px solid #FFD700',
                  fontSize: '1rem',
                  py: 3,
                  px: 1,
                }}
              />
              <Chip
                icon={<EmojiEvents />}
                label="5+ Years Experience"
                sx={{ 
                  bgcolor: 'rgba(255, 215, 0, 0.1)', 
                  color: 'secondary.main',
                  border: '1px solid #FFD700',
                  fontSize: '1rem',
                  py: 3,
                  px: 1,
                }}
              />
            </Box>
          </Box>

          {/* VSL Video Section */}
          <Box sx={{ maxWidth: 900, mx: 'auto', mb: 8 }}>
            <Card sx={{ bgcolor: 'background.paper', border: '2px solid #FFD700' }}>
              <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe
                  src="https://www.loom.com/embed/a0e001d7c449435d90adaa0e6db48791?sid=e21301c0-6cd7-4a83-899d-5c6cc3a5d143"
                  frameBorder="0"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  title="VSL Video"
                />
              </Box>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h5" sx={{ color: 'text.primary', mb: 2 }}>
                  Watch: How I Help Engineers Land $200k+ Jobs
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  My exact system for acing FAANG interviews and maximizing compensation
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* What You Get Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ color: 'text.primary', mb: 2 }}
          >
            🚨🚨🚨 <span style={{ color: '#FFD700' }}>4 Things You Get</span> When You Join 🚨🚨🚨
          </Typography>
          
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ 
                  bgcolor: 'background.default', 
                  height: '100%',
                  border: '2px solid #333',
                  '&:hover': {
                    border: '2px solid #FFD700',
                    transform: 'translateY(-4px)',
                  },
                  transition: 'all 0.3s ease',
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ mr: 2, color: 'secondary.main' }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => setShowApplication(true)}
              sx={{
                color: 'black',
                px: 6,
                py: 2,
                fontWeight: 'bold',
                fontSize: '1.3rem',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                transition: 'transform 0.2s',
              }}
            >
              Apply Now - Only 3 Spots Left
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Annual Bonus Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ color: 'text.primary', mb: 6 }}
          >
            🎁 🎁 🎁 <span style={{ color: '#FFD700' }}>Annual Bonus</span> 🎁 🎁 🎁
          </Typography>
          
          <Paper sx={{ 
            p: 4, 
            bgcolor: 'rgba(255, 215, 0, 0.1)', 
            border: '2px solid #FFD700',
            borderRadius: 4,
            mb: 6,
          }}>
            <List>
              {bonusFeatures.map((bonus, index) => (
                <ListItem key={index} sx={{ py: 1 }}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={bonus}
                    primaryTypographyProps={{
                      color: 'text.primary',
                      fontSize: '1.1rem',
                      fontWeight: 'medium',
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => setShowApplication(true)}
              sx={{
                color: 'black',
                px: 6,
                py: 2,
                fontWeight: 'bold',
                fontSize: '1.3rem',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                transition: 'transform 0.2s',
              }}
            >
              Apply Now - $4,999/year
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ color: 'text.primary', mb: 6 }}
          >
            People I've <span style={{ color: '#FFD700' }}>Helped</span>
          </Typography>
          
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card sx={{ 
                  bgcolor: 'background.default', 
                  height: '100%',
                  border: '2px solid #333',
                  '&:hover': {
                    border: '2px solid #FFD700',
                    transform: 'translateY(-4px)',
                  },
                  transition: 'all 0.3s ease',
                }}>
                  {testimonial.loomUrl && (
                    <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                      <iframe
                        src={testimonial.loomUrl}
                        frameBorder="0"
                        allowFullScreen
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                        }}
                        title={`${testimonial.name} Testimonial`}
                      />
                    </Box>
                  )}
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ bgcolor: 'secondary.main', color: 'black', mr: 2 }}>
                        {testimonial.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ color: 'text.primary' }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                          {testimonial.company} • {testimonial.salary}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      "{testimonial.quote}"
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => setShowApplication(true)}
              sx={{
                color: 'black',
                px: 6,
                py: 2,
                fontWeight: 'bold',
                fontSize: '1.3rem',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                transition: 'transform 0.2s',
              }}
            >
              Join Them - Apply Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="md">
          <Paper sx={{ 
            p: 6, 
            bgcolor: 'rgba(255, 215, 0, 0.1)', 
            border: '3px solid #FFD700',
            borderRadius: 4,
            textAlign: 'center',
          }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ color: 'text.primary', mb: 3 }}
            >
              Ready to Land Your Dream Job?
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.6 }}
            >
              Don't let another month pass by without the job you deserve. 
              Every day you wait is money lost and opportunities missed.
            </Typography>
            
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => setShowApplication(true)}
              sx={{
                color: 'black',
                px: 8,
                py: 3,
                fontWeight: 'bold',
                fontSize: '1.4rem',
                mb: 3,
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                transition: 'transform 0.2s',
              }}
            >
              Apply Now - Limited Spots Available
            </Button>
            
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Application review typically takes 24-48 hours
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Application Modal/Form */}
      {showApplication && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            p: 2,
          }}
          onClick={() => setShowApplication(false)}
        >
          <Paper
            sx={{
              p: 4,
              bgcolor: 'background.paper',
              borderRadius: 4,
              maxWidth: 600,
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: 'text.primary', mb: 3, textAlign: 'center' }}
            >
              Apply for Tech Accelerator
            </Typography>
            
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', mb: 4, textAlign: 'center' }}
            >
              Due to the personalized nature of this program, I only work with a select few candidates. 
              Please email me directly with your background and goals.
            </Typography>
            
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography
                variant="h6"
                sx={{ 
                  color: 'secondary.main', 
                  fontWeight: 'bold',
                  fontFamily: 'monospace',
                  mb: 2
                }}
              >
                raymond@raymondjones.dev
              </Typography>
              
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => window.location.href = 'mailto:raymond@raymondjones.dev?subject=Tech Accelerator Application'}
                sx={{
                  color: 'black',
                  px: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                  mb: 3,
                }}
              >
                Send Application Email
              </Button>
            </Box>
            
            <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
              Include: Your current experience, target companies, and timeline for job search
            </Typography>
          </Paper>
        </Box>
      )}

      {/* Back to Home */}
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Button
          component={Link}
          to="/"
          variant="outlined"
          color="secondary"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontWeight: 'bold',
            borderWidth: 2,
            '&:hover': {
              borderWidth: 2,
              bgcolor: 'rgba(255, 215, 0, 0.1)',
            },
          }}
          startIcon={<ArrowBack />}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default CoachingPage;