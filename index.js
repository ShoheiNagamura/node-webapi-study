const express = require("express");
const app = express();

const PORT = 3001;


//Webサーバ起動
app.listen(PORT, () => {
    console.log("サーバー起動");
})



app.get("/", (req, res) => {
    res.send("root");
})

