import React, { useEffect, useState, useRef } from 'react'
import CytoscapeComponent from 'react-cytoscapejs'

function GraphView({ parsed }) {
  const [elements, setElements] = useState([])
  const cyRef = useRef(null)

  useEffect(() => {
    if (
      parsed &&
      Array.isArray(parsed.classes) &&
      Array.isArray(parsed.functions) &&
      parsed.classes.length > 0
    ) {
      const classId = parsed.classes[0] || 'class-0'
      const newElements = []

      newElements.push({
        data: { id: classId, label: classId },
        classes: 'classNode'
      })

      parsed.functions.forEach((fn, i) => {
        const funcId = `func-${i}`
        const funcLabel = fn?.name || funcId

        newElements.push({
          data: { id: funcId, label: funcLabel },
          classes: 'funcNode'
        })

        newElements.push({
          data: { id: `edge-${i}`, source: classId, target: funcId }
        })
      })

      const valid = newElements.filter(el => el?.data?.id)
      setElements(valid)
    } else {
      setElements([])
    }
  }, [parsed])

  useEffect(() => {
    if (cyRef.current && elements.length > 0) {
      cyRef.current.layout({ name: 'cose' }).run()
    }
  }, [elements])

  return (
    <div style={{ height: '600px', marginTop: '20px' }}>
      <CytoscapeComponent
        cy={(cy) => {
          cyRef.current = cy
        }}
        elements={elements}
        style={{ width: '100%', height: '100%' }}
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

export default GraphView