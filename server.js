const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const contactRoutes = require('./routes/contact-routes');
const createPath = require('./helpers/create-path');
const contactApiRoutes = require('./routes/api-contact-routes')

const app = express();

app.set('view engine', 'ejs');

const PORT = process.env.PORT||3000;
const db = 'mongodb+srv://romagren:ZZMOGaTeFlnq8D0m@mycotactdatabase.odgu22v.mongodb.net/node-data-base?retryWrites=true&w=majority'

mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((res) => console.log('Connect to db'))
  .catch((error) => console.log(error))
  

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({ extended: false }));

app.use(express.static('styles'));

app.use(methodOverride('_method'));

app.use(contactRoutes)
app.use(contactApiRoutes)

app.get('/', (req, res) => {
  const title = 'Home';
  res.render(createPath('index'), { title });
});


app.use((req, res) => {
  const title = 'Error Page';
  res
    .status(404)
    .render(createPath('error'), { title });
});
