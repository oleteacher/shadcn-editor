import { $createCodeNode } from '@lexical/code'
import {
  $isListNode,
  INSERT_CHECK_LIST_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  ListNode,
} from '@lexical/list'
import {
  $createHeadingNode,
  $createQuoteNode,
  $isHeadingNode,
} from '@lexical/rich-text'
import { HeadingTagType } from '@lexical/rich-text'
import { $setBlocksType } from '@lexical/selection'
import { $findMatchingParent, $getNearestNodeOfType } from '@lexical/utils'
import {
  $createParagraphNode,
  $isRootOrShadowRoot,
  BaseSelection,
  RangeSelection,
} from 'lexical'
import { $getSelection } from 'lexical'
import { $isRangeSelection } from 'lexical'
import { LexicalEditor } from 'lexical'
import {
  CodeIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  ListIcon,
  ListOrderedIcon,
  ListTodoIcon,
  QuoteIcon,
  TextIcon,
} from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'

import { useToolbarContext } from '../../context/toolbar-context'
import { useUpdateToolbarHandler } from '../../hooks/use-update-toolbar'

export function BlockFormatDropDown() {
  const { activeEditor, blockType, setBlockType } = useToolbarContext()

  const formatParagraph = () => {
    activeEditor.update(() => {
      const selection = $getSelection()
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createParagraphNode())
      }
    })
  }

  const formatHeading = (headingSize: HeadingTagType) => {
    if (blockType !== headingSize) {
      activeEditor.update(() => {
        const selection = $getSelection()
        $setBlocksType(selection, () => $createHeadingNode(headingSize))
      })
    }
  }

  const formatBulletList = () => {
    if (blockType !== 'bullet') {
      activeEditor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
    } else {
      formatParagraph()
    }
  }

  const formatCheckList = () => {
    if (blockType !== 'check') {
      activeEditor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined)
    } else {
      formatParagraph()
    }
  }

  const formatNumberedList = () => {
    if (blockType !== 'number') {
      activeEditor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
    } else {
      formatParagraph()
    }
  }

  const formatQuote = () => {
    if (blockType !== 'quote') {
      activeEditor.update(() => {
        const selection = $getSelection()
        $setBlocksType(selection, () => $createQuoteNode())
      })
    }
  }

  const formatCode = () => {
    if (blockType !== 'code') {
      activeEditor.update(() => {
        let selection = $getSelection()

        if (selection !== null) {
          if (selection.isCollapsed()) {
            $setBlocksType(selection, () => $createCodeNode())
          } else {
            const textContent = selection.getTextContent()
            const codeNode = $createCodeNode()
            selection.insertNodes([codeNode])
            selection = $getSelection()
            if ($isRangeSelection(selection)) {
              selection.insertRawText(textContent)
            }
          }
        }
      })
    }
  }

  const blockTypeToBlockName: Record<
    string,
    { label: string; icon: React.ReactNode; handler: () => void }
  > = {
    paragraph: {
      label: 'Normal',
      icon: <TextIcon className="size-4" />,
      handler: formatParagraph,
    },
    h1: {
      label: 'Heading 1',
      icon: <Heading1Icon className="size-4" />,
      handler: () => formatHeading('h1'),
    },
    h2: {
      label: 'Heading 2',
      icon: <Heading2Icon className="size-4" />,
      handler: () => formatHeading('h2'),
    },
    h3: {
      label: 'Heading 3',
      icon: <Heading3Icon className="size-4" />,
      handler: () => formatHeading('h3'),
    },
    number: {
      label: 'Numbered List',
      icon: <ListOrderedIcon className="size-4" />,
      handler: formatNumberedList,
    },
    bullet: {
      label: 'Bulleted List',
      icon: <ListIcon className="size-4" />,
      handler: formatBulletList,
    },
    check: {
      label: 'Check List',
      icon: <ListTodoIcon className="size-4" />,
      handler: formatCheckList,
    },
    code: {
      label: 'Code Block',
      icon: <CodeIcon className="size-4" />,
      handler: formatCode,
    },
    quote: {
      label: 'Quote',
      icon: <QuoteIcon className="size-4" />,
      handler: formatQuote,
    },
  }

  function $updateToolbar(selection: BaseSelection) {
    if ($isRangeSelection(selection)) {
      activeEditor.update(() => {
        const anchorNode = selection.anchor.getNode()
        let element =
          anchorNode.getKey() === 'root'
            ? anchorNode
            : $findMatchingParent(anchorNode, (e) => {
                const parent = e.getParent()
                return parent !== null && $isRootOrShadowRoot(parent)
              })

        if (element === null) {
          element = anchorNode.getTopLevelElementOrThrow()
        }

        const elementKey = element.getKey()
        const elementDOM = activeEditor.getElementByKey(elementKey)

        if (elementDOM !== null) {
          // setSelectedElementKey(elementKey);
          if ($isListNode(element)) {
            const parentList = $getNearestNodeOfType<ListNode>(
              anchorNode,
              ListNode
            )
            const type = parentList
              ? parentList.getListType()
              : element.getListType()
            setBlockType(type)
          } else {
            const type = $isHeadingNode(element)
              ? element.getTag()
              : element.getType()
            if (type in blockTypeToBlockName) {
              setBlockType(type as keyof typeof blockTypeToBlockName)
            }
          }
        }
      })
    }
  }

  useUpdateToolbarHandler($updateToolbar)

  return (
    <Select
      value={blockType}
      onValueChange={(value) => {
        setBlockType(value as keyof typeof blockTypeToBlockName)
      }}
    >
      <SelectTrigger className="h-8 w-min gap-1">
        {blockTypeToBlockName[blockType].icon}
        <span>{blockTypeToBlockName[blockType].label}</span>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.entries(blockTypeToBlockName).map(([key, value]) => (
            <SelectItem
              key={key}
              value={key}
              onPointerDown={() => value.handler()}
            >
              <div className="flex items-center gap-1 font-normal">
                {value.icon}
                {value.label}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
