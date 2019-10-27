# Prerequisites

## Windows users

\*\* You need to download Bit Bash in order to follow the steps we show in class. Unless you are comfortable with the windows command line.

-   [Git Bash](https://gitforwindows.org/)

## Windows & Mac

-   Everyone needs to have Node.js and NPM installed.
-   Node.js is a Javascript Runtime environment that can execute javascrit outside of the browser
-   NPM is the Node Package Manager, basically a free app store with libraries anyone can use for their programs

### Install Node.js & NPM

-   [Node & NPM](https://nodejs.org/en/)
    -   NPM will get installed along with Node.js

### Install Postman

-   [Postman](https://www.getpostman.com/)
    -   Postman allows you to test your apis by sending any kind of request to any url.

## Node Modules

-   express
-   body-parser
-   mongoose
-   socket.io
-   bluebird
-   nodemon

## Steps

1. npm install ( get all node modules for project )

    - This is a must do

2. set up express server - create app js - start with basic Socket.io config

    - Also a must do

3. basic chat feature

    - make sure you start socket io in both client and server
    - add ability to detect user connection
    - user should be able to send message and backend should receive it
    - backend should broadcast message to others in group chat

4. start connecting database to backend

    - start with dbconnection.js
    - Should we let them create their own DB? it would be faster to use mine.
    - if console gives no errors, we have connected succesfully

5. Create Chat schema

    - under models, create the schema for a chat message
    - a chat contains a message, sender and a timestamp
