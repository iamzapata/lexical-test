import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@components/RichTextEditor/index'
import { PlaygroundApp } from '@components/RichTextEditor/RichTextEditor'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlaygroundApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
