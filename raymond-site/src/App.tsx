import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import CoachingPage from './pages/CoachingPage';
import SweWorkshopPage from './pages/SweWorkshopPage';
import SweThankYouPage from './pages/SweThankYouPage';
import SystemDesignRoadmapPage from './pages/SystemDesignRoadmapPage';
import ResumeDownloadPage from './pages/ResumeDownloadPage';
import LeetcodeRoadmapPage from './pages/LeetcodeRoadmapPage';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#FFD700',
    },
    background: {
      default: '#000000',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFD700',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/coaching" element={<CoachingPage />} />
          <Route path="/swe-workshop" element={<SweWorkshopPage />} />
          <Route path="/swe-thank-you" element={<SweThankYouPage />} />
          <Route path="/system-design-roadmap" element={<SystemDesignRoadmapPage />} />
          <Route path="/resume-download" element={<ResumeDownloadPage />} />
          <Route path="/leetcode-roadmap" element={<LeetcodeRoadmapPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
