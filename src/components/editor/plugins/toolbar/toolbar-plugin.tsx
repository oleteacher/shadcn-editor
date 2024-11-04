import { useEffect } from 'react'
import { useState } from 'react'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { COMMAND_PRIORITY_CRITICAL, SELECTION_CHANGE_COMMAND } from 'lexical'

import { Separator } from '@/components/ui/separator'

import { ToolbarContext } from '../../context/toolbar-context'
import { BlockFormatDropDown } from './block-format-toolbar-plugin'
import { BlockInsertPlugin } from './block-insert-plugin'
import { ClearFormattingToolbarPlugin } from './clear-formatting-toolbar-plugin'
import { CodeLanguageToolbarPlugin } from './code-language-toolbar-plugin'
import { ElementFormatToolbarPlugin } from './element-format-toolbar-plugin'
import { FontBackgroundToolbarPlugin } from './font-background-toolbar-plugin'
import { FontColorToolbarPlugin } from './font-color-toolbar-plugin'
import { FontFamilyToolbarPlugin } from './font-family-toolbar-plugin'
import { FontFormatToolbarPlugin } from './font-format-toolbar-plugin'
import { FontSizeToolbarPlugin } from './font-size-toolbar-plugin'
import { HistoryToolbarPlugin } from './history-toolbar-plugin'
import { LinkToolbarPlugin } from './link-toolbar-plugin'
import { SubSuperToolbarPlugin } from './subsuper-toolbar-plugin'

export function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext()

  const [activeEditor, setActiveEditor] = useState(editor)
  const [blockType, setBlockType] = useState<string>('paragraph')

  const $updateToolbar = () => {}

  useEffect(() => {
    return activeEditor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        setActiveEditor(newEditor)
        return false
      },
      COMMAND_PRIORITY_CRITICAL
    )
  }, [editor])

  return (
    <ToolbarContext
      activeEditor={activeEditor}
      $updateToolbar={$updateToolbar}
      blockType={blockType}
      setBlockType={setBlockType}
    >
      <div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b bg-white p-1">
        <HistoryToolbarPlugin />
        <Separator orientation="vertical" className="h-8" />
        <BlockFormatDropDown />
        {blockType === 'code' ? (
          <CodeLanguageToolbarPlugin />
        ) : (
          <>
            <FontFamilyToolbarPlugin />
            <FontSizeToolbarPlugin />
            <Separator orientation="vertical" className="h-8" />
            <FontFormatToolbarPlugin format="bold" />
            <FontFormatToolbarPlugin format="italic" />
            <FontFormatToolbarPlugin format="underline" />
            <FontFormatToolbarPlugin format="strikethrough" />
            <Separator orientation="vertical" className="h-8" />
            <SubSuperToolbarPlugin />
            <LinkToolbarPlugin />
            <Separator orientation="vertical" className="h-8" />
            <ClearFormattingToolbarPlugin />
            <Separator orientation="vertical" className="h-8" />
            <FontColorToolbarPlugin />
            <FontBackgroundToolbarPlugin />
            <Separator orientation="vertical" className="h-8" />
            <ElementFormatToolbarPlugin />
            <Separator orientation="vertical" className="h-8" />
            <BlockInsertPlugin />
          </>
        )}
      </div>
    </ToolbarContext>
  )
}
