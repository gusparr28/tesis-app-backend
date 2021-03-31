// modules importation
import express from 'express';
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes

// settings
app.set('port', process.env.PORT || 3000);

export default app;