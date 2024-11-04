import { ContentEditable as LexicalContentEditable } from '@lexical/react/LexicalContentEditable'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

type Props = {
  placeholder: string
  className?: string
  placeholderClassName?: string
}

export function ContentEditable({
  placeholder,
  className,
  placeholderClassName,
}: Props): JSX.Element {
  return (
    <ScrollArea className="h-[calc(100vh-9em)]">
      <LexicalContentEditable
        className={
          className ??
          `ContentEditable__root relative block min-h-96 px-8 py-4 focus:outline-none`
        }
        aria-placeholder={placeholder}
        placeholder={
          <div
            className={
              placeholderClassName ??
              `pointer-events-none absolute left-0 top-0 select-none overflow-hidden text-ellipsis px-8 py-[18px] text-muted-foreground`
            }
          >
            {placeholder}
          </div>
        }
      />
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  )
}
