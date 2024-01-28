const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connexion à MongoDB (assurez-vous d'ajuster l'URL de connexion)
mongoose.connect(process.env.MONGO_URI || 'mongodb://mongodb:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Schéma Mongoose pour les utilisateurs
const userSchema = new mongoose.Schema({
  user: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/signup', async (req, res) => {
  const { user, email, password } = req.body;

  // Créer un nouvel utilisateur dans la base de données
  const newUser = new User({ user, email, password });
  await newUser.save();

  res.status(200).json({ message: 'User signed up successfully' });
});

app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  // Vérifier les informations d'identification dans la base de données
  const user = await User.findOne({ email, password });

  if (user) {
    res.status(200).json({ message: 'User signed in successfully' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
