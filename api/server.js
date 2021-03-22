const express = require('express');
const app = express();
const cors = require('cors');

const router = require('./routes/router');

// TODO cofigurando o servidor

app.use(express.json());
app.use(cors());

router(app);



//TODO levantando o server

const port = process.env.PORT || 3001;

app.listen(port, () => {
  // console.log(`Server listening on port ${port}`);
})

module.exports = app;