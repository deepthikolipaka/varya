import React, { useState } from 'react'
import axios from 'axios'

function UploadForm({ onParsed }) {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleUpload = async () => {
    const formData = new FormData()
    formData.append('codefile', selectedFile)

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData)
      console.log('Parsed response:', response.data.parsed)
      onParsed(response.data.parsed)
    } catch (err) {
      console.error('Upload failed:', err)
    }
  }

  return (
    <div>
      <input type="file" onChange={e => setSelectedFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}
export default UploadForm