/** Globe marker used for locale / region UI (matches pricing region picker). */
export function GlobeMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-block leading-none ${className}`.trim()} aria-hidden>
      🌐
    </span>
  )
}
