const express = require('express')
const api = require('./routes/api')
const cors = require('cors')

const app = express()
app.use(cors())
app.use('/api/v0/', api)

app.get('/', (req, res) => {
  res.json({
    Title: 'Climate Change API',
    first: "after the domain you can go to '/api/v0/news' to display the news",
    second:
      "you can specify the resource you want to see like '/api/v0/news/gurdian' OR '/api/v0/news/thetimes' ",
    Developer: 'ASM follow on Github https://www.github.com/asm-dev',
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
