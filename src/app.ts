import express from 'express'
import { ProductRouter } from './modules/product/product.route'
import { OrderRouter } from './modules/order/order.route'
const app = express()

// use json body parser 
app.use(express.json())

// use routers 
app.use('/api/products', ProductRouter)
app.use('/api/orders', OrderRouter)




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.all('*', (req, res) => {
  res.status(404).json({
    "success" : false,
    "message" : "Route not found"
  })
})

export default app