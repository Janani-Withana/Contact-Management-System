const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

//TaTHM68ipwUxxCNz
//jananijayasuriya330
//mongodb+srv://jananijayasuriya330:<password>@cluster0.ou2nnos.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb connection

//middlewares
app.use(express.json())
app.use(morgan("tiny")) 

//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//server configurations
app.listen(port, async() => {
  try {
    await connectDB();
    console.log(`Example app listening on port ${port}`) 
  } catch (error) {
    console.log(err);
  }  
})