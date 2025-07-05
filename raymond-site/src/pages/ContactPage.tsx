import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
} from '@mui/material';
import { Email, ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const ContactPage: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:raymond@raymondjones.dev';
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Navigation />
      
      <Box sx={{ pt: 12, pb: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ color: 'text.primary', mb: 3 }}
            >
              Get In <span style={{ color: '#FFD700' }}>Touch</span>
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: 'text.secondary', mb: 6, maxWidth: 600, mx: 'auto' }}
            >
              Have questions about my coaching programs, career advice, or anything else? 
              I'd love to hear from you!
            </Typography>
          </Box>

          <Paper
            sx={{
              p: 6,
              bgcolor: 'background.paper',
              border: '2px solid #333',
              borderRadius: 4,
              textAlign: 'center',
              mb: 4,
            }}
          >
            <Email sx={{ fontSize: 80, color: 'secondary.main', mb: 3 }} />
            
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: 'text.primary', mb: 3 }}
            >
              Email Me Directly
            </Typography>
            
            <Typography
              variant="h6"
              sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.6 }}
            >
              Feel free to ask me any questions about software engineering, career development, 
              coding interviews, or my coaching programs. I personally read and respond to every email.
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                sx={{ 
                  color: 'secondary.main', 
                  fontWeight: 'bold',
                  fontFamily: 'monospace',
                  mb: 2
                }}
              >
                raymond@raymondjones.dev
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={handleEmailClick}
              sx={{
                color: 'black',
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                fontSize: '1.1rem',
              }}
              startIcon={<Email />}
            >
              Send Email
            </Button>
          </Paper>

          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', mb: 3 }}
            >
              <strong>Response Time:</strong> I typically respond within 24-48 hours
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', mb: 3 }}
            >
              <strong>Best For:</strong> Career advice, coaching questions, collaboration opportunities
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
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
        </Container>
      </Box>
    </Box>
  );
};

export default ContactPage;