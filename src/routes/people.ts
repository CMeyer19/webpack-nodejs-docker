import express from "express";
import db from "../queries/user-queries";

const PeopleRoutes = express.Router();

PeopleRoutes.get('/', db.getUsers);

PeopleRoutes.get('/users/:id', db.getUserById);

PeopleRoutes.post('/users', db.createUser);

PeopleRoutes.put('/users/:id', db.updateUser);

PeopleRoutes.delete('/users/:id', db.deleteUser);

export default PeopleRoutes;