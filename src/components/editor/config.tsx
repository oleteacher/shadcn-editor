import { InitialConfigType } from '@lexical/react/LexicalComposer'
import { editorState } from './init'
import { nodes } from './nodes'
import { editorTheme } from './themes/editor-theme'

export const editorConfig: InitialConfigType = {
  namespace: 'Editor',
  theme: editorTheme,
  nodes,
  editorState: JSON.stringify(editorState),
  onError: (error: Error) => {
    console.error(error)
  },
}
