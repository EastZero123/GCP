const express = require("express")
const fs = require("fs")
const path = require("path")
const bodyParser = require("body-parser")

const lowdbRoutes = require("./routes/lowdb-routes")

const app = express()

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "../front/build")))
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/build", "index.html"))
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  )
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE")
  next()
})

app.use("/lowdb", lowdbRoutes)

app.listen(6565)
