const express = require('express')
const cors = require('cors')
const multer = require('multer')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

const upload = multer({ dest: 'uploads/' })

app.post('/api/upload', upload.single('codefile'), (req, res) => {
  try {
    const filePath = req.file?.path
    const ext = path.extname(req.file?.originalname || '').toLowerCase()

    if (!filePath || !['.js', '.py'].includes(ext)) {
      if (filePath) fs.unlinkSync(filePath)
      return res.status(400).json({ error: 'Only .js or .py files allowed' })
    }

    const codeText = fs.readFileSync(filePath, 'utf-8')
    const parsed = {
      classes: ['ExampleClass'],
      functions: [{ name: 'example_function' }]
    }

    fs.unlinkSync(filePath)
    res.json({ ok: true, parsed })
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(PORT, () => {
  console.log(`Vayra backend running on http://localhost:${PORT}`)
})