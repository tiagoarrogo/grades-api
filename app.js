import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config.js';
import cors from 'cors';
import { db } from './models/index.js';
import {gradeRouter} from './routes/gradeRouter.js'


(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:8080',
  })
);

app.use('/', gradeRouter);

app.listen(process.env.PORT || 8081, () => {});
