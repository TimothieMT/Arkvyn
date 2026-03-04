import { useState, type FormEvent } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Kontakt() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [betreff, setBetreff] = useState('');
  const [nachricht, setNachricht] = useState('');
  const [status, setStatus] = useState<FormState>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, betreff, message: nachricht }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFeedback('Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald!');
        setName('');
        setEmail('');
        setBetreff('');
        setNachricht('');
      } else {
        setStatus('error');
        setFeedback(data.message || 'Fehler beim Senden. Bitte versuchen Sie es erneut.');
      }
    } catch {
      setStatus('error');
      setFeedback('Server nicht erreichbar. Bitte versuchen Sie es später erneut.');
    }
  };

  return (
    <section id="kontakt" className="section section--kontakt" aria-label="Kontakt aufnehmen">
      <div className="grid grid--2">
        <div className="kontakt__info">
          <h2>Kontakt <span className="accent">aufnehmen</span></h2>
          <p>
            Sie haben ein Projekt im Kopf oder möchten mehr über meine
            Leistungen erfahren? Schreiben Sie mir und ich melde mich innerhalb
            von 24 Stunden.
          </p>
          <div className="kontakt__details">
            <div className="kontakt__detail">
              <span className="kontakt__icon">📞</span>
              <div>
                <strong>Telefon</strong>
                <p>0176 46143387</p>
              </div>
            </div>
            <div className="kontakt__detail">
              <span className="kontakt__icon">✉️</span>
              <div>
                <strong>E-Mail</strong>
                <p>info@arkvyn.de</p>
              </div>
            </div>
          </div>
        </div>
        <div className="kontakt__form-wrap">
          <form className="kontakt__form" onSubmit={handleSubmit}>
            <div className="form__row form__row--2">
              <div className="form__group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Max Mustermann"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div className="form__group">
                <label htmlFor="email">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="max@beispiel.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === 'loading'}
                />
              </div>
            </div>
            <div className="form__group">
              <label htmlFor="betreff">Betreff</label>
              <input
                type="text"
                id="betreff"
                placeholder="Ihr Anliegen"
                value={betreff}
                onChange={(e) => setBetreff(e.target.value)}
                required
                disabled={status === 'loading'}
              />
            </div>
            <div className="form__group">
              <label htmlFor="nachricht">Nachricht</label>
              <textarea
                id="nachricht"
                rows={5}
                placeholder="Beschreiben Sie Ihr Projekt…"
                value={nachricht}
                onChange={(e) => setNachricht(e.target.value)}
                required
                disabled={status === 'loading'}
              />
            </div>

            {feedback && (
              <p className={`form__feedback form__feedback--${status}`}>
                {feedback}
              </p>
            )}

            <button
              type="submit"
              className="btn btn--primary btn--full"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Wird gesendet…' : 'Nachricht senden →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
