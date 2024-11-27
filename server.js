import express from "express"

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Connected`);
})

app.listen(PORT, () => {
    console.log(`Server is listeing at port: ${PORT}`);
})