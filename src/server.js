const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const envConfig = {};

if(process.env.NODE_ENV === 'test') envConfig.path = '.env.test'

require('dotenv').config(envConfig);

const app = express();

mongoose.connect(process.env.MONGODB);

app.use(express.json());

// Enable CORS
app.use(cors({ exposedHeaders: 'X-Total-Count' }));

app.get('/', (req, res, next) => res.status(200).send({ 
    title: "studio-ghibli-backend",
    version: "1.0.1" 
}));

const { saveDataApiExternal } = require('./api-data');

if(process.env.NODE_ENV !== 'test') setTimeout(() => { saveDataApiExternal() }, 300);

app.use(routes);

// Adding generic catch
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: error.message });
})

module.exports = app;