import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Seo from './Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Seite nicht gefunden Arkvyn" robots="noindex, nofollow" social={false} />
      <Box
        component="main"
        id="main"
        sx={{ minHeight: 'calc(100vh - 72px)', display: 'flex', alignItems: 'center', pt: '72px' }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', py: 10 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1.5 }}>
            Fehler 404
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, color: 'text.primary', mb: 2 }}>
            Seite nicht gefunden
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 480, mx: 'auto', mb: 4 }}>
            Die angeforderte Seite existiert nicht oder wurde verschoben.
          </Typography>
          <Button variant="contained" component={Link} to="/">
            Zur Startseite
          </Button>
        </Container>
      </Box>
    </>
  )
}
