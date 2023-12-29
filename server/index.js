const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

// Routes
app.use('/', (req, res) => {
	res.send('i have successfully implemented the complete pipeline try 4')
})

app.listen(3000, () => console.log('Server running on port 3000'))
