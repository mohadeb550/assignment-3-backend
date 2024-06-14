import express from 'express'
import router from './routes'
const app = express()

// use json body parser 
app.use(express.json())

// use router
app.use('/api', router)




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.all('*', (req, res) => {
  res.status(404).json({
    "success" : false,
    "statuscode" : 404,
    "message" : "Not found"
  })
})

export default app