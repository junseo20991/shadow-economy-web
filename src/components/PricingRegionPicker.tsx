import { useEffect, useMemo, useRef, useState } from 'react'
import type { Lang } from '../context/LanguageContext'
import {
  LANG_REGION_PRIORITY,
  PRICING_REGIONS,
  regionDisplayName,
  sortRegionsForLang,
  type PricingRegion,
  type PricingRegionId,
} from '../data/appleStorePricing'

interface PricingRegionPickerProps {
  open: boolean
  lang: Lang
  selectedId: PricingRegionId
  title: string
  closeLabel: string
  searchPlaceholder: string
  onClose: () => void
  onSelect: (id: PricingRegionId) => void
}

export function PricingRegionPicker({
  open,
  lang,
  selectedId,
  title,
  closeLabel,
  searchPlaceholder,
  onClose,
  onSelect,
}: PricingRegionPickerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const handleClose = () => {
    setQuery('')
    onClose()
  }

  const sorted = useMemo(
    () => sortRegionsForLang(lang, PRICING_REGIONS, LANG_REGION_PRIORITY[lang] ?? []),
    [lang],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return sorted
    return sorted.filter((region) => {
      const haystack = [
        regionDisplayName(region, lang),
        region.labelEn,
        ...Object.values(region.localizedNames),
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [sorted, query, lang])

  return (
    <dialog
      ref={dialogRef}
      className="max-w-lg w-[calc(100%-2rem)] rounded-2xl border border-gray-700 bg-gray-950 p-0 text-white shadow-2xl backdrop:bg-black/70 open:flex open:flex-col"
      onClose={handleClose}
    >
      <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button
          type="button"
          onClick={handleClose}
          className="rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:bg-gray-800 hover:text-white"
        >
          {closeLabel}
        </button>
      </div>
      <div className="border-b border-gray-800 px-3 py-2">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/40"
          autoComplete="off"
          spellCheck={false}
        />
      </div>
      <ul className="max-h-[min(70vh,28rem)] overflow-y-auto p-2" role="listbox">
        {filtered.length === 0 ? (
          <li className="px-4 py-6 text-center text-sm text-gray-500">—</li>
        ) : (
          filtered.map((region) => (
            <RegionRow
              key={region.id}
              region={region}
              lang={lang}
              selected={region.id === selectedId}
              onSelect={() => {
                onSelect(region.id as PricingRegionId)
                handleClose()
              }}
            />
          ))
        )}
      </ul>
    </dialog>
  )
}

function RegionRow({
  region,
  lang,
  selected,
  onSelect,
}: {
  region: PricingRegion
  lang: Lang
  selected: boolean
  onSelect: () => void
}) {
  const name = regionDisplayName(region, lang)

  return (
    <li>
      <button
        type="button"
        role="option"
        aria-selected={selected}
        onClick={onSelect}
        className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-sm transition-colors ${
          selected
            ? 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/40'
            : 'text-gray-200 hover:bg-gray-900'
        }`}
      >
        <span className="font-medium">{name}</span>
      </button>
    </li>
  )
}
