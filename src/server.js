import express from 'express';
import {config} from 'dotenv';
import MovieRoutes from './routes/movieRoutes.js';

config();

const app = express();

app.use('/movies', MovieRoutes);

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 

// http://localhost:5001/hello