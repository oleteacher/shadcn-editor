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

import { CharacterLimitPlugin } from '@/registry/new-york/editor/plugins/actions/character-limit-plugin'
import { ClearEditorActionPlugin } from '@/registry/new-york/editor/plugins/actions/clear-editor-plugin'
import { EditModeTogglePlugin } from '@/registry/new-york/editor/plugins/actions/edit-mode-toggle-plugin'
import { ImportExportPlugin } from '@/registry/new-york/editor/plugins/actions/import-export-plugin'
import { MarkdownTogglePlugin } from '@/registry/new-york/editor/plugins/actions/markdown-toggle-plugin'
import { MaxLengthPlugin } from '@/registry/new-york/editor/plugins/actions/max-length-plugin'
import { ShareContentPlugin } from '@/registry/new-york/editor/plugins/actions/share-content-plugin'
import { SpeechToTextPlugin } from '@/registry/new-york/editor/plugins/actions/speech-to-text-plugin'
import { TreeViewPlugin } from '@/registry/new-york/editor/plugins/actions/tree-view-plugin'
import { AutoLinkPlugin } from '@/registry/new-york/editor/plugins/auto-link-plugin'
import { AutocompletePlugin } from '@/registry/new-york/editor/plugins/autocomplete-plugin'
import { CodeActionMenuPlugin } from '@/registry/new-york/editor/plugins/code-action-menu-plugin'
import { CodeHighlightPlugin } from '@/registry/new-york/editor/plugins/code-highlight-plugin'
import { CollapsiblePlugin } from '@/registry/new-york/editor/plugins/collapsible-plugin'
import { ComponentPickerMenuPlugin } from '@/registry/new-york/editor/plugins/component-picker-plugin'
import { ContextMenuPlugin } from '@/registry/new-york/editor/plugins/context-menu-plugin'
import { DragDropPastePlugin } from '@/registry/new-york/editor/plugins/drag-drop-paste-plugin'
import { DraggableBlockPlugin } from '@/registry/new-york/editor/plugins/draggable-block-plugin'
import { AutoEmbedPlugin } from '@/registry/new-york/editor/plugins/embeds/auto-embed-plugin'
import { FigmaPlugin } from '@/registry/new-york/editor/plugins/embeds/figma-plugin'
import { TwitterPlugin } from '@/registry/new-york/editor/plugins/embeds/twitter-plugin'
import { YouTubePlugin } from '@/registry/new-york/editor/plugins/embeds/youtube-plugin'
import { EmojiPickerPlugin } from '@/registry/new-york/editor/plugins/emoji-picker-plugin'
import { EmojisPlugin } from '@/registry/new-york/editor/plugins/emojis-plugin'
import { EquationsPlugin } from '@/registry/new-york/editor/plugins/equations-plugin'
import { ExcalidrawPlugin } from '@/registry/new-york/editor/plugins/excalidraw-plugin'
import { FloatingLinkEditorPlugin } from '@/registry/new-york/editor/plugins/floating-link-editor-plugin'
import { FloatingTextFormatToolbarPlugin } from '@/registry/new-york/editor/plugins/floating-text-format-toolbar-plugin'
import { ImagesPlugin } from '@/registry/new-york/editor/plugins/images-plugin'
import { InlineImagePlugin } from '@/registry/new-york/editor/plugins/inline-image-plugin'
import { KeywordsPlugin } from '@/registry/new-york/editor/plugins/keywords-plugin'
import { LayoutPlugin } from '@/registry/new-york/editor/plugins/layout-plugin'
import { LinkPlugin } from '@/registry/new-york/editor/plugins/link-plugin'
import { ListMaxIndentLevelPlugin } from '@/registry/new-york/editor/plugins/list-max-indent-level-plugin'
import { MentionsPlugin } from '@/registry/new-york/editor/plugins/mentions-plugin'
import { PageBreakPlugin } from '@/registry/new-york/editor/plugins/page-break-plugin'
import { PollPlugin } from '@/registry/new-york/editor/plugins/poll-plugin'
import { TabFocusPlugin } from '@/registry/new-york/editor/plugins/tab-focus-plugin'
import { TableActionMenuPlugin } from '@/registry/new-york/editor/plugins/table-action-menu-plugin'
import { TableCellResizerPlugin } from '@/registry/new-york/editor/plugins/table-cell-resizer-plugin'
import { TableHoverActionsPlugin } from '@/registry/new-york/editor/plugins/table-hover-actions-plugin'
import { ToolbarPlugin } from '@/registry/new-york/editor/plugins/toolbar/toolbar-plugin'
import { TypingPerfPlugin } from '@/registry/new-york/editor/plugins/typing-pref-plugin'
import { MARKDOWN_TRANSFORMERS } from '@/registry/new-york/editor/transformers/markdown-transformers'
import { ContentEditable } from '@/registry/new-york/editor/editor-ui/content-editable'

const placeholder = 'Press / for commands...'
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
