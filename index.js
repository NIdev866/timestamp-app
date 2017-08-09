const express = require("express")
const app = express()
const time = require("./time.js")
const port = Number(process.env.PORT||8080)
app.use('/', express.static(__dirname+'/public'))
app.get('/:time', (req,res) => {
  res.send(time(req.params.time))
})
app.listen(port, () => console.log("running"))