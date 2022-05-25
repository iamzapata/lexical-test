import { PlaygroundApp } from '@components/RichTextEditor/RichTextEditor'
import '@components/RichTextEditor/index'
import { TestTest } from '@components/TestTest'
import NOOP from '@components/NoOp'
import './App.css'

TestTest()
NOOP()

function App() {
  return (
    <div className="App">
      <PlaygroundApp />
    </div>
  )
}

export default App
