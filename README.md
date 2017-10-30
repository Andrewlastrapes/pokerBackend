

DigitalCasino


DigitalCasino is an application that uses MERN stack (MongoDB, Express, React, Node.JS) to create a Texas Hole Em’ poker game, and access to up to date sports odds. Socket.io was used for web sockets, passport for authentication, and handlebars for the templating engine. 

When the user logs in, their information is stored in MongoDB. They then have an option to join the poker app, which directly inserts them into the poker game, or search for sports odds. The sports data odds are from JSONdata.com, which is an aggregate of several online sports odds makers. At the time this app was created, users have access to NFL, NBA, and NCAA football. All odds are updated every 30 minuets until game time. I used axios.js, a promise base http client for the browser and node, to make my http request. 





The poker app was first created in React. In order to make the game multiplayer, I moved the game logic code to the backend, and used React only for display. When the backend state changes, it sends the updated state to the front end which renders appropriately. Socket.io is used to connect the server and client side. 









Author : Andrew Lastrapes


Contact:

Andrewlastrapes@gmail.com
https://www.linkedin.com/in/andrew-lastrapes/
