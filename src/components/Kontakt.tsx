import { useState, type FormEvent } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const contactDetails = [
  { label: 'Telefon', value: '0176 46143387', icon: '📞' },
  { label: 'E-Mail', value: 'arkvyn.solutions@proton.me', icon: '✉' },
]

export default function Kontakt() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [betreff, setBetreff] = useState('')
  const [nachricht, setNachricht] = useState('')
  const [status, setStatus] = useState<FormState>('idle')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setFeedback('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, betreff, message: nachricht }),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setFeedback('Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald!')
        setName(''); setEmail(''); setBetreff(''); setNachricht('')
      } else {
        setStatus('error')
        setFeedback(data.message || 'Fehler beim Senden. Bitte versuchen Sie es erneut.')
      }
    } catch {
      setStatus('error')
      setFeedback('Server nicht erreichbar. Bitte versuchen Sie es später erneut.')
    }
  }

  const isLoading = status === 'loading'

  return (
    <Box component="section" id="kontakt" className="section section--kontakt" aria-label="Kontakt aufnehmen">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 7, md: 10 },
            alignItems: 'start',
          }}
        >
          {/* Left: info */}
          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, color: 'text.primary', mb: 2 }}>
              Kontakt{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>aufnehmen</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5 }}>
              Sie haben ein Projekt im Kopf oder möchten mehr über meine
              Leistungen erfahren? Schreiben Sie mir und ich melde mich innerhalb
              von 24 Stunden.
            </Typography>

            {/* Contact detail rows */}
            <Box
              sx={{
                border: '1px solid #c7c7cc',
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: 'background.paper',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 14px rgba(0,0,0,0.06)',
              }}
            >
              {contactDetails.map((detail, i) => (
                <Box
                  key={detail.label}
                  sx={{
                    display: 'flex',
                    gap: 2,
                    alignItems: 'flex-start',
                    px: 2.5,
                    py: 2.25,
                    borderBottom: i < contactDetails.length - 1 ? '1px solid #e5e5ea' : 'none',
                    transition: 'background 0.15s',
                    '&:hover': { bgcolor: '#f0f4ff' },
                  }}
                >
                  <Typography sx={{ opacity: 0.5, mt: 0.25, flexShrink: 0 }}>{detail.icon}</Typography>
                  <Box>
                    <Typography
                      sx={{ fontSize: '0.7rem', fontWeight: 600, color: 'text.disabled', letterSpacing: '0.1em', textTransform: 'uppercase', mb: 0.25 }}
                    >
                      {detail.label}
                    </Typography>
                    <Typography sx={{ fontSize: '0.9375rem', color: 'text.primary' }}>
                      {detail.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right: form */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              border: '1px solid #c7c7cc',
              borderRadius: 2.5,
              p: { xs: 3, md: 4 },
              boxShadow: '0 2px 6px rgba(0,0,0,0.05), 0 10px 28px rgba(0,0,0,0.09)',
            }}
          >
            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={2}>
                {/* Name + Email row */}
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                  <TextField
                    label="Name"
                    placeholder="Max Mustermann"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    disabled={isLoading}
                    fullWidth
                    hiddenLabel={false}
                  />
                  <TextField
                    label="E-Mail"
                    type="email"
                    placeholder="mail@beispiel.de"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    fullWidth
                  />
                </Box>

                <TextField
                  label="Betreff"
                  placeholder="Ihr Anliegen"
                  value={betreff}
                  onChange={e => setBetreff(e.target.value)}
                  required
                  disabled={isLoading}
                  fullWidth
                />

                <TextField
                  label="Nachricht"
                  placeholder="Beschreiben Sie Ihr Projekt…"
                  value={nachricht}
                  onChange={e => setNachricht(e.target.value)}
                  required
                  disabled={isLoading}
                  multiline
                  rows={5}
                  fullWidth
                />

                {feedback && (
                  <Alert
                    severity={status === 'success' ? 'success' : 'error'}
                    icon={false}
                  >
                    {feedback}
                  </Alert>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isLoading}
                  sx={{ py: 1.625 }}
                  startIcon={isLoading ? <CircularProgress size={16} sx={{ color: 'rgba(255,255,255,0.5)' }} /> : null}
                >
                  {isLoading ? 'Wird gesendet…' : 'Nachricht senden →'}
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
