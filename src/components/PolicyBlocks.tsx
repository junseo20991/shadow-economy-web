export type PolicyBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'h3'; text: string }

export function PolicyBlocks({ blocks }: { blocks: PolicyBlock[] }) {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-gray-400">
      {blocks.map((block, i) => {
        if (block.type === 'p') {
          return <p key={i}>{block.text}</p>
        }
        if (block.type === 'h3') {
          return (
            <h3 key={i} className="text-white font-semibold pt-1">
              {block.text}
            </h3>
          )
        }
        return (
          <ul key={i} className="list-disc list-inside space-y-1.5 pl-1">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )
      })}
    </div>
  )
}
