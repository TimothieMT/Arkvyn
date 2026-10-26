import { useState } from 'react'
import Section from './ui/Section'
import { faqs } from '../faqData'

// Das FAQPage-Schema wird in App.tsx direkt aus diesen sichtbaren Inhalten erzeugt.

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" surface="grey" aria-labelledby="faq-heading">
      <div className="split">
        <header className="split__side">
          <p className="eyebrow" data-reveal="fade">FAQ</p>
          <h2 id="faq-heading" data-reveal="blur">Häufige Fragen</h2>
          <p className="split__lead" data-reveal="fade">
            Antworten auf die häufigsten Fragen zu Webentwicklung, Preisen und Zusammenarbeit.
          </p>
        </header>

        <div className="split__main faq">
          {faqs.map((faq, i) => {
            const open = openIndex === i
            const id = `faq-${i}`
            return (
              <div key={faq.q} className="faq__item" data-open={open || undefined} data-reveal="lift">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`${id}-panel`}
                    id={`${id}-button`}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    {faq.q}
                    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none">
                      <path d="m7 10 5 5 5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </h3>
                {/* Antworten bleiben im DOM (auch prerendered), werden nur visuell eingeklappt. */}
                <div id={`${id}-panel`} role="region" aria-labelledby={`${id}-button`} className="faq__panel" inert={!open}>
                  <div>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
