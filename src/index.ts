import express from 'express';
import PeopleRoutes from './routes/people';
import Cors from "cors";

const app = express();
console.log(process.env.PORT);
const PORT = Number(process.env.PORT) || 8001;

// Middlewares
app.use(express.json());
app.use(Cors());

// API Endpoints
app.use('/people', PeopleRoutes);

// Listener
app.listen(PORT, () => console.log(`listening on localhost: ${PORT}`));