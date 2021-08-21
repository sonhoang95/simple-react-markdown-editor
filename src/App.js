import ReactMarkdown from "react-markdown"
import { useState } from "react"
import "./App.css"

function App() {
  const [markdown, setMarkdown] = useState("")

  function handleMarkdownChange(e) {
    setMarkdown(e.target.value)
  }
  return (
    <div className="app">
      <textarea value={markdown} onChange={handleMarkdownChange}></textarea>
      <ReactMarkdown className="preview">{markdown}</ReactMarkdown>
    </div>
  )
}

export default App
