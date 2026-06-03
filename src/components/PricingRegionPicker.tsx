import { useEffect, useRef } from 'react'
import type { Lang } from '../context/LanguageContext'
import {
  PRICING_REGIONS,
  formatPackPrice,
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
  onClose: () => void
  onSelect: (id: PricingRegionId) => void
}

export function PricingRegionPicker({
  open,
  lang,
  selectedId,
  title,
  closeLabel,
  onClose,
  onSelect,
}: PricingRegionPickerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const sorted = sortRegionsForLang(lang, PRICING_REGIONS)

  return (
    <dialog
      ref={dialogRef}
      className="max-w-lg w-[calc(100%-2rem)] rounded-2xl border border-gray-700 bg-gray-950 p-0 text-white shadow-2xl backdrop:bg-black/70 open:flex open:flex-col"
      onClose={onClose}
    >
      <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:bg-gray-800 hover:text-white"
        >
          {closeLabel}
        </button>
      </div>
      <ul className="max-h-[min(70vh,28rem)] overflow-y-auto p-2" role="listbox">
        {sorted.map((region) => (
          <RegionRow
            key={region.id}
            region={region}
            lang={lang}
            selected={region.id === selectedId}
            onSelect={() => {
              onSelect(region.id)
              onClose()
            }}
          />
        ))}
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
  const sample = formatPackPrice(region, 'starter')

  return (
    <li>
      <button
        type="button"
        role="option"
        aria-selected={selected}
        onClick={onSelect}
        className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-sm transition-colors ${
          selected
            ? 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/40'
            : 'text-gray-200 hover:bg-gray-900'
        }`}
      >
        <span className="font-medium">{name}</span>
        <span className="shrink-0 text-xs text-gray-500">{sample}+</span>
      </button>
    </li>
  )
}
