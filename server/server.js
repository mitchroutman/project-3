const express = require('express');
const path = require('path');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const userModel = require('./models/User')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/insert', async (req, res) => {
  const user = new userModel({username: 'Rick', email: "rickblaine@email.com", password: "password1"});
  try {
    await user.save();
  } catch(err) {
    console.log(err)
  }
})

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});
