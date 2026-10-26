const stats = [
  { num: '6+', label: 'Jahre Erfahrung' },
  { num: '20+', label: 'Projekte' },
  { num: '12+', label: 'Technologien' },
]

const codeLines = [
  [{ t: 'const ', c: 'kw' }, { t: 'projekt', c: 'id' }, { t: ' = ', c: '' }, { t: 'await ', c: 'kw' }, { t: 'arkvyn', c: 'id' }, { t: '.build({', c: '' }],
  [{ t: '  idee', c: 'id' }, { t: ': ', c: '' }, { t: "'Ihr Vorhaben'", c: 'str' }, { t: ',', c: '' }],
  [{ t: '  stack', c: 'id' }, { t: ': [', c: '' }, { t: "'React'", c: 'str' }, { t: ', ', c: '' }, { t: "'TypeScript'", c: 'str' }, { t: ', ', c: '' }, { t: "'Node.js'", c: 'str' }, { t: '],', c: '' }],
  [{ t: '  standort', c: 'id' }, { t: ': ', c: '' }, { t: "'Lübeck · Hamburg · Kiel · remote'", c: 'str' }, { t: ',', c: '' }],
  [{ t: '})', c: '' }],
  [{ t: '', c: '' }],
  [{ t: 'projekt', c: 'id' }, { t: '.', c: '' }, { t: 'deliver', c: 'fn' }, { t: '()', c: '' }],
]

export default function Home() {
  return (
    <section id="home" data-surface="light" className="hero surface--light" aria-labelledby="home-heading">
      <div className="container hero__grid">
        <div className="hero__visual" data-reveal="clip">
          <div className="hero__window" aria-hidden="true">
            <div className="hero__window-bar">
              <span />
              <span />
              <span />
              <em>projekt.ts</em>
            </div>
            <pre className="hero__code">
              {codeLines.map((line, i) => (
                <code key={i}>
                  <span className="hero__ln">{i + 1}</span>
                  {line.map((tok, j) => (
                    <span key={j} className={tok.c ? `tok-${tok.c}` : undefined}>{tok.t}</span>
                  ))}
                </code>
              ))}
            </pre>
          </div>

          <dl className="hero__stats">
            {stats.map(stat => (
              <div key={stat.num}>
                <dt>{stat.label}</dt>
                <dd>{stat.num}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__copy">
          {/* Ein gemeinsames H1 verbindet Seitenzweck und visuelle Hauptbotschaft. */}
          <h1 id="home-heading" data-reveal="blur" data-reveal-delay="300">
            Think. Build. Deliver.
            <br />
            <span className="text-soft">Webentwickler &amp; Webdesign deutschlandweit.</span>
          </h1>
          <div className="hero__aside">
            <p data-reveal="fade" data-reveal-delay="450">
              Sie haben eine Idee oder ein konkretes Problem? Ich entwickle die
              passende Website oder Anwendung remote in ganz Deutschland oder
              persönlich in Lübeck, Hamburg und Kiel.
            </p>
            <div className="btn-row">
              <a href="#angebot" className="btn btn--ink" data-reveal="lift" data-reveal-delay="550">
                Meine Leistungen
              </a>
              <a href="#kontakt" className="btn btn--ghost" data-reveal="lift" data-reveal-delay="550">
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
