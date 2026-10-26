import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Section from './ui/Section'
import LinkedInIcon from './ui/LinkedInIcon'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const contactDetails = [
  { label: 'Telefon', value: '0155 67829726', href: 'tel:+4915567829726', external: false },
  { label: 'E-Mail', value: 'arkvyn.solutions@proton.me', href: 'mailto:arkvyn.solutions@proton.me', external: false },
  { label: 'LinkedIn', value: 'in/tim-tolk', href: 'https://www.linkedin.com/in/tim-tolk-2091a7258', external: true },
]

export default function Kontakt() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [betreff, setBetreff] = useState('')
  const [nachricht, setNachricht] = useState('')
  const [website, setWebsite] = useState('')
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
        body: JSON.stringify({ name, email, betreff, message: nachricht, website }),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setFeedback('Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich bald!')
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
    <Section id="kontakt" surface="light" aria-labelledby="kontakt-heading">
      <div className="split">
        <div className="split__side">
          <p className="eyebrow" data-reveal="fade">Kontakt</p>
          <h2 id="kontakt-heading" data-reveal="blur">Kontakt aufnehmen</h2>
          <p className="split__lead" data-reveal="fade">
            Sie haben ein Projekt im Kopf oder möchten mehr über meine
            Leistungen erfahren? Schreiben Sie mir und ich melde mich innerhalb
            von 24 Stunden.
          </p>

          <dl className="contact-list" data-reveal="lift">
            {contactDetails.map(detail => (
              <div key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>
                  <a
                    href={detail.href}
                    {...(detail.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={detail.external ? `${detail.label}: ${detail.value} (öffnet in neuem Tab)` : undefined}
                    className={detail.label === 'LinkedIn' ? 'icon-link' : undefined}
                  >
                    {detail.label === 'LinkedIn' ? <LinkedInIcon width="20" height="20" /> : null}
                    {detail.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="split__main">
          <form className="contact-form" onSubmit={handleSubmit} data-reveal="lift">
            {/* Honeypot für Bots. display:none, damit Browser-Autofill und
                Passwortmanager es nicht befüllen (sonst wird die Anfrage verworfen). */}
            <div className="contact-form__trap" aria-hidden="true">
              <input
                type="text"
                name="website"
                value={website}
                onChange={e => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                data-1p-ignore
                data-lpignore="true"
                data-bwignore
                data-form-type="other"
              />
            </div>

            <div className="contact-form__row">
              <label className="field">
                <span className="field__label">Name</span>
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="Max Mustermann"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  maxLength={100}
                  disabled={isLoading}
                />
              </label>
              <label className="field">
                <span className="field__label">E-Mail</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  spellCheck={false}
                  placeholder="mail@beispiel.de"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  maxLength={254}
                  disabled={isLoading}
                />
              </label>
            </div>

            <label className="field">
              <span className="field__label">Betreff</span>
              <input
                name="subject"
                autoComplete="off"
                placeholder="Ihr Anliegen"
                value={betreff}
                onChange={e => setBetreff(e.target.value)}
                required
                maxLength={200}
                disabled={isLoading}
              />
            </label>

            <label className="field">
              <span className="field__label">Nachricht</span>
              <textarea
                name="message"
                autoComplete="off"
                placeholder="Beschreiben Sie Ihr Projekt..."
                value={nachricht}
                onChange={e => setNachricht(e.target.value)}
                required
                minLength={20}
                maxLength={5000}
                rows={6}
                disabled={isLoading}
                aria-describedby="nachricht-hint"
              />
              <span className="field__hint" id="nachricht-hint">Mindestens 20 Zeichen</span>
            </label>

            {feedback ? (
              <p className={`form-alert form-alert--${status === 'success' ? 'success' : 'error'}`} role={status === 'success' ? 'status' : 'alert'}>
                {feedback}
              </p>
            ) : null}

            <p className="contact-form__legal">
              Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben zur Beantwortung Ihrer Anfrage zu.{' '}
              <Link to="/datenschutz">Hinweise zum Datenschutz</Link>
            </p>

            <button type="submit" className="btn btn--primary btn--block btn--lg" disabled={isLoading} aria-busy={isLoading}>
              {isLoading ? <span className="spinner" aria-hidden="true" /> : null}
              {isLoading ? 'Wird gesendet...' : 'Nachricht senden'}
            </button>
          </form>
        </div>
      </div>
    </Section>
  )
}
