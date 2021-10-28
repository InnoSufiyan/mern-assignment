const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')

app.use(cors())

app.listen(port, () => {
    app.get("/posts", (req, res) => {
        res.json(
            [
                {
                    product: "bike",
                    price: 5000,
                    quantity: 15
                },
                {
                    product: "car",
                    price: 15000,
                    quantity: 35
                }
            ]
        )
    })
    console.log(`port running at ${port}`)
})