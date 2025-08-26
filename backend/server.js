const express = require('express');
const app = express();
const port = process.env.PORT || 8000
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(express.json());
app.use(cors());



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
//get a/apill playlists data
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
//get a/apill users data
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
//get a/apill albums data
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
//get a/apill artists data
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
app.listen(port, () => {
    console.log(`express is running on ${port}`);
})



