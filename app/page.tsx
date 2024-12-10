'use client'

import { useState } from 'react'

import { SerializedEditorState } from 'lexical'

import { Editor } from '@/components/editor'

const initialValue = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text: 'Hello World 🚀',
            type: 'text',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'paragraph',
        version: 1,
      },
    ],
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'root',
    version: 1,
  },
} as unknown as SerializedEditorState

export default function Home() {
  const [editorState, setEditorState] =
    useState<SerializedEditorState>(initialValue)

  return (
    <div className="m-4 overflow-hidden rounded-lg border bg-background shadow">
      <Editor
        editorSerializedState={editorState}
        onSerializedChange={(value) => setEditorState(value)}
      />
    </div>
  )
}
