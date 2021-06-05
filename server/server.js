/*
atlas login: google
https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/
https://dev.to/paras594/how-to-use-populate-in-mongoose-node-js-mo0
https://www.youtube.com/watch?v=fgTGADljAeg

https://www.youtube.com/watch?v=Ud5xKCYQTjM - jwt
https://www.youtube.com/watch?v=-RCnNyD0L-s login app
*/

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectionOptions = {
  useNewUrlParser: true, useUnifiedTopology: true
}
const connectionString = 'mongodb+srv://test:etsrn3FOBY5UvaRN@newsdata.qdsuf.mongodb.net/NewsData?retryWrites=true&w=majority';
mongoose.connect(connectionString, connectionOptions);

const db = mongoose.connection;
db.on('error', (error)=>console.log(error));
db.once('open', ()=> console.log('connected to database'));


app.use(express.json());

const articleRouter = require('./routes/articles');
app.use('/articles', articleRouter);

app.listen(3000, () => console.log('Server Started'));
