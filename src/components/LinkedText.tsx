import { Fragment, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

const LINK_PATTERN = /([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|(?:https?:\/\/)?(?:www\.)?shadoweconomyapp\.com(?:\/[^\s),.;]*)?)/gi
const TRAILING_PUNCTUATION = /[),.;:!?]+$/
const INTERNAL_ROUTES = new Set(['/privacy', '/terms', '/support', '/account-deletion', '/game', '/report', '/pricing'])
const LOCALIZED_PRIVACY_PATHS = new Set(['/privacidade', '/privasi', '/الخصوصية'])

const linkClassName = 'font-medium text-amber-400 underline decoration-amber-400/50 underline-offset-2 transition-colors hover:text-amber-300 hover:decoration-amber-300'

function splitTrailingPunctuation(value: string) {
  const match = value.match(TRAILING_PUNCTUATION)
  if (!match) return { core: value, trailing: '' }
  return {
    core: value.slice(0, -match[0].length),
    trailing: match[0],
  }
}

function renderLink(rawValue: string, key: string) {
  const { core, trailing } = splitTrailingPunctuation(rawValue)
  let node: ReactNode

  if (core.includes('@')) {
    node = (
      <a className={linkClassName} href={`mailto:${core}`}>
        {core}
      </a>
    )
  } else {
    const normalized = core.startsWith('http') ? new URL(core) : new URL(`https://${core}`)
    const isOwnDomain = normalized.hostname.replace(/^www\./, '') === 'shadoweconomyapp.com'
    let pathname = decodeURIComponent(normalized.pathname)
    if (LOCALIZED_PRIVACY_PATHS.has(pathname)) pathname = '/privacy'

    if (isOwnDomain && INTERNAL_ROUTES.has(pathname)) {
      node = (
        <Link className={linkClassName} to={`${pathname}${normalized.search}${normalized.hash}`}>
          {core}
        </Link>
      )
    } else {
      node = (
        <a className={linkClassName} href={normalized.href} target="_blank" rel="noreferrer">
          {core}
        </a>
      )
    }
  }

  return (
    <Fragment key={key}>
      {node}
      {trailing}
    </Fragment>
  )
}

export function linkifyText(text: string) {
  const parts: ReactNode[] = []
  let lastIndex = 0

  for (const match of text.matchAll(LINK_PATTERN)) {
    const value = match[0]
    const index = match.index ?? 0
    if (index > lastIndex) parts.push(text.slice(lastIndex, index))
    parts.push(renderLink(value, `${index}-${value}`))
    lastIndex = index + value.length
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return parts.length ? parts : text
}
