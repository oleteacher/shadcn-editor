import { useEffect } from 'react'
import { useState } from 'react'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { COMMAND_PRIORITY_CRITICAL, SELECTION_CHANGE_COMMAND } from 'lexical'

import { Separator } from '@/registry/new-york/ui/separator'
import { ToolbarContext } from '@/registry/new-york/editor/context/toolbar-context'

import { useEditorModal } from '@/registry/new-york/editor/editor-hooks/use-modal'

import { BlockFormatDropDown } from '@/registry/new-york/editor/plugins/toolbar/block-format-toolbar-plugin'
import { FormatBulletedList } from '@/registry/new-york/editor/plugins/toolbar/block-format/format-bulleted-list'
import { FormatCheckList } from '@/registry/new-york/editor/plugins/toolbar/block-format/format-check-list'
import { FormatCodeBlock } from '@/registry/new-york/editor/plugins/toolbar/block-format/format-code-block'
import { FormatHeading } from '@/registry/new-york/editor/plugins/toolbar/block-format/format-heading'
import { FormatNumberedList } from '@/registry/new-york/editor/plugins/toolbar/block-format/format-numbered-list'
import { FormatParagraph } from '@/registry/new-york/editor/plugins/toolbar/block-format/format-paragraph'
import { FormatQuote } from '@/registry/new-york/editor/plugins/toolbar/block-format/format-quote'
import { BlockInsertPlugin } from '@/registry/new-york/editor/plugins/toolbar/block-insert-plugin'
import { InsertCollapsibleContainer } from '@/registry/new-york/editor/plugins/toolbar/block-insert/insert-collapsible-container'
import { InsertColumnsLayout } from '@/registry/new-york/editor/plugins/toolbar/block-insert/insert-columns-layout'
import { InsertEmbeds } from '@/registry/new-york/editor/plugins/toolbar/block-insert/insert-embeds'
import { InsertExcalidraw } from '@/registry/new-york/editor/plugins/toolbar/block-insert/insert-excalidraw'
import { InsertHorizontalRule } from '@/registry/new-york/editor/plugins/toolbar/block-insert/insert-horizontal-rule'
import { InsertImage } from '@/registry/new-york/editor/plugins/toolbar/block-insert/insert-image'
import { InsertInlineImage } from '@/registry/new-york/editor/plugins/toolbar/block-insert/insert-inline-image'
import { InsertPageBreak } from '@/registry/new-york/editor/plugins/toolbar/block-insert/insert-page-break'
import { InsertPoll } from '@/registry/new-york/editor/plugins/toolbar/block-insert/insert-poll'
import { InsertTable } from '@/registry/new-york/editor/plugins/toolbar/block-insert/insert-table'
import { ClearFormattingToolbarPlugin } from '@/registry/new-york/editor/plugins/toolbar/clear-formatting-toolbar-plugin'
import { CodeLanguageToolbarPlugin } from '@/registry/new-york/editor/plugins/toolbar/code-language-toolbar-plugin'
import { ElementFormatToolbarPlugin } from '@/registry/new-york/editor/plugins/toolbar/element-format-toolbar-plugin'
import { FontBackgroundToolbarPlugin } from './font-background-toolbar-plugin'
import { FontColorToolbarPlugin } from '@/registry/new-york/editor/plugins/toolbar/font-color-toolbar-plugin'
import { FontFamilyToolbarPlugin } from '@/registry/new-york/editor/plugins/toolbar/font-family-toolbar-plugin'
import { FontFormatToolbarPlugin } from '@/registry/new-york/editor/plugins/toolbar/font-format-toolbar-plugin'
import { FontSizeToolbarPlugin } from '@/registry/new-york/editor/plugins/toolbar/font-size-toolbar-plugin'
import { HistoryToolbarPlugin } from '@/registry/new-york/editor/plugins/toolbar/history-toolbar-plugin'
import { LinkToolbarPlugin } from '@/registry/new-york/editor/plugins/toolbar/link-toolbar-plugin'
import { SubSuperToolbarPlugin } from '@/registry/new-york/editor/plugins/toolbar/subsuper-toolbar-plugin'

export function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext()

  const [activeEditor, setActiveEditor] = useState(editor)
  const [blockType, setBlockType] = useState<string>('paragraph')

  const [modal, showModal] = useEditorModal()

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
      showModal={showModal}
    >
      {modal}
      <div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b p-1">
        <HistoryToolbarPlugin />
        <Separator orientation="vertical" className="h-8" />
        <BlockFormatDropDown>
          <FormatParagraph />
          <FormatHeading levels={['h1', 'h2', 'h3']} />
          <FormatNumberedList />
          <FormatBulletedList />
          <FormatCheckList />
          <FormatCodeBlock />
          <FormatQuote />
        </BlockFormatDropDown>
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
            <BlockInsertPlugin>
              <InsertHorizontalRule />
              <InsertPageBreak />
              <InsertImage />
              <InsertInlineImage />
              <InsertCollapsibleContainer/>
              <InsertExcalidraw />
              <InsertTable />
              <InsertPoll />
              <InsertColumnsLayout />
              <InsertEmbeds />
            </BlockInsertPlugin>
          </>
        )}
      </div>
    </ToolbarContext>
  )
}
