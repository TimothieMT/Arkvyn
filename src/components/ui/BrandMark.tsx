import type { ComponentProps } from 'react'

// Bildmarke „</>“ aus dem Arkvyn-Logo, in currentColor gezeichnet.
export default function BrandMark(props: ComponentProps<'svg'>) {
  return (
    <svg aria-hidden="true" width="34" height="24" viewBox="0 0 34 24" fill="none" {...props}>
      <path d="M10 5 3 12l7 7M24 5l7 7-7 7M19.5 3l-5 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
