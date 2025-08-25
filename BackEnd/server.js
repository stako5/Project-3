const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(express.json());
app.use(cors());



// app.get('/', (req,res) => {
//     res.status(200).send(`Good request`);
// });

//get all song data
app.get('/songs', (req, res) => {
    knex('songs')
        .select('*')
        .from('songs')
        .then(data =>  res.status(200).send(data) )
        .catch((err) => {
            if (err) {
                res.status(404).send(`failed to retrieve: ${err}`)
            }
        })
})
//get all playlists data
app.get('/playlists', (req, res) => {
    knex('playlists')
        .select('*')
        .from('playlists')
        .then(data =>  res.status(200).send(data) )
        .catch((err) => {
            if (err) {
                res.status(404).send(`failed to retrieve: ${err}`)
            }
        })
})
//get all users data
app.get('/users', (req, res) => {
    knex('users')
        .select('*')
        .from('users')
        .then(data =>  res.status(200).send(data) )
        .catch((err) => {
            if (err) {
                res.status(404).send(`failed to retrieve: ${err}`)
            }
        })
})
//get all albums data
app.get('/albums', (req, res) => {
    knex('albums')
        .select('*')
        .from('albums')
        .then(data =>  res.status(200).send(data) )
        .catch((err) => {
            if (err) {
                res.status(404).send(`failed to retrieve: ${err}`)
            }
        })
})
//get all artists data
app.get('/artists', (req, res) => {
    knex('artists')
        .select('*')
        .from('artists')
        .then(data =>  res.status(200).send(data) )
        .catch((err) => {
            if (err) {
                res.status(404).send(`failed to retrieve: ${err}`)
            }
        })
})



//end
app.listen(port, () => {
    console.log(`express is running on ${port}`);
})



