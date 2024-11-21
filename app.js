const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Route GET pour la racine
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API Node.js !');
});

// Route GET pour récupérer des utilisateurs fictifs
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ];
  res.json(users);
});

// Route POST pour ajouter un utilisateur (simulé)
app.post('/users', (req, res) => {
  const newUser = req.body;
  if (!newUser.name) {
    return res.status(400).json({ error: 'Le nom est requis' });
  }
  // Simuler l'ajout d'un utilisateur
  newUser.id = Math.floor(Math.random() * 1000);
  res.status(201).json(newUser);
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`API en écoute sur http://localhost:${port}`);
});
