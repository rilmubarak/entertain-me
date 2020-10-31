# entertainme

A fancy movies list web app with microservices concept applied. This app has :

* RESTful endpoint for Movie's CRUD operation
* RESTful endpoint for Serie's CRUD operation
* Technology includes: 
    - React Js
    - Express Js (Node JS Framework),
    - server-side caching: Redis,
    - Apollo (graphQL),
    - Database: MongoDB,
    - Microservices
    - AWS

---

How to use:

* cd server/services/movie > npm i > node app.js
* cd server/services/serie > npm i > node app.js
* cd server/orchestrator/graphql > npm i > node app.js
* cd client > npm i > npm start

or check the demo here http://entertainme-baril.s3-website-ap-southeast-1.amazonaws.com/