const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`express is running on ${port}`);
})

app.get('/', (req,res) => {
    res.status(200).send(`Good request`);
});




