import express from 'express';
import apis, { data } from './apis.json';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/apis', (req, res) => {
  res.json(apis);
});

export default app;
