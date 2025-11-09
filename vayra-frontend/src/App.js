import React, { useState } from 'react'
import UploadForm from './UploadForm'
import GraphView from './GraphView'

function App() {
  const [parsed, setParsed] = useState(null)

  return (
    <div style={{ padding: '20px' }}>
      <h1>Vayra Codebase Visualizer</h1>
      <UploadForm onParsed={setParsed} />
      {parsed && <GraphView parsed={parsed} />}
    </div>
  )
}

export default App
