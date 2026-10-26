import type { ComponentProps } from 'react'

export type Surface = 'light' | 'grey' | 'dark' | 'deep'

// Vollflächige Sektion mit eigener Farbfläche; der Inhalt bleibt in .container.
// data-surface steuert u. a. die Farbe der schwebenden Navigation.
export default function Section({
  surface = 'light',
  className = '',
  children,
  ...props
}: ComponentProps<'section'> & { surface?: Surface }) {
  return (
    <section {...props} data-surface={surface} className={`section surface--${surface} ${className}`}>
      <div className="container">{children}</div>
    </section>
  )
}
