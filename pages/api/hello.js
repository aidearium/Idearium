import connectToDatabase from '../../util/mongodb.js'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 3000

connectToDatabase()

export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
    res.json({ test: 'test' })
}

// app.get('/Nodes', (req, res) => {
//     res.json({ test: 'test' })
// })

// app.post('/Nodes', (req, res) => {
//     const { text } = req.body
//     const id = Nodes.length + 1
//     Nodes.push({ id, text, completed: false })
//     res.json({ id, text, completed: false })
// })

// app.put('/Nodes/:id', (req, res) => {
//     const { id } = req.params
//     const { text, completed } = req.body
//     const nodeIdx = Nodes.findIndex(todo => todo.id === parseInt(id))
//     if (nodeIdx >= 0) {
//         Nodes[nodeIdx] = { id: parseInt(id), text, completed }
//         res.json({ id: parseInt(id), text, completed })
//     } else {
//         res.status(404).json({ error: 'Node not found' })
//     }
// })

// app.delete('/Nodes/:id', (req, res) => {
//     const { id } = req.params
//     const todoIndex = Nodes.findIndex(todo => todo.id === parseInt(id))
//     if (todoIndex >= 0) {
//         Nodes.splice(todoIndex, 1)
//         res.json({ message: 'Todo deleted' })
//     } else {
//         res.status(404).json({ error: 'Node not found' })
//     }
// })

// app.listen(port, () => {
//     console.log(`API listening on port ${port}`)
// })
