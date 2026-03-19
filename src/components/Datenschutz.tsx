import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Datenschutz() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
    <Helmet>
      <title>Datenschutzerklärung – Arkvyn | Tim Tolk</title>
      <meta name="description" content="Datenschutzerklärung von Arkvyn – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO." />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href="https://arkvyn.de/datenschutz" />
    </Helmet>
    <div className="legal-page">
      <div className="legal-page__inner">
        <h1>Datenschutzerklärung</h1>

        <section className="legal-section">
          <h2>1. Datenschutz auf einen Blick</h2>

          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden
            können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter
            diesem Text aufgeführten Datenschutzerklärung.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
          </p>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
            Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser
            Datenschutzerklärung entnehmen.
          </p>

          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong>
          </p>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
            es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
            durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
            Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>

          <p>
            <strong>Wofür nutzen wir Ihre Daten?</strong>
          </p>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
            gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            Daten, die Sie über das Kontaktformular übermitteln, werden ausschließlich zur
            Bearbeitung Ihrer Anfrage genutzt.
          </p>

          <p>
            <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
          </p>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
            Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
            Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
            Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
            jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
            Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Hosting</h2>
          <p>
            Diese Website wird auf Servern der Hetzner Online GmbH, Industriestr. 25, 91710
            Gunzenhausen, Deutschland gehostet. Die personenbezogenen Daten, die auf dieser Website
            erfasst werden, werden auf den Servern von Hetzner gespeichert. Hierbei kann es sich
            v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
            Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website
            generiert werden, handeln.
          </p>
          <p>
            Der Einsatz von Hetzner erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
            potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer
            sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen
            professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Mit Hetzner wurde ein
            Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO geschlossen. Die
            Datenschutzerklärung von Hetzner finden Sie unter:{' '}
            <a href="https://www.hetzner.com/de/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              https://www.hetzner.com/de/legal/privacy-policy
            </a>
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <address>
            <p>Tim Tolk</p>
            <p>Arkvyn – Softwareentwicklung</p>
            <p>Krummer Weg 30</p>
            <p>23569 Lübeck</p>
            <p>Telefon: +49 (0) 176 46143387</p>
            <p>E-Mail: <a href="mailto:arkvyn.solutions@proton.me">arkvyn.solutions@proton.me</a></p>
          </address>

          <h3>Speicherdauer</h3>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
            wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
            Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder
            eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
            wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
            personenbezogenen Daten haben.
          </p>

          <h3>SSL- bzw. TLS-Verschlüsselung</h3>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
            Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
            daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an
            dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Datenerfassung auf dieser Website</h2>

          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
            wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
            sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
            Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
            gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
          </p>
          <p>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
            Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
            Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende
            gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
          </p>

          <h3>E-Mail-Versand über Google (Gmail)</h3>
          <p>
            Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben (Name, E-Mail-Adresse, Betreff
            und Nachricht) über den SMTP-Dienst von Google Ireland Limited, Gordon House, Barrow
            Street, Dublin 4, Irland übermittelt und an uns weitergeleitet. Google verarbeitet diese
            Daten dabei als Auftragsverarbeiter. Die Nutzung erfolgt auf Grundlage unseres
            berechtigten Interesses an einer zuverlässigen E-Mail-Zustellung (Art. 6 Abs. 1 lit. f
            DSGVO). Ihre Daten werden nicht für Werbezwecke durch Google genutzt. Weitere
            Informationen finden Sie in der Datenschutzerklärung von Google:{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              https://policies.google.com/privacy
            </a>
          </p>

          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
            Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
            Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
            Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung
            und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Ihre Rechte</h2>
          <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
          <ul>
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <p>
            Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
            Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Zuständige
            Aufsichtsbehörde in Schleswig-Holstein ist das Unabhängige Landeszentrum für Datenschutz
            Schleswig-Holstein (ULD), Holstenstraße 98, 24103 Kiel.
          </p>
        </section>
      </div>
    </div>
    </>
  )
}
