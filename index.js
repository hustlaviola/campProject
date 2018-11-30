const express = require('express');

const app = express();

app.use(express.json());

const incidentRouter = require('./routes/incidentsRoute');

app.use('/api/v1', incidentRouter);

app.use(express.static('UI'));

app.use(express.json());

const PORT = process.env.port || 5000;
app.listen(PORT, () => console.info(`listening on port ${PORT}...`));

module.exports = app;
