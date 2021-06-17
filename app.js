const express = require("express")
const app = express()
const port = 5000;

// serve static files
app.use(express.static('public'))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/images", express.static(__dirname + "public/images"))
app.use("/js", express.static(__dirname + "public/js"))

// templating engine
app.set("views", "./src/views")
app.set("view engine", "ejs")

// routes
const newsRouter = require("./src/route/news")
app.use("/", newsRouter)



// listen on port 5000
app.listen(port, () => console.log(`listening on port ${port}`))
