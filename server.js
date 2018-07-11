// server.js
const jsonServer = require('json-server');
const port = 3333;
const bodyParser = require('body-parser');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

function createOrder(req, res, next) {
  console.log(`createOrder middleware`);
  console.log(req.body);
  next();
}

server.use(middlewares);
server.use(bodyParser.urlencoded({ extended: true }));
server.post('/createOrder', createOrder);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
