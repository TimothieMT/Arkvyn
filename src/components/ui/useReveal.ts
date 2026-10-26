import { useEffect } from 'react'

// Scroll-Reveals nach dem Vorbild des Templates: Elemente tragen nur
// data-reveal="lift|fade|blur|clip", der Rest passiert hier zentral.
// Ohne JavaScript, beim Prerendern (Puppeteer) und bei reduzierter Bewegung
// bleibt der Inhalt ganz normal sichtbar.

type Variant = 'lift' | 'fade' | 'blur' | 'clip'

const presets: Record<Variant, { from: Keyframe; to: Keyframe; duration: number }> = {
  lift: { from: { opacity: 0, translate: '0 32px' }, to: { opacity: 1, translate: '0 0' }, duration: 1000 },
  fade: { from: { opacity: 0 }, to: { opacity: 1 }, duration: 1100 },
  blur: {
    from: { opacity: 0, filter: 'blur(10px)', translate: '0 12px' },
    to: { opacity: 1, filter: 'blur(0px)', translate: '0 0' },
    duration: 900,
  },
  clip: {
    from: { opacity: 0, clipPath: 'inset(calc(50% - 64px) round 8px)', filter: 'blur(10px)' },
    to: { opacity: 1, clipPath: 'inset(0px round 8px)', filter: 'blur(0px)' },
    duration: 1600,
  },
}

const STAGGER = 80
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'

function play(el: HTMLElement, order: number) {
  const variant = (el.dataset.reveal as Variant) in presets ? (el.dataset.reveal as Variant) : 'lift'
  const preset = presets[variant]
  const delay = Number(el.dataset.revealDelay ?? 0) + order * STAGGER
  el.dataset.revealState = 'running'
  const animation = el.animate([preset.from, preset.to], {
    duration: preset.duration,
    delay,
    easing: EASING,
    fill: 'both',
  })
  animation.finished
    .then(() => {
      el.dataset.revealState = 'done'
      animation.cancel()
    })
    .catch(() => {
      el.dataset.revealState = 'done'
    })
}

export function useReveal() {
  useEffect(() => {
    if (navigator.webdriver) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (typeof IntersectionObserver === 'undefined' || !('animate' in Element.prototype)) return

    const observer = new IntersectionObserver(
      entries => {
        let order = 0
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          observer.unobserve(entry.target)
          play(entry.target as HTMLElement, order++)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
    )

    const scan = () => {
      // Auch noch wartende Elemente erfassen: React StrictMode führt den Effect
      // im Dev-Modus doppelt aus und der erste Observer ist dann schon getrennt.
      const fresh = document.querySelectorAll<HTMLElement>(
        '[data-reveal]:not([data-reveal-state]), [data-reveal-state="pending"]',
      )
      let order = 0
      fresh.forEach(el => {
        const rect = el.getBoundingClientRect()
        const inView = rect.top < window.innerHeight && rect.bottom > 0
        if (inView) {
          play(el, order++)
        } else {
          el.dataset.revealState = 'pending'
          observer.observe(el)
        }
      })
    }

    scan()
    // Lazy geladene Routen und Seitenwechsel bringen neue Elemente mit.
    const mutations = new MutationObserver(() => scan())
    const root = document.getElementById('root')
    if (root) mutations.observe(root, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutations.disconnect()
      // Nichts unsichtbar zurücklassen, falls kein neuer Effect folgt
      document.querySelectorAll<HTMLElement>('[data-reveal-state="pending"]').forEach(el => {
        delete el.dataset.revealState
      })
    }
  }, [])
}
