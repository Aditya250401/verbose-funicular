const express = require('express')

const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use('/', (req, res) => {
	res.send('i have succesfully implemented the complete pipeline try 3')
})

app.listen(3000, () => console.log('Server running on port 3000'))
