import express from 'express'

const app = express()

const port = 8080

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render("home.ejs")
})

app.get('/rolldice', (req, res) => {
    let value = Math.floor(Math.random()*6) + 1;
    res.render("rolldice.ejs", {num:value})
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`)
})