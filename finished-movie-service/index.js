const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())

app.use(express.json());

const rootRouter = require('./routes/root.routes');
app.use('/', rootRouter);

const movieRouter = require('./routes/movies.routes');
app.use('/api/movies', movieRouter);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
