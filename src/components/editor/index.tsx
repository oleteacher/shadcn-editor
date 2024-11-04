'use client'

import { LexicalComposer } from '@lexical/react/LexicalComposer'

import { TooltipProvider } from '@/components/ui/tooltip'

import { editorConfig } from './config'
import { FloatingLinkContext } from './context/floating-link-context'
import { SharedAutocompleteContext } from './context/shared-autocomplete-context'
import { Plugins } from './plugins'

export function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <TooltipProvider>
        <SharedAutocompleteContext>
          <FloatingLinkContext>
            <Plugins />
          </FloatingLinkContext>
        </SharedAutocompleteContext>
      </TooltipProvider>
    </LexicalComposer>
  )
}
