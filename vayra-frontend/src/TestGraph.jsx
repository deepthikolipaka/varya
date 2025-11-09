import React from 'react'
import CytoscapeComponent from 'react-cytoscapejs'

function TestGraph() {
  const elements = [
    { data: { id: 'A', label: 'Node A' }, classes: 'classNode' },
    { data: { id: 'B', label: 'Node B' }, classes: 'funcNode' },
    { data: { id: 'edge-1', source: 'A', target: 'B' } }
  ]

  return (
    <div style={{ height: '600px', marginTop: '20px' }}>
      <CytoscapeComponent
        elements={elements}
        style={{ width: '100%', height: '100%' }}
        layout={{ name: 'cose' }}
        stylesheet={[
          {
            selector: '.classNode',
            style: {
              backgroundColor: '#007bff',
              label: 'data(label)',
              shape: 'roundrectangle',
              color: '#fff',
              textValign: 'center',
              textHalign: 'center'
            }
          },
          {
            selector: '.funcNode',
            style: {
              backgroundColor: '#28a745',
              label: 'data(label)',
              shape: 'ellipse',
              color: '#fff',
              textValign: 'center',
              textHalign: 'center'
            }
          },
          {
            selector: 'edge',
            style: {
              width: 2,
              lineColor: '#ccc',
              targetArrowColor: '#ccc',
              targetArrowShape: 'triangle'
            }
          }
        ]}
      />
    </div>
  )
}

export default TestGraph