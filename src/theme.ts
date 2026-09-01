import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0071e3',
      light: '#2997ff',
      dark: '#005bb5',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f7',
      paper: '#ffffff',
    },
    text: {
      primary: '#1d1d1f',
      secondary: '#6e6e73',
      disabled: '#6e6e73',
    },
    divider: '#d2d2d7',
    error: { main: '#d93025' },
    success: { main: '#0071e3' },
  },
  typography: {
    fontFamily: '"Montserrat", system-ui, Helvetica, Arial, sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 },
    h2: { fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 },
    h3: { fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 },
    h4: { fontWeight: 600 },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.75 },
    button: { textTransform: 'none', fontWeight: 500 },
    overline: {
      letterSpacing: '0.1em',
      fontSize: '0.75rem',
      fontWeight: 500,
      textTransform: 'uppercase' as const,
    },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { minWidth: '320px' },
        '#root': { maxWidth: '100%', textAlign: 'left' },
        ul: { listStyle: 'none', padding: 0, margin: 0 },
        address: { fontStyle: 'normal' },
        img: { maxWidth: '100%', display: 'block' },
        'button:focus-visible, a:focus-visible': { outline: '2px solid #0071e3', outlineOffset: '3px' },
      },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: '1px solid #d2d2d7',
          color: '#1d1d1f',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 72,
          minHeight: '72px !important',
          maxWidth: 1200,
          width: '100%',
          margin: '0 auto',
          padding: '0 2.5rem !important',
          '@media (max-width: 480px)': {
            padding: '0 1.25rem !important',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: '100px',
          textTransform: 'none',
          fontFamily: '"Montserrat", system-ui, sans-serif',
          fontWeight: 500,
          letterSpacing: '0.01em',
        },
        sizeMedium: {
          fontSize: '0.9375rem',
          padding: '0.75rem 1.875rem',
        },
        sizeSmall: {
          fontSize: '0.8125rem',
          padding: '0.4rem 1.125rem',
        },
        containedPrimary: {
          backgroundColor: '#0071e3',
          color: '#fff',
          '&:hover': { backgroundColor: '#005bb5', boxShadow: 'none' },
        },
        outlinedPrimary: {
          borderColor: 'rgba(41, 151, 255, 0.4)',
          color: '#0071e3',
          '&:hover': {
            borderColor: '#0071e3',
            backgroundColor: 'rgba(41, 151, 255, 0.05)',
          },
        },
        text: {
          color: '#6e6e73',
          padding: '0.5rem 1rem',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            color: '#1d1d1f',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
            backgroundColor: '#fff',
            fontFamily: '"Montserrat", system-ui, sans-serif',
            fontSize: '0.9375rem',
            '& fieldset': { borderColor: '#d2d2d7' },
            '&:hover fieldset': { borderColor: '#6e6e73' },
            '&.Mui-focused fieldset': { borderColor: '#0071e3', borderWidth: '2px' },
            '& input': {
              color: '#1d1d1f',
              padding: '0.875rem 1.125rem',
              fontFamily: '"Montserrat", system-ui, sans-serif',
              '&::placeholder': { color: '#6e6e73', opacity: 1 },
            },
            '&.MuiInputBase-multiline': { padding: '0.875rem 1.125rem' },
            '& textarea': {
              color: '#1d1d1f',
              fontFamily: '"Montserrat", system-ui, sans-serif',
              '&::placeholder': { color: '#6e6e73', opacity: 1 },
            },
          },
          '& .MuiInputLabel-root': {
            fontFamily: '"Montserrat", system-ui, sans-serif',
            color: '#6e6e73',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            '&.Mui-focused': { color: '#0071e3' },
          },
          '& .MuiInputLabel-shrink': {
            transform: 'translate(14px, -9px) scale(0.9)',
          },
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderRadius: 0,
          transition: 'background-color 0.2s',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          fontFamily: '"Montserrat", system-ui, sans-serif',
          fontWeight: 600,
          fontSize: '0.6875rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase' as const,
          height: 26,
        },
        colorPrimary: {
          backgroundColor: '#0071e3',
          color: '#ffffff',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          fontSize: '0.875rem',
          fontFamily: '"Montserrat", system-ui, sans-serif',
        },
        standardSuccess: {
          backgroundColor: 'rgba(41, 151, 255, 0.06)',
          color: '#0071e3',
          border: '1px solid rgba(41, 151, 255, 0.25)',
        },
        standardError: {
          backgroundColor: 'rgba(217, 48, 37, 0.06)',
          color: '#d93025',
          border: '1px solid rgba(217, 48, 37, 0.2)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: '#d2d2d7' },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'rgba(255, 255, 255, 0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        },
      },
    },
  },
})

export default theme
