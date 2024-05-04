// server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import indexRouter from './routes/index.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});