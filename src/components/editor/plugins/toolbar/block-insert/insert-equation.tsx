import { DiffIcon } from 'lucide-react'

import { useToolbarContext } from '@/components/editor/context/toolbar-context'
import { useModal } from '@/components/editor/hooks/use-modal'
import { SelectItem } from '@/components/ui/select'

import { InsertEquationDialog } from '../../equations-plugin'

export function InsertEquation() {
  const { activeEditor } = useToolbarContext()
  const [modal, showModal] = useModal()

  return (
    <SelectItem
      value="equation"
      onPointerUp={() =>
        showModal('Insert Equation', (onClose) => (
          <InsertEquationDialog activeEditor={activeEditor} onClose={onClose} />
        ))
      }
      className=""
    >
      <div className="flex items-center gap-1">
        <DiffIcon className="size-4" />
        <span>Equation</span>
      </div>
    </SelectItem>
  )
}
