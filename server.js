const express = require("express");
const cors = require("cors");

const todo_Routers = require("./Routes/todo_Routes")

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", todo_Routers);

app.get("/",(req, res) => {
    res.json({
        message: "Todo API running"
    });
});

const PORT = 3000;

const connectDB = require("./config/database")
connectDB(); //important

app.listen(PORT, () => {
    console.log(`Server Port running at :${PORT}`)
});