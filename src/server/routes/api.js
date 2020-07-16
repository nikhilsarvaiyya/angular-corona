const express = require('express');
const router = express.Router();
require('dotenv').config();
// declare axios for making http requests
const axios = require('axios');
const API = 'https://localhost:3000/api';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

console.log(process.env.DB_PASSWORD) // baconpancakes

// Get all posts
router.get('/states', (req, res) => {
  console.log(res)
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/states`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

router.get('/cities', (req, res) => {
  let payload = [{ name: "nikhil" }, { name: "Vaani" }]
  res.send(payload)
})

module.exports = router;
