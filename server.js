const next = require('next');
const express = require('express');
const PORT = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare()
  .then( () => {
    const server = express();

    server.get('*', (req, res) => {
      return handler(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`Server started at port ${PORT}`)
    });
  })
  .catch( (ex) => {
    console.log(ex.stack);
    process.exit(1);
  })

