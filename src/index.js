import express from 'express';
import router from '../routes/incidentsRoute';

const app = express();

app.use(express.json());

app.use('/api/v1', router);

app.use(express.static('UI'));

app.use(express.json());

const PORT = process.env.port || 5000;
app.listen(PORT, () => console.info(`listening on port ${PORT}...`));

export default app;
