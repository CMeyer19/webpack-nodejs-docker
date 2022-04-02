import express from 'express';
import PeopleRoutes from './routes/people';
import mongoose from "mongoose";
import Cors from "cors";

// App Config

const app = express();
const {PORT = 3000} = process.env;
const connectionString = 'mongodb+srv://admin:w52tfgU1IpVpRmqC@cluster0.egakf.mongodb.net/tinderdb?retryWrites=true&w=majority';

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connectionString);

// API Endpoints
app.use('/people', PeopleRoutes);

// Listener
app.listen(PORT, () => console.log(`listening on localhost: ${PORT}`));