// server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import itemsRouter from './routes/items.js';
import indexRouter from './routes/index.js';
import dotenv from 'dotenv';
dotenv.config();
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

// swagger UI integration
const swaggerymlDir = `${process.cwd()}/swagger/swagger.yaml`;
console.log('swaggerymlDir: ', swaggerymlDir)
const swaggerDocument = YAML.load(swaggerymlDir);

const app = express();

app.use(cors({
  origin: true
}))
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'https://effective-space-pancake-r7jqqgxj667hx695-5173.app.github.dev');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });
// Routes
app.use('/v1/api', itemsRouter);
app.use('/', indexRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});