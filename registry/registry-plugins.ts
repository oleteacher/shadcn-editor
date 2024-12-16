import { Registry } from "./schema";

export const plugin: Registry = [
  {
    name: 'rich-text-plugin',
    type: 'registry:component',
    dependencies: ['@lexical/rich-text'],
    files: [
      {
        path: 'components/editor/ui/content-editable.tsx',
        target: 'components/editor/ui/content-editable.tsx',
        type: 'registry:ui',
      }
    ]
  },
  {
    name: 'actions-plugin',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'scroll-area', 'tooltip'],
    files: [
      {
        path: 'components/editor/plugins/actions/actions-plugin.tsx',
        target: 'components/editor/plugins/actions/actions-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/character-limit-plugin.tsx',
        target: 'components/editor/plugins/actions/character-limit-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/clear-editor-plugin.tsx',
        target: 'components/editor/plugins/actions/clear-editor-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/edit-mode-toggle-plugin.tsx',
        target: 'components/editor/plugins/actions/edit-mode-toggle-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/import-export-plugin.tsx',
        target: 'components/editor/plugins/actions/import-export-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/markdown-toggle-plugin.tsx',
        target: 'components/editor/plugins/actions/markdown-toggle-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/max-length-plugin.tsx',
        target: 'components/editor/plugins/actions/max-length-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/share-content-plugin.tsx',
        target: 'components/editor/plugins/actions/share-content-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/speech-to-text-plugin.tsx',
        target: 'components/editor/plugins/actions/speech-to-text-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/actions/tree-view-plugin.tsx',
        target: 'components/editor/plugins/actions/tree-view-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/shared/can-use-dom.ts',
        target: 'components/editor/shared/can-use-dom.ts',
        type: 'registry:shared',
      },
      {
        path: 'components/editor/hooks/use-report.tsx',
        target: 'components/editor/hooks/use-report.tsx',
        type: 'registry:hook',
      },
      {
        path: 'components/editor/transformers/markdown-transformers.ts',
        target: 'components/editor/transformers/markdown-transformers.ts',
        type: 'registry:transformer',
      },
      {
        path: 'components/editor/transformers/markdown-emoji-transformer.ts',
        target: 'components/editor/transformers/markdown-emoji-transformer.ts',
        type: 'registry:transformer',
      },
      {
        path: 'components/editor/transformers/markdown-equation-transformer.ts',
        target: 'components/editor/transformers/markdown-equation-transformer.ts',
        type: 'registry:transformer',
      },
      {
        path: 'components/editor/transformers/markdown-image-transformer.ts',
        target: 'components/editor/transformers/markdown-image-transformer.ts',
        type: 'registry:transformer',
      },
      {
        path: 'components/editor/transformers/markdown-table-transformer.ts',
        target: 'components/editor/transformers/markdown-table-transformer.ts',
        type: 'registry:transformer',
      },
      {
        path: 'components/editor/transformers/markdown-tweet-transformer.ts',
        target: 'components/editor/transformers/markdown-tweet-transformer.ts',
        type: 'registry:transformer',
      },
    ]
  },
  {
    name: 'toolbar-plugin',
    type: 'registry:component',
    registryDependencies: ['button', 'input', 'select', 'separator', 'tooltip', 'toggle', 'toggle-group'],
    files: [
      {
        path: 'components/editor/plugins/toolbar/toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/context/toolbar-context.tsx',
        target: 'components/editor/context/toolbar-context.tsx',
        type: 'registry:context',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format/format-bulleted-list.tsx',
        target: 'components/editor/plugins/toolbar/block-format/format-bulleted-list.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format/format-check-list.tsx',
        target: 'components/editor/plugins/toolbar/block-format/format-check-list.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format/format-code-block.tsx',
        target: 'components/editor/plugins/toolbar/block-format/format-code-block.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format/format-heading.tsx',
        target: 'components/editor/plugins/toolbar/block-format/format-heading.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format/format-numbered-list.tsx',
        target: 'components/editor/plugins/toolbar/block-format/format-numbered-list.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format/format-paragraph.tsx',
        target: 'components/editor/plugins/toolbar/block-format/format-paragraph.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format/format-quote.tsx',
        target: 'components/editor/plugins/toolbar/block-format/format-quote.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-collapsible-container.tsx',
        target: 'components/editor/plugins/toolbar/block-insert/insert-collapsible-container.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-columns-layout.tsx',
        target: 'components/editor/plugins/toolbar/block-insert/insert-columns-layout.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-embeds.tsx',
        target: 'components/editor/plugins/toolbar/block-insert/insert-embeds.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-equation.tsx',
        target: 'components/editor/plugins/toolbar/block-insert/insert-equation.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-excalidraw.tsx',
        target: 'components/editor/plugins/toolbar/block-insert/insert-excalidraw.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-horizontal-rule.tsx',
        target: 'components/editor/plugins/toolbar/block-insert/insert-horizontal-rule.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-image.tsx',
        target: 'components/editor/plugins/toolbar/block-insert/insert-image.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-inline-image.tsx',
        target: 'components/editor/plugins/toolbar/block-insert/insert-inline-image.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-page-break.tsx',
        target: 'components/editor/plugins/toolbar/block-insert/insert-page-break.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-poll.tsx',
        target: 'components/editor/plugins/toolbar/block-insert/insert-poll.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert/insert-table.tsx',
        target: 'components/editor/plugins/toolbar/block-insert/insert-table.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-format-toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/block-format-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/block-insert-plugin.tsx',
        target: 'components/editor/plugins/toolbar/block-insert-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/clear-formatting-toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/clear-formatting-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/code-language-toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/code-language-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/element-format-toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/element-format-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/font-background-toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/font-background-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/font-color-toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/font-color-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/font-family-toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/font-family-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/font-format-toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/font-format-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/font-size-toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/font-size-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/history-toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/history-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/link-toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/link-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/toolbar/subsuper-toolbar-plugin.tsx',
        target: 'components/editor/plugins/toolbar/subsuper-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/context/toolbar-context.tsx',
        target: 'components/editor/context/toolbar-context.tsx',
        type: 'registry:context',
      },
      {
        path: 'components/editor/hooks/use-update-toolbar.tsx',
        target: 'components/editor/hooks/use-update-toolbar.tsx',
        type: 'registry:hook',
      },
      {
        path: 'components/editor/utils/get-selected-node.ts',
        target: 'components/editor/utils/get-selected-node.ts',
        type: 'registry:util',
      },
      {
        path: 'components/editor/ui/colorpicker.tsx',
        target: 'components/editor/ui/colorpicker.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/utils/get-selected-node.ts',
        target: 'components/editor/utils/get-selected-node.ts',
        type: 'registry:util',
      },
      {
        path: 'components/editor/context/floating-link-context.tsx',
        target: 'components/editor/context/floating-link-context.tsx',
        type: 'registry:context',
      },
      {
        path: 'components/editor/utils/url.ts',
        target: 'components/editor/utils/url.ts',
        type: 'registry:util',
      },
    ]
  },
  {
    name: 'auto-embed-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/embeds/auto-embed-plugin.tsx',
        target: 'components/editor/plugins/embeds/auto-embed-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/embeds/figma-plugin.tsx',
        target: 'components/editor/plugins/embeds/figma-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/embeds/twitter-plugin.tsx',
        target: 'components/editor/plugins/embeds/twitter-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/embeds/youtube-plugin.tsx',
        target: 'components/editor/plugins/embeds/youtube-plugin.tsx',
        type: 'registry:plugin',
      },
    ]
  },
  {
    name: 'auto-link-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/auto-link-plugin.tsx',
        target: 'components/editor/plugins/auto-link-plugin.tsx',
        type: 'registry:plugin',
      }
    ]
  },
  {
    name: 'auto-complete-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/auto-complete-plugin.tsx',
        target: 'components/editor/plugins/auto-complete-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/context/shared-autocomplete-context.tsx',
        target: 'components/editor/context/shared-autocomplete-context.tsx',
        type: 'registry:context',
      },
      {
        path: 'components/editor/nodes/autocomplete-node.tsx',
        target: 'components/editor/nodes/autocomplete-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/utils/swipe.ts',
        target: 'components/editor/utils/swipe.ts',
        type: 'registry:util',
      },
    ]
  },
  {
    name: 'code-action-menu-plugin',
    type: 'registry:component',
    dependencies: ['lodash-es'],
    files: [
      {
        path: 'components/editor/plugins/code-action-menu-plugin.tsx',
        target: 'components/editor/plugins/code-action-menu-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/hooks/use-debounce.ts',
        target: 'components/editor/hooks/use-debounce.ts',
        type: 'registry:hook',
      },
      {
        path: 'components/editor/ui/code-button.tsx',
        target: 'components/editor/ui/code-button.tsx',
        type: 'registry:ui',
      },
    ]
  },
  {
    name: 'code-block-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/code-block-plugin.tsx',
        target: 'components/editor/plugins/code-block-plugin.tsx',
        type: 'registry:plugin',
      },
    ]
  },
  {
    name: 'collapsible-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/collapsible-plugin.tsx',
        target: 'components/editor/plugins/collapsible-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/nodes/collapsible-container-node.tsx',
        target: 'components/editor/nodes/collapsible-container-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/collapsible-content-node.tsx',
        target: 'components/editor/nodes/collapsible-content-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/collapsible-title-node.tsx',
        target: 'components/editor/nodes/collapsible-title-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/shared/environment.ts',
        target: 'components/editor/shared/environment.ts',
        type: 'registry:shared',
      },
      {
        path: 'components/editor/shared/invariant.ts',
        target: 'components/editor/shared/invariant.ts',
        type: 'registry:shared',
      },
      {
        path: 'components/editor/utils/collapsible.ts',
        target: 'components/editor/utils/collapsible.ts',
        type: 'registry:util',
      },
    ]
  },
  {
    name: 'component-picker-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/component-picker-plugin.tsx',
        target: 'components/editor/plugins/component-picker-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/default/lexical-typeahead-menu-plugin.tsx',
        target: 'components/editor/plugins/default/lexical-typeahead-menu-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/hooks/use-modal.tsx',
        target: 'components/editor/hooks/use-modal.tsx',
        type: 'registry:hook',
      },
    ]
  },
  {
    name: 'context-menu-plugin',
    type: 'registry:component',
    dependencies: ['@radix-ui/react-popover'],
    registryDependencies: ['command', 'popover'],
    files: [
      {
        path: 'components/editor/plugins/context-menu-plugin.tsx',
        target: 'components/editor/plugins/context-menu-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/default/lexical-context-menu-plugin.tsx',
        target: 'components/editor/plugins/default/lexical-context-menu-plugin.tsx',
        type: 'registry:plugin',
      }
    ]
  },
  {
    name: 'drag-drop-paste-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/drag-drop-paste-plugin.tsx',
        target: 'components/editor/plugins/drag-drop-paste-plugin.tsx',
        type: 'registry:plugin',
      }
    ]
  },
  {
    name: 'emoji-picker-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/emoji-picker-plugin.tsx',
        target: 'components/editor/plugins/emoji-picker-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/plugins/default/lexical-typeahead-menu-plugin.tsx',
        target: 'components/editor/plugins/default/lexical-typeahead-menu-plugin.tsx',
        type: 'registry:plugin',
      },
    ]
  },
  {
    name: 'emojis-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/emojis-plugin.tsx',
        target: 'components/editor/plugins/emojis-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/nodes/emoji-node.tsx',
        target: 'components/editor/nodes/emoji-node.tsx',
        type: 'registry:node',
      },
    ]
  },
  {
    name: 'equations-plugin',
    type: 'registry:component',
    dependencies: ['katex', 'react-error-boundary'],
    files: [
      {
        path: 'components/editor/plugins/equations-plugin.tsx',
        target: 'components/editor/plugins/equations-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/nodes/equation-node.tsx',
        target: 'components/editor/nodes/equation-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/ui/equation-component.tsx',
        target: 'components/editor/ui/equation-component.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/equation-editor.tsx',
        target: 'components/editor/ui/equation-editor.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/katex-renderer.tsx',
        target: 'components/editor/ui/katex-renderer.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/katex-equation-alterer.tsx',
        target: 'components/editor/ui/katex-equation-alterer.tsx',
        type: 'registry:ui',
      },
    ]
  },
  {
    name: 'excalidraw-plugin',
    type: 'registry:component',
    dependencies: ['@excalidraw/excalidraw', '@radix-ui/react-dialog'],
    registryDependencies: ['button', 'dialog'],
    files: [
      {
        path: 'components/editor/plugins/excalidraw-plugin.tsx',
        target: 'components/editor/plugins/excalidraw-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/nodes/excalidraw-node.tsx',
        target: 'components/editor/nodes/excalidraw-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/ui/excalidraw.tsx',
        target: 'components/editor/ui/excalidraw.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/excalidraw-component.tsx',
        target: 'components/editor/ui/excalidraw-component.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/excalidraw-modal.tsx',
        target: 'components/editor/ui/excalidraw-modal.tsx',
        type: 'registry:ui',
      },
    ]
  },
  {
    name: 'floating-link-editor-plugin',
    type: 'registry:component',
    registryDependencies: ['button', 'input'],
    files: [
      {
        path: 'components/editor/plugins/floating-link-editor-plugin.tsx',
        target: 'components/editor/plugins/floating-link-editor-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/context/floating-link-context.tsx',
        target: 'components/editor/context/floating-link-context.tsx',
        type: 'registry:context',
      },
      {
        path: 'components/editor/utils/get-selected-node.ts',
        target: 'components/editor/utils/get-selected-node.ts',
        type: 'registry:util',
      },
      {
        path: 'components/editor/utils/set-floating-elem-position-for-link-editor.ts',
        target: 'components/editor/utils/set-floating-elem-position-for-link-editor.ts',
        type: 'registry:util',
      },
      {
        path: 'components/editor/utils/sanitize-url.ts',
        target: 'components/editor/utils/sanitize-url.ts',
        type: 'registry:util',
      },
    ]
  },
  {
    name: 'floating-text-format-toolbar-plugin',
    type: 'registry:component',
    registryDependencies: ['separator', 'toggle-group'],
    files: [
      {
        path: 'components/editor/plugins/floating-text-format-toolbar-plugin.tsx',
        target: 'components/editor/plugins/floating-text-format-toolbar-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/context/floating-link-context.tsx',
        target: 'components/editor/context/floating-link-context.tsx',
        type: 'registry:context',
      },
      {
        path: 'components/editor/utils/get-dom-range-rect.ts',
        target: 'components/editor/utils/get-dom-range-rect.ts',
        type: 'registry:util',
      },
      {
        path: 'components/editor/utils/set-floating-elem-position.ts',
        target: 'components/editor/utils/set-floating-elem-position.ts',
        type: 'registry:util',
      },
      {
        path: 'components/editor/utils/get-selected-node.ts',
        target: 'components/editor/utils/get-selected-node.ts',
        type: 'registry:util',
      },
    ]
  },
  {
    name: 'images-plugin',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'input', 'label', 'tabs'],
    files: [
      {
        path: 'components/editor/plugins/images-plugin.tsx',
        target: 'components/editor/plugins/images-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/nodes/image-node.tsx',
        target: 'components/editor/nodes/image-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/ui/image-component.tsx',
        target: 'components/editor/ui/image-component.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/ui/image-resizer.tsx',
        target: 'components/editor/ui/image-resizer.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/shared/can-use-dom.ts',
        target: 'components/editor/shared/can-use-dom.ts',
        type: 'registry:shared',
      },
      {
        path: 'components/editor/ui/content-editable.tsx',
        target: 'components/editor/ui/content-editable.tsx',
        type: 'registry:ui',
      },
    ]
  },
  {
    name: 'inline-image-plugin',
    type: 'registry:component',
    registryDependencies: ['button', 'checkbox', 'dialog', 'input', 'label', 'select'],
    files: [
      {
        path: 'components/editor/plugins/inline-image-plugin.tsx',
        target: 'components/editor/plugins/inline-image-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/nodes/inline-image-node.tsx',
        target: 'components/editor/nodes/inline-image-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/ui/inline-image-component.tsx',
        target: 'components/editor/ui/inline-image-component.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/shared/can-use-dom.ts',
        target: 'components/editor/shared/can-use-dom.ts',
        type: 'registry:shared',
      },
      {
        path: 'components/editor/ui/content-editable.tsx',
        target: 'components/editor/ui/content-editable.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/hooks/use-modal.tsx',
        target: 'components/editor/hooks/use-modal.tsx',
        type: 'registry:hook',
      },
    ]
  },
  {
    name: 'keywords-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/keywords-plugin.tsx',
        target: 'components/editor/plugins/keywords-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/nodes/keyword-node.tsx',
        target: 'components/editor/nodes/keyword-node.tsx',
        type: 'registry:node',
      },
    ]
  },
  {
    name: 'layout-plugin',
    type: 'registry:component',
    registryDependencies: ['button', 'select'],
    files: [
      {
        path: 'components/editor/plugins/layout-plugin.tsx',
        target: 'components/editor/plugins/layout-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/nodes/layout-container-node.tsx',
        target: 'components/editor/nodes/layout-container-node.tsx',
        type: 'registry:node',
      },
      {
        path: 'components/editor/nodes/layout-item-node.tsx',
        target: 'components/editor/nodes/layout-item-node.tsx',
        type: 'registry:node',
      },
    ]
  },
  {
    name: 'link-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/link-plugin.tsx',
        target: 'components/editor/plugins/link-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/utils/url.ts',
        target: 'components/editor/utils/url.ts',
        type: 'registry:util',
      },
    ]
  },
  {
    name: 'list-max-indent-level-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/list-max-indent-level-plugin.tsx',
        target: 'components/editor/plugins/list-max-indent-level-plugin.tsx',
        type: 'registry:plugin',
      }
    ]
  },
  {
    name: 'mentions-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/mentions-plugin.tsx',
        target: 'components/editor/plugins/mentions-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/nodes/mention-node.tsx',
        target: 'components/editor/nodes/mention-node.tsx',
        type: 'registry:node',
      },
    ]
  },
  {
    name: 'page-break-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/page-break-plugin.tsx',
        target: 'components/editor/plugins/page-break-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/nodes/page-break-node.tsx',
        target: 'components/editor/nodes/page-break-node.tsx',
        type: 'registry:node',
      },
    ]
  },
  {
    name: 'poll-plugin',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'components/editor/plugins/poll-plugin.tsx',
        target: 'components/editor/plugins/poll-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/nodes/poll-node.tsx',
        target: 'components/editor/nodes/poll-node.tsx',
        type: 'registry:node',
      },
    ]
  },
  {
    name: 'tab-focus-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/tab-focus-plugin.tsx',
        target: 'components/editor/plugins/tab-focus-plugin.tsx',
        type: 'registry:plugin',
      }
    ]
  },
  {
    name: 'table-action-menu-plugin',
    type: 'registry:component',
    registryDependencies: ['command', 'popover'],
    files: [
      {
        path: 'components/editor/plugins/table-action-menu-plugin.tsx',
        target: 'components/editor/plugins/table-action-menu-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/ui/colorpicker.tsx',
        target: 'components/editor/ui/colorpicker.tsx',
        type: 'registry:ui',
      },
      {
        path: 'components/editor/hooks/use-modal.tsx',
        target: 'components/editor/hooks/use-modal.tsx',
        type: 'registry:hook',
      },
    ]
  },
  {
    name: 'table-cell-resizer-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/table-cell-resizer-plugin.tsx',
        target: 'components/editor/plugins/table-cell-resizer-plugin.tsx',
        type: 'registry:plugin',
      },
    ]
  },
  {
    name: 'table-hover-actions-plugin',
    type: 'registry:component',
    dependencies: ['lodash-es'],
    files: [
      {
        path: 'components/editor/plugins/table-hover-actions-plugin.tsx',
        target: 'components/editor/plugins/table-hover-actions-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/hooks/use-debounce.tsx',
        target: 'components/editor/hooks/use-debounce.tsx',
        type: 'registry:hook',
      },
    ]
  },
  {
    name: 'table-plugin',
    type: 'registry:component',
    registryDependencies: ['button', 'dialog', 'input', 'label'],
    files: [
      {
        path: 'components/editor/plugins/table-plugin.tsx',
        target: 'components/editor/plugins/table-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/shared/invariant.ts',
        target: 'components/editor/shared/invariant.ts',
        type: 'registry:shared',
      }
    ]
  },
  {
    name: 'typing-pref-plugin',
    type: 'registry:component',
    files: [
      {
        path: 'components/editor/plugins/typing-pref-plugin.tsx',
        target: 'components/editor/plugins/typing-pref-plugin.tsx',
        type: 'registry:plugin',
      },
      {
        path: 'components/editor/hooks/use-report.tsx',
        target: 'components/editor/hooks/use-report.tsx',
        type: 'registry:hook',
      },
    ]
  }
];

