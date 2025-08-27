# Project-3 STOPIFY APP

Overview:

This project is a full-stack music streaming app inspired by Spotify. Users can sign up, log in (using username), browse songs, create personal playlists, and stream music. The README outlines the main epics (major features), username-based authentication, and guides for setting up a user profile.

User Authentication Epic
Register/login using username + password (no emails)

JWT-based sessions

Logout

2. Music Library Epic
   Browse/search songs by title/artist/genre:

As a user, I want to search songs by title, so that I can quickly find a specific track.
As a user, I want to search by artist, so that I can listen to all tracks from my favorite performer.
As a user, I want to filter by genre, so that I can explore music that matches my taste.

List tracks from the database:

As a user, I want to view a list of all available tracks, so that I can browse and discover music easily.
As a user, I want to see metadata (title, artist, duration, album) with each track, so that I know more about what I’m selecting.

3. Streaming Epic
   Play/pause/skip audio tracks:

As a user, I want to play a song, so that I can listen to music.
As a user, I want to pause playback, so that I can temporarily stop without losing my place.
As a user, I want to skip to the next or previous track, so that I can navigate my listening experience.

Basic player UI:

As a user, I want to see a simple music player interface, so that I can control playback easily.
As a user, I want to view the current song details (title, artist, album art), so that I know what’s playing.
As a user, I want a progress bar, so that I can see how much of the song has played.

4. Profile & Personalization Epic
   Edit/view profile and avatar:

As a user, I want to create and edit my profile details, so that I can personalize my account.
As a user, I want to upload or change my avatar, so that I can customize my identity.
As a user, I want to view my profile information, so that I can confirm and manage my data.

List user’s favorite tracks, playlists:

As a user, I want to see a list of my favorite songs, so that I can easily replay the ones I love.
As a user, I want to view my created playlists, so that I can access and manage them quickly.

5. Playlist Epic
   Create/delete/rename playlists:

As a user, I want to create new playlists, so that I can organize songs into collections I like.
As a user, I want to rename playlists, so that I can adjust them as my themes or preferences change.
As a user, I want to delete a playlist, so that I can remove collections I no longer need.

Add/remove songs:

As a user, I want to add songs to a playlist, so that I can curate custom listening experiences.
As a user, I want to remove songs from a playlist, so that I can update my collections.

6. Dashboard Epic
   Recently played songs:

As a user, I want to see my recently played songs, so that I can quickly jump back to tracks I enjoyed.

Quick links to personal playlists and profile"

As a user, I want easy access to my playlists from the dashboard, so that I can start playing music faster.
As a user, I want a quick link to my profile, so that I can update or check my settings conveniently.

User Persona:

<img width="720" height="656" alt="image" src="https://github.com/user-attachments/assets/a599bcff-4b0a-4f55-8f94-6e236a6434b6" />

WireFrame:

<img width="1495" height="1067" alt="Homepage" src="https://github.com/user-attachments/assets/5773092c-3be2-4c08-bfd8-fdb084152251" />

<img width="1523" height="1078" alt="playlist" src="https://github.com/user-attachments/assets/89f4c17d-a636-4e74-816a-0d8d63ac90ac" />

<img width="1391" height="1132" alt="Lidrary" src="https://github.com/user-attachments/assets/7a192a6c-bcec-4205-b59c-74e19352fce3" />

<img width="1401" height="1076" alt="Login" src="https://github.com/user-attachments/assets/b945487e-67a7-4e24-89b3-e309d81a4f35" />

ERD:
<img width="720" height="478" alt="image" src="https://github.com/user-attachments/assets/e504d545-adbc-4321-b324-0abef56f33cd" />

TO Read API use these
Local URLs:

- http://localhost:8080/api/songs
- http://localhost:8080/api/playlists
- http://localhost:8080/api/users
- http://localhost:8080/api/albums
- http://localhost:8080/api/artists

TO see Webpage use
Frontend URL:

- http://localhost:5173

Docker Command for local env
docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \
-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

docker exec -it <container #> bash
psql -U postgres
CREATE DATABASE mydb;
\c mydb

~Project-3/backend: npx knex migrate:rollback && npx knex migrate:latest && npx knex seed:run
~Project-3/backend: npm run dev
~Project-3/backend: cd ../frontend
~Project-3/frontend: npm run dev
