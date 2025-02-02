import { useEffect } from 'react'
import { useState } from 'react'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { COMMAND_PRIORITY_CRITICAL, SELECTION_CHANGE_COMMAND } from 'lexical'

import { Separator } from '@/registry/default/ui/separator'
import { ToolbarContext } from '@/registry/default/editor/context/toolbar-context'

import { useEditorModal } from '@/registry/default/editor/editor-hooks/use-modal'

import { BlockFormatDropDown } from '@/registry/default/editor/plugins/toolbar/block-format-toolbar-plugin'
import { FormatBulletedList } from '@/registry/default/editor/plugins/toolbar/block-format/format-bulleted-list'
import { FormatCheckList } from '@/registry/default/editor/plugins/toolbar/block-format/format-check-list'
import { FormatCodeBlock } from '@/registry/default/editor/plugins/toolbar/block-format/format-code-block'
import { FormatHeading } from '@/registry/default/editor/plugins/toolbar/block-format/format-heading'
import { FormatNumberedList } from '@/registry/default/editor/plugins/toolbar/block-format/format-numbered-list'
import { FormatParagraph } from '@/registry/default/editor/plugins/toolbar/block-format/format-paragraph'
import { FormatQuote } from '@/registry/default/editor/plugins/toolbar/block-format/format-quote'
import { BlockInsertPlugin } from '@/registry/default/editor/plugins/toolbar/block-insert-plugin'
import { InsertCollapsibleContainer } from '@/registry/default/editor/plugins/toolbar/block-insert/insert-collapsible-container'
import { InsertColumnsLayout } from '@/registry/default/editor/plugins/toolbar/block-insert/insert-columns-layout'
import { InsertEmbeds } from '@/registry/default/editor/plugins/toolbar/block-insert/insert-embeds'
import { InsertExcalidraw } from '@/registry/default/editor/plugins/toolbar/block-insert/insert-excalidraw'
import { InsertHorizontalRule } from '@/registry/default/editor/plugins/toolbar/block-insert/insert-horizontal-rule'
import { InsertImage } from '@/registry/default/editor/plugins/toolbar/block-insert/insert-image'
import { InsertInlineImage } from '@/registry/default/editor/plugins/toolbar/block-insert/insert-inline-image'
import { InsertPageBreak } from '@/registry/default/editor/plugins/toolbar/block-insert/insert-page-break'
import { InsertPoll } from '@/registry/default/editor/plugins/toolbar/block-insert/insert-poll'
import { InsertTable } from '@/registry/default/editor/plugins/toolbar/block-insert/insert-table'
import { ClearFormattingToolbarPlugin } from '@/registry/default/editor/plugins/toolbar/clear-formatting-toolbar-plugin'
import { CodeLanguageToolbarPlugin } from '@/registry/default/editor/plugins/toolbar/code-language-toolbar-plugin'
import { ElementFormatToolbarPlugin } from '@/registry/default/editor/plugins/toolbar/element-format-toolbar-plugin'
import { FontBackgroundToolbarPlugin } from './font-background-toolbar-plugin'
import { FontColorToolbarPlugin } from '@/registry/default/editor/plugins/toolbar/font-color-toolbar-plugin'
import { FontFamilyToolbarPlugin } from '@/registry/default/editor/plugins/toolbar/font-family-toolbar-plugin'
import { FontFormatToolbarPlugin } from '@/registry/default/editor/plugins/toolbar/font-format-toolbar-plugin'
import { FontSizeToolbarPlugin } from '@/registry/default/editor/plugins/toolbar/font-size-toolbar-plugin'
import { HistoryToolbarPlugin } from '@/registry/default/editor/plugins/toolbar/history-toolbar-plugin'
import { LinkToolbarPlugin } from '@/registry/default/editor/plugins/toolbar/link-toolbar-plugin'
import { SubSuperToolbarPlugin } from '@/registry/default/editor/plugins/toolbar/subsuper-toolbar-plugin'

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
