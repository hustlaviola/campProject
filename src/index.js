import express from 'express';
import router from './routes/incidentsRoute';

const app = express();

app.use(express.json());

app.get('/api/v1', (req, res) => {
  res.status(200).send('Welcome to iReporter');
});

app.use('/api/v1', router);

app.use(express.json());

app.all('/*', (req, res) => {
  res.status(404).send({
    status: res.statusCode,
    error: 'The requested url was not found on this server',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.info(`listening on port ${PORT}... `));

export default app;
