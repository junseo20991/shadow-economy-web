import { linkifyText } from './LinkedText'

export type PolicyBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'h3'; text: string }

export function PolicyBlocks({ blocks }: { blocks: PolicyBlock[] }) {
  return (
    <div className="space-y-4 break-words text-sm leading-6 text-gray-400 [overflow-wrap:anywhere] sm:leading-relaxed">
      {blocks.map((block, i) => {
        if (block.type === 'p') {
          return <p key={i}>{linkifyText(block.text)}</p>
        }
        if (block.type === 'h3') {
          return (
            <h3 key={i} className="pt-1 font-semibold text-white">
              {linkifyText(block.text)}
            </h3>
          )
        }
        return (
          <ul key={i} className="list-disc space-y-1.5 pl-5">
            {block.items.map((item) => (
              <li key={item}>{linkifyText(item)}</li>
            ))}
          </ul>
        )
      })}
    </div>
  )
}
