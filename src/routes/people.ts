import express from "express";
import {pool} from "../models/pool";

const PeopleRoutes = express.Router();

PeopleRoutes.get('/', (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
});

PeopleRoutes.post('/', (req, res) => {
    const dbPerson = req.body;

    res.status(200).send();
});

export default PeopleRoutes;