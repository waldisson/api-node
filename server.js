const express = require('express');

const app = express();
const PORT = 3000;

app.use('/api', require('./src/routes'))
app.listen(PORT, () => console.log(`Listtening on ${PORT}`));
