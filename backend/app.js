const express = require('express');
const app = express();
require("./connection/dB");
const auth = require("./routes/auth");
const list = require("./routes/list");
app.use(express.json());

app.listen((3000), () => {
    console.log('Server is running on port 3000');
})

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.get('/', (req, res) => {
    res.send('Hello World!');
});