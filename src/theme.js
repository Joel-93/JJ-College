import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0a2e5c', // Deep Navy Blue
      light: '#1a4a7a',
      dark: '#061f3d',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e8a838', // Gold/Amber
      light: '#f0c66a',
      dark: '#c48a1f',
      contrastText: '#0a2e5c',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a2e',
      secondary: '#4a4a5a',
    },
    success: {
      main: '#2e7d32',
    },
    info: {
      main: '#0288d1',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.5,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.6,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    subtitle1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      color: '#4a4a5a',
    },
    subtitle2: {
      fontSize: '0.9rem',
      lineHeight: 1.6,
      color: '#6a6a7a',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#2a2a3a',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#4a4a5a',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          backgroundColor: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 28px',
          fontWeight: 600,
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #0a2e5c 0%, #1a4a7a 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #061f3d 0%, #0a2e5c 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #e8a838 0%, #f0c66a 100%)',
          color: '#0a2e5c',
          '&:hover': {
            background: 'linear-gradient(135deg, #c48a1f 0%, #e8a838 100%)',
          },
        },
        outlinedPrimary: {
          borderColor: '#0a2e5c',
          color: '#0a2e5c',
          '&:hover': {
            borderColor: '#061f3d',
            backgroundColor: 'rgba(10,46,92,0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.10)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
        elevation1: {
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
        elevation4: {
          boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0a2e5c',
          color: '#ffffff',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255,255,255,0.08)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
          '@media (min-width:600px)': {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
        },
      },
    },
  },
});

export default theme;