import { useEffect, useRef, useState } from 'react'
import { LANGUAGES, type Lang } from '../context/LanguageContext'
import { GlobeMark } from './GlobeMark'

type LanguagePickerProps = {
  lang: Lang
  onChange: (lang: Lang) => void
  label: string
  className?: string
}

export function LanguagePicker({ lang, onChange, label, className = '' }: LanguagePickerProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className={`relative ${className}`.trim()}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={label}
        className="inline-flex h-8 max-w-[8.5rem] items-center gap-1 rounded-lg border border-gray-700 bg-gray-900 px-1.5 text-[10px] text-gray-300 transition-colors hover:border-gray-600 hover:bg-gray-800 sm:max-w-[10rem] sm:gap-1.5 sm:px-2 sm:text-xs xl:max-w-none"
      >
        <GlobeMark className="shrink-0 text-sm text-gray-400" />
        <span className="truncate sm:whitespace-nowrap">{label}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`shrink-0 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute end-0 z-50 mt-1.5 max-h-72 min-w-[12.5rem] overflow-y-auto rounded-xl border border-gray-700 bg-gray-950 py-1 shadow-2xl ring-1 ring-black/40"
        >
          {LANGUAGES.map((entry) => {
            const selected = entry.code === lang
            return (
              <li key={entry.code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(entry.code)
                    setOpen(false)
                  }}
                  className={`w-full px-3 py-2.5 text-left text-sm transition-colors ${
                    selected
                      ? 'bg-amber-500/15 font-medium text-amber-300'
                      : 'text-gray-200 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {entry.label}
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
