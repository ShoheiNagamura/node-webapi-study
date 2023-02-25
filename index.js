const express = require("express");
const app = express();

app.use(express.json());
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

//データを取得できるようにする（CRED)（GET）
app.get("/api/customers", (req, res) => {
    res.send(customers);
})

//お客を指定してデータを取得できる(GET)
app.get("/api/customers/:id", (req, res) => {
    //データの中をfindしてリクエストされたidとデータの中のidを照合して一致したデータを変数に返す
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    res.send(customer);
})

//データを送信（作成）(POST)
app.post("/api/customers/", (req, res) => {
    const customer = {
        title: req.body.title,
        id: customers.length + 1,
    };
    customers.push(customer); //事前に用意したデータに追加する
    res.send(customers);

})

