// const { exec } = require('child_process');

// // Set port (default: 3000). For Heroku, we need to use
// // the port set by the environment variable $PORT
// const port = process.env.PORT || 3000;

// const command = `json-server --watch db.json --port ${port}`;

// exec(command, (err, stdout, stderr) => {
//   if (err) {
//     console.log('Error running exec', err);
//     return;
//   }
//   console.log('stdout:', stdout);
//   console.log('stderr:', stderr);
// });

const data = require("../backend-mock5/db.json");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3000;
server.use(middlewares);
server.use(router);

server.listen(PORT);
