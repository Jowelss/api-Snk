import express from 'express';
import apis, { data } from './apisSnK.json';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/apisSnK', (req, res) => {
  res.json(apis);
});

export default app;
