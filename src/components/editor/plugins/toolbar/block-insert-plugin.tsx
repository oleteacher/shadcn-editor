import { INSERT_EMBED_COMMAND } from '@lexical/react/LexicalAutoEmbedPlugin'
import { INSERT_HORIZONTAL_RULE_COMMAND } from '@lexical/react/LexicalHorizontalRuleNode'
import {
  ChevronRightIcon,
  Columns3Icon,
  DiffIcon,
  FileImageIcon,
  FrameIcon,
  ImageIcon,
  ListCheckIcon,
  PlusIcon,
  ScissorsIcon,
  SquareSplitVerticalIcon,
  TableIcon,
} from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'

import { useToolbarContext } from '../../context/toolbar-context'
import { useModal } from '../../hooks/use-modal'
import { INSERT_COLLAPSIBLE_COMMAND } from '../collapsible-plugin'
import { EmbedConfigs } from '../embeds/auto-embed-plugin'
import { InsertEquationDialog } from '../equations-plugin'
import { INSERT_EXCALIDRAW_COMMAND } from '../excalidraw-plugin'
import { InsertImageDialog } from '../images-plugin'
import { InsertInlineImageDialog } from '../inline-image-plugin'
import { InsertLayoutDialog } from '../layout-plugin'
import { INSERT_PAGE_BREAK } from '../page-break-plugin'
import { InsertPollDialog } from '../poll-plugin'
import { InsertTableDialog } from '../table-plugin'

export function BlockInsertPlugin() {
  const { activeEditor } = useToolbarContext()
  const [modal, showModal] = useModal()

  return (
    <>
      {modal}
      <Select value={''}>
        <SelectTrigger className="h-8 w-min gap-1">
          <PlusIcon className="size-4" />
          <span>Insert</span>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              value="horizontal-rule"
              onPointerUp={() =>
                activeEditor.dispatchCommand(
                  INSERT_HORIZONTAL_RULE_COMMAND,
                  undefined
                )
              }
              className=""
            >
              <div className="flex items-center gap-1">
                <ScissorsIcon className="size-4" />
                <span>Horizontal Rule</span>
              </div>
            </SelectItem>

            <SelectItem
              value="page-break"
              onPointerUp={() =>
                activeEditor.dispatchCommand(INSERT_PAGE_BREAK, undefined)
              }
              className=""
            >
              <div className="flex items-center gap-1">
                <SquareSplitVerticalIcon className="size-4" />
                <span>Page Break</span>
              </div>
            </SelectItem>

            <SelectItem
              value="image"
              onPointerUp={(e) => {
                showModal('Insert Image', (onClose) => (
                  <InsertImageDialog
                    activeEditor={activeEditor}
                    onClose={onClose}
                  />
                ))
              }}
              className=""
            >
              <div className="flex items-center gap-1">
                <ImageIcon className="size-4" />
                <span>Image</span>
              </div>
            </SelectItem>

            <SelectItem
              value="inline-image"
              onPointerUp={() =>
                showModal('Insert Inline Image', (onClose) => (
                  <InsertInlineImageDialog
                    activeEditor={activeEditor}
                    onClose={onClose}
                  />
                ))
              }
              className=""
            >
              <div className="flex items-center gap-1">
                <FileImageIcon className="size-4" />
                <span>Inline Image</span>
              </div>
            </SelectItem>

            <SelectItem
              value="excalidraw"
              onPointerUp={() =>
                activeEditor.dispatchCommand(
                  INSERT_EXCALIDRAW_COMMAND,
                  undefined
                )
              }
              className=""
            >
              <div className="flex items-center gap-1">
                <FrameIcon className="size-4" />
                <span>Excalidraw</span>
              </div>
            </SelectItem>

            <SelectItem
              value="table"
              onPointerUp={() =>
                showModal('Insert Table', (onClose) => (
                  <InsertTableDialog
                    activeEditor={activeEditor}
                    onClose={onClose}
                  />
                ))
              }
              className=""
            >
              <div className="flex items-center gap-1">
                <TableIcon className="size-4" />
                <span>Table</span>
              </div>
            </SelectItem>

            <SelectItem
              value="poll"
              onPointerUp={() =>
                showModal('Insert Poll', (onClose) => (
                  <InsertPollDialog
                    activeEditor={activeEditor}
                    onClose={onClose}
                  />
                ))
              }
              className=""
            >
              <div className="flex items-center gap-1">
                <ListCheckIcon className="size-4" />
                <span>Poll</span>
              </div>
            </SelectItem>

            <SelectItem
              value="columns"
              onPointerUp={() =>
                showModal('Insert Columns Layout', (onClose) => (
                  <InsertLayoutDialog
                    activeEditor={activeEditor}
                    onClose={onClose}
                  />
                ))
              }
              className=""
            >
              <div className="flex items-center gap-1">
                <Columns3Icon className="size-4" />
                <span>Columns Layout</span>
              </div>
            </SelectItem>

            <SelectItem
              value="equation"
              onPointerUp={() =>
                showModal('Insert Equation', (onClose) => (
                  <InsertEquationDialog
                    activeEditor={activeEditor}
                    onClose={onClose}
                  />
                ))
              }
              className=""
            >
              <div className="flex items-center gap-1">
                <DiffIcon className="size-4" />
                <span>Equation</span>
              </div>
            </SelectItem>

            <SelectItem
              value="collapsible"
              onPointerUp={() =>
                activeEditor.dispatchCommand(
                  INSERT_COLLAPSIBLE_COMMAND,
                  undefined
                )
              }
              className=""
            >
              <div className="flex items-center gap-1">
                <ChevronRightIcon className="size-4" />
                <span>Collapsible container</span>
              </div>
            </SelectItem>

            {EmbedConfigs.map((embedConfig) => (
              <SelectItem
                key={embedConfig.type}
                value={embedConfig.type}
                onPointerUp={() => {
                  activeEditor.dispatchCommand(
                    INSERT_EMBED_COMMAND,
                    embedConfig.type
                  )
                }}
                className=""
              >
                <div className="flex items-center gap-1">
                  {embedConfig.icon}
                  <span>{embedConfig.contentName}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}
