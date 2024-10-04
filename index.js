const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let persons = [{
    id: '1',
    name: 'Sam',
    age: '26',
    hobbies: []
}];

module.exports = { persons, app };

// Delay requiring the router until after persons is initialized
const personRouter = require('./api/router/router');
app.use('', personRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});
