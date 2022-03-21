
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import fileUpload from 'express-fileupload';


import expertRoutes from './routes/experts.js';
import modelRoutes from './routes/models.js';
import usersRoutes from "./routes/user.js";
import blogsRoutes from './routes/blogs.js';
import buildmodel from './routes/buildmodel.js';
import downloadexmpl from './routes/downloadexmpl.js';
import usemodel from './routes/usemodel.js';
import predict from  './routes/predict.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use(fileUpload());
app.use('/experts', expertRoutes);
app.use('/models', modelRoutes);
app.use('/user', usersRoutes);
app.use('/blogs', blogsRoutes);
app.use('/' , buildmodel);
app.use('/' , downloadexmpl);
app.use('/' , usemodel);
app.use('/' , predict);
app.post('/upload', (req, res) => {


  const file = req.files.file;

  file.mv(`MachineLearning/models/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  });
});

const CONNECTION_URL = 'mongodb://akenouch:24861379@cluster0-shard-00-00.p0wac.mongodb.net:27017,cluster0-shard-00-01.p0wac.mongodb.net:27017,cluster0-shard-00-02.p0wac.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-dq29kg-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);