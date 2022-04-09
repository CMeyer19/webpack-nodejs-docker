import express from 'express';
import PeopleRoutes from './routes/people';
import Cors from "cors";
import {createTables, insertIntoTables} from "./utils/queryFunctions";

(async () => {
    await createTables();
    await insertIntoTables();
})();

const app = express();
const PORT = Number(process.env.PORT) || 8001;

// Middlewares
app.use(express.json());
app.use(Cors());

// API Endpoints
app.use('/people', PeopleRoutes);

// Listener
app.listen(PORT, () => console.log(`listening on localhost: ${PORT}`));