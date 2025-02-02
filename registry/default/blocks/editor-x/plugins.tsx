import { useState } from 'react'

import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin'
import { ClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin'
import { ClickableLinkPlugin } from '@lexical/react/LexicalClickableLinkPlugin'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { HorizontalRulePlugin } from '@lexical/react/LexicalHorizontalRulePlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin'
import { TablePlugin } from '@lexical/react/LexicalTablePlugin'

import { CharacterLimitPlugin } from '@/registry/default/editor/plugins/actions/character-limit-plugin'
import { ClearEditorActionPlugin } from '@/registry/default/editor/plugins/actions/clear-editor-plugin'
import { EditModeTogglePlugin } from '@/registry/default/editor/plugins/actions/edit-mode-toggle-plugin'
import { ImportExportPlugin } from '@/registry/default/editor/plugins/actions/import-export-plugin'
import { MarkdownTogglePlugin } from '@/registry/default/editor/plugins/actions/markdown-toggle-plugin'
import { MaxLengthPlugin } from '@/registry/default/editor/plugins/actions/max-length-plugin'
import { ShareContentPlugin } from '@/registry/default/editor/plugins/actions/share-content-plugin'
import { SpeechToTextPlugin } from '@/registry/default/editor/plugins/actions/speech-to-text-plugin'
import { TreeViewPlugin } from '@/registry/default/editor/plugins/actions/tree-view-plugin'
import { AutoLinkPlugin } from '@/registry/default/editor/plugins/auto-link-plugin'
import { AutocompletePlugin } from '@/registry/default/editor/plugins/autocomplete-plugin'
import { CodeActionMenuPlugin } from '@/registry/default/editor/plugins/code-action-menu-plugin'
import { CodeHighlightPlugin } from '@/registry/default/editor/plugins/code-highlight-plugin'
import { CollapsiblePlugin } from '@/registry/default/editor/plugins/collapsible-plugin'
import { ComponentPickerMenuPlugin } from '@/registry/default/editor/plugins/component-picker-plugin'
import { ContextMenuPlugin } from '@/registry/default/editor/plugins/context-menu-plugin'
import { DragDropPastePlugin } from '@/registry/default/editor/plugins/drag-drop-paste-plugin'
import { DraggableBlockPlugin } from '@/registry/default/editor/plugins/draggable-block-plugin'
import { AutoEmbedPlugin } from '@/registry/default/editor/plugins/embeds/auto-embed-plugin'
import { FigmaPlugin } from '@/registry/default/editor/plugins/embeds/figma-plugin'
import { TwitterPlugin } from '@/registry/default/editor/plugins/embeds/twitter-plugin'
import { YouTubePlugin } from '@/registry/default/editor/plugins/embeds/youtube-plugin'
import { EmojiPickerPlugin } from '@/registry/default/editor/plugins/emoji-picker-plugin'
import { EmojisPlugin } from '@/registry/default/editor/plugins/emojis-plugin'
import { EquationsPlugin } from '@/registry/default/editor/plugins/equations-plugin'
import { ExcalidrawPlugin } from '@/registry/default/editor/plugins/excalidraw-plugin'
import { FloatingLinkEditorPlugin } from '@/registry/default/editor/plugins/floating-link-editor-plugin'
import { FloatingTextFormatToolbarPlugin } from '@/registry/default/editor/plugins/floating-text-format-toolbar-plugin'
import { ImagesPlugin } from '@/registry/default/editor/plugins/images-plugin'
import { InlineImagePlugin } from '@/registry/default/editor/plugins/inline-image-plugin'
import { KeywordsPlugin } from '@/registry/default/editor/plugins/keywords-plugin'
import { LayoutPlugin } from '@/registry/default/editor/plugins/layout-plugin'
import { LinkPlugin } from '@/registry/default/editor/plugins/link-plugin'
import { ListMaxIndentLevelPlugin } from '@/registry/default/editor/plugins/list-max-indent-level-plugin'
import { MentionsPlugin } from '@/registry/default/editor/plugins/mentions-plugin'
import { PageBreakPlugin } from '@/registry/default/editor/plugins/page-break-plugin'
import { PollPlugin } from '@/registry/default/editor/plugins/poll-plugin'
import { TabFocusPlugin } from '@/registry/default/editor/plugins/tab-focus-plugin'
import { TableActionMenuPlugin } from '@/registry/default/editor/plugins/table-action-menu-plugin'
import { TableCellResizerPlugin } from '@/registry/default/editor/plugins/table-cell-resizer-plugin'
import { TableHoverActionsPlugin } from '@/registry/default/editor/plugins/table-hover-actions-plugin'
import { ToolbarPlugin } from '@/registry/default/editor/plugins/toolbar/toolbar-plugin'
import { TypingPerfPlugin } from '@/registry/default/editor/plugins/typing-pref-plugin'
import { MARKDOWN_TRANSFORMERS } from '@/registry/default/editor/transformers/markdown-transformers'
import { ContentEditable } from '@/registry/default/editor/editor-ui/content-editable'

export const placeholder = 'Press / for commands...'
const maxLength = 500

export function Plugins({}) {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null)

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  return (
    <div className="relative">
      <ToolbarPlugin />
      <div className="relative">
        <AutoFocusPlugin />
        <RichTextPlugin
          contentEditable={
            <div className="">
              <div className="" ref={onRef}>
                <ContentEditable placeholder={placeholder} className='ContentEditable__root relative block min-h-72 overflow-auto min-h-full px-8 py-4 focus:outline-none h-[843px]'/>
              </div>
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />

        <ClickableLinkPlugin />
        <CheckListPlugin />
        <HorizontalRulePlugin />
        <TablePlugin />
        <ListPlugin />
        <TabIndentationPlugin />
        <HashtagPlugin />
        <HistoryPlugin />

        <MentionsPlugin />
        <PageBreakPlugin />
        <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
        <KeywordsPlugin />
        <EmojisPlugin />
        <ImagesPlugin />
        <InlineImagePlugin />
        <ExcalidrawPlugin />
        <TableCellResizerPlugin />
        <TableHoverActionsPlugin anchorElem={floatingAnchorElem} />
        <TableActionMenuPlugin
          anchorElem={floatingAnchorElem}
          cellMerge={true}
        />
        <PollPlugin />
        <LayoutPlugin />
        <EquationsPlugin />
        <CollapsiblePlugin />

        <AutoEmbedPlugin />
        <FigmaPlugin />
        <TwitterPlugin />
        <YouTubePlugin />

        <CodeHighlightPlugin />
        <CodeActionMenuPlugin anchorElem={floatingAnchorElem} />

        <MarkdownShortcutPlugin transformers={MARKDOWN_TRANSFORMERS} />
        <TypingPerfPlugin />
        <TabFocusPlugin />
        <AutocompletePlugin />
        <AutoLinkPlugin />
        <LinkPlugin />

        <ComponentPickerMenuPlugin />
        <ContextMenuPlugin />
        <DragDropPastePlugin />
        <EmojiPickerPlugin />

        <FloatingLinkEditorPlugin anchorElem={floatingAnchorElem} />
        <FloatingTextFormatToolbarPlugin anchorElem={floatingAnchorElem} />

        <ListMaxIndentLevelPlugin />
      </div>
      <div className="clear-both flex h-10 items-center justify-between border-t p-1">
        <MaxLengthPlugin maxLength={maxLength} />
        <CharacterLimitPlugin maxLength={maxLength} charset="UTF-16" />
        <div className="flex justify-end">
          <SpeechToTextPlugin />
          <ShareContentPlugin />
          <ImportExportPlugin />
          <MarkdownTogglePlugin shouldPreserveNewLinesInMarkdown={true} />
          <EditModeTogglePlugin />
          <>
            <ClearEditorActionPlugin />
            <ClearEditorPlugin />
          </>
          <TreeViewPlugin />
        </div>
      </div>
    </div>
  )
}
