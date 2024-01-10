# `Spoti-chat`

Share your love of music!

![Spoti-Chat](./images/HomePage.png)

## What is it?

Spoti-Chat uses Spotify API, and allows you to do the following:

- Listen to music
- Search for songs
- Search for Recommended songs
- Add Search and Recommended songs to Favorites
- Chat with your friends

## Installation Instructions

1. Fork and clone this repository.
2. Run `npm install` from your terminal while inside of the project's directory.
   3A. Set up a `.env` file and add
   `REDIRECT_URI=http://localhost:3000`
   `SPOTIFY_CLIENT_ID=YOUR_SPOTIFY_CLIENT_ID`
   `SPOTIFY_SECRET=YOUR_SPOTIFY_SECRET`
   `MONGO_URI=mongodb+srv://MONGODB_USERNAME:MONGODB_PASSWORD@cluster0.j9iccj7.mongodb.net/`
   3B. It's important to note that your Spotify API key comes from the Spotify Developer website `https://developer.spotify.com/`
3. You don't have to create the database in the app because you're connecting through our URL.
4. Run `npm run dev` on your front end with `http://localhost:3000/` in terminal

## Navigating The Project

### Chats Routes

| Method | Path       | Location | Purpose           |
| ------ | ---------- | -------- | ----------------- |
| GET    | /chats     | chats.js | Find chatroom     |
| GET    | /chats/:id | chats.js | Get chat messages |
| POST   | /chats/new | chats.js | Create new Chat   |
| DELETE | /chats/:id | chats.js | Delete chat       |

### Favorites Routes

| Method | Path                | Location     | Purpose                         |
| ------ | ------------------- | ------------ | ------------------------------- |
| GET    | /favorites          | favorites.js | Home page                       |
| GET    | /favorites/:userId  | favorites.js | Find all of a users's favorites |
| POST   | /favorites/:id/save | favorites.js | Create favorite                 |
| DELETE | /favorites/:id      | favorites.js | Deletes favorite                |

### Friends Routes

| Method | Path             | Location   | Purpose                    |
| ------ | ---------------- | ---------- | -------------------------- |
| GET    | /friends/:id     | friends.js | Get all friends of an user |
| POST   | /friends/:id/add | friends.js | Add new friend             |
| DELETE | /friends/delete  | friends.js | Deletes friend             |

### Messages Routes

| Method | Path                      | Location    | Purpose            |
| ------ | ------------------------- | ----------- | ------------------ |
| GET    | /messages                 | messages.js | Get all messages   |
| POST   | /messages/:chatroomId/new | messages.js | Create new message |

### Posts Routes

| Method | Path           | Location | Purpose                            |
| ------ | -------------- | -------- | ---------------------------------- |
| GET    | /posts         | posts.js | Get all posts                      |
| GET    | /posts/:userId | posts.js | Get all posts from a specific user |
| POST   | /posts/new     | posts.js | Create new post                    |
| PUT    | /posts/:id     | posts.js | Edit post                          |
| DELETE | /posts/:id     | posts.js | Deletes bookmark                   |

### Users Routes

| Method | Path          | Location | Purpose            |
| ------ | ------------- | -------- | ------------------ |
| GET    | /users        | users.js | Find all users     |
| GET    | /users/:id/id | users.js | Find user by id    |
| GET    | /users/:email | users.js | Find user by email |
| POST   | /users/signup | users.js | Create new user    |
| PUT    | /users/:id    | users.js | Edit user          |
| DELETE | /users/:id    | users.js | Delete user        |

#### Chats Model

- **Description:** This model is used to store user created chats.
- **Attributes:**
  - **id:** Automatically generated by the Mongoose.
  - **users:** id corresponding to an id in the user model. This tracks which users are in the chat.
  - **messages:** id corresponding to an id in the message model. This tracks which messages were sent in the chat.
  - **createdAt:** Automatically generated by the Mongoose.

#### Favorites Model

- **Description:** This model is used to store user created favorite bookmarks
- **Attributes:**

  - **userId:** Stores user ID
  - **name:** Stores name of track, album, or artist
  - **albumName:** Stores album name
  - **artistName:** Stores artist name
  - **type:** stores the media type
  - **spotifyId:** stores the Spotify ID
  - **imgUrl:** Stores img URL
  - **timestamps:** Stores time stamps

#### Friends Model

- **Description:** This model is used to store user friends
- **Attributes:**

  - **friendsSchema:** Contains the schema pulled using mongoose from the Mongo database
  - **users:** id corresponding to an id in the user model. This tracks which users are friends

#### Index Model

- **Description:** This model is used to store the homepage content
- **Attributes:**

  - **User:** Stores user data for the path ./users
  - **Post:** Stores user data for the path ./favorites
  - **Favorite:** Stores user data for the path ./friends
  - **Friend:** Stores user data for the path ./posts
  - **Chat:** Stores user data for the path ./chats
  - **Message:** Stores user data for the path ./messages

#### Messages Model

- **Description:** This model is used to store messages between users
- **Attributes:**

  - **sender:** stroes the id of the sender
  - **content:** stores the content inside the chat
  - **chatroomID:** Assigns an id to the chat
  - **timestamps:** Assigns timestamps

#### Posts Model

- **Description:** This model is used to store posts created by users
- **Attributes:**

  - **userId:** Stores user ID
  - **name:** Stores user name
  - **albumName:** Stores album name
  - **artistName:** Stores artist name
  - **postType:** stores the type of post by user
  - **spotifyId:** stores the Spotify ID
  - **imgUrl:** Stores img URL
  - **timestamps:** Stores time stamps

#### Users Model

- **Description:** This model is used to store user information
- **Attributes:**
  - **firstName:** First name of the user
  - **lastName:** Last name of the user
  - **username:** User name
  - **email:** email
  - **password:** password
  - **bio:** bio of the user
  - **dateOfBirth:** date of birth of the user
  - **userImage:** image of the user
  - **favorites:** favorites data stored in Mongo
  - **friends:** friends of the user
  - **timestamps:** time stamps for the users
