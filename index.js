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



//お客様をサーバーに置いておく
const customers = [
    { title: "田中", id: 1, },
    { title: "齋藤", id: 2, },
    { title: "鈴木", id: 3, },
    { title: "橋本", id: 4, },
    { title: "茂木", id: 5 },
]