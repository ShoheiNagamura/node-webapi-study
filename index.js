const express = require("express");
const app = express();

const PORT = 3001;


app.get("/", (req, res) => {
    res.send("root");
})

app.listen(PORT, () => {
    console.log("サーバー起動");
})
