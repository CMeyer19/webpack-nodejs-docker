import express from "express";
import db from "../queries/user-queries";

const PeopleRoutes = express.Router();

PeopleRoutes.get('/', db.getUsers);

PeopleRoutes.post('/', db.createUser);

PeopleRoutes.get('/:id', db.getUserById);

PeopleRoutes.put('/:id', db.updateUser);

PeopleRoutes.delete('/:id', db.deleteUser);

export default PeopleRoutes;