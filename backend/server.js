const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const PORT = 3000;
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connecté'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('API Joums-trans fonctionne');
});
 app.listen(PORT, () => {
    console.log(`le serveur backend lancé sur le port ${PORT}`);
    
 });