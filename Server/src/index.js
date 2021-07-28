const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./api/queries')
const path = require('path');

const logs = require('./api/queries');

const app = express();

//app.enable('trust proxy'); // needed for rate limiting by Client IP
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://AdamH:QRxyHGrLm-S%4065L@seshmap.hg2ou.mongodb.net/SeshMap?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(morgan('common'));
app.use(helmet());
app.use(cors({}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

//app.use('/api/logs', logs);

app.use('/data', db)

if (process.env.NODE_ENV === "production") {
  app.use(express.static('Client/build'))
  app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server at port: ${port}`);
});