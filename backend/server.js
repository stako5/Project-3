require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'http://frontend:5173'],
    credentials: true
}));



// app.get('/api/', (req,res) => {
//     res.status(200).send(`Good request`);
// });

//get all song data
app.get('/api/songs', (req, res) => {
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
app.get('/api/playlists', (req, res) => {
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
app.get('/api/users', (req, res) => {
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
app.get('/api/albums', (req, res) => {
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
app.get('/api/artists', (req, res) => {
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
app.listen(port, '0.0.0.0', () => {
    console.log(`express is running on ${port}`);
})



