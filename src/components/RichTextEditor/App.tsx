/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import LexicalComposer from '@lexical/react/LexicalComposer'

import { isDevPlayground } from './appSettings'
import { SettingsContext, useSettings } from './context/SettingsContext'
import { SharedHistoryContext } from './context/SharedHistoryContext'
import Editor from './Editor'
import PlaygroundNodes from './nodes/PlaygroundNodes'
import Settings from './Settings'
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme'

function App(): JSX.Element {
  const { settings } = useSettings()

  const initialConfig = {
    namespace: 'PlaygroundEditor',
    nodes: [...PlaygroundNodes],
    onError: (error) => {
      throw error
    },
    theme: PlaygroundEditorTheme,
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <SharedHistoryContext>
        <div className="editor-shell">
          <Editor />
        </div>
        <Settings />
      </SharedHistoryContext>
    </LexicalComposer>
  )
}

function PlaygroundApp(): JSX.Element {
  return (
    <SettingsContext>
      <App />
    </SettingsContext>
  )
}

export { PlaygroundApp }
