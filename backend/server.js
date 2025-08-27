require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080
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
//patch playlist array
app.patch('/api/playlists/:playlists_id', (req, res) => {
    let playlistsId = req.params.playlists_id
    let playlistsName = req.body.name
    let playlistsDescription = req.body.description
    let playlistsSong = req.body.song
    knex('playlists')
    .select('songs_array')
    .from('playlists')
    .where('id', playlistsId)
    .returning('songs_array')
    .then(data => {
        let output = `${data[0].songs_array}, ${playlistsSong}`
        knex('playlists')
        .from('playlists')
        .where('id', playlistsId)
        .update({"id": playlistsId, "name": playlistsName, "description": playlistsDescription, "songs_array": output})
        .returning('songs_array')
        .then(data => {
            res.status(201).send(data)
        })
        .catch((err) => {
                if (err) {
                    res.status(404).send(`failed to patch: ${err}`)
                }
        })
    })
    .catch((err) => {
                if (err) {
                    res.status(404).send(`failed to patch: ${err}`)
                }
    })
})

// await knex("playlists")
//   .where("id", 1) // playlist you want to update
//   .update({
//     songs: knex.raw("array_append(songs, ?)", [123]) // 👈 123 = new song_id
//   });
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
//get all artists_songs data
app.get('/api/artists_songs', (req, res) => {
    knex('artists_songs')
        .select('*')
        .from('artists_songs')
        .then(data =>  res.status(200).send(data) )
        .catch((err) => {
            if (err) {
                res.status(404).send(`failed to retrieve: ${err}`)
            }
        })
})
//get all albums_songs data
app.get('/api/albums_songs', (req, res) => {
    knex('albums_songs')
        .select('*')
        .from('albums_songs')
        .then(data =>  res.status(200).send(data) )
        .catch((err) => {
            if (err) {
                res.status(404).send(`failed to retrieve: ${err}`)
            }
        })
})
//get all playlists_songs data
app.get('/api/playlists_songs', (req, res) => {
    knex('playlists_songs')
        .select('*')
        .from('playlists_songs')
        .then(data =>  res.status(200).send(data) )
        .catch((err) => {
            if (err) {
                res.status(404).send(`failed to retrieve: ${err}`)
            }
        })
})

// get all songs by a certain artist
app.get('/api/songs_by_artist/:artistsId', (req,res) => {
    let artistsId = req.params.artistsId
    knex("songs")
    .select()
    .from('songs')
    .where('artists_id', artistsId)
    .then(data => res.status(200).send(data))
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



