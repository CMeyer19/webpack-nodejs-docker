// All user related routes
import express from "express";
import People from '../schemas/dbPeople'

const PeopleRoutes = express.Router();

PeopleRoutes.get('/', (req, res) => {
    People.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});

PeopleRoutes.post('/', (req, res) => {
    const dbPerson = req.body;

    People.create(dbPerson, (err: any, data: any) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

export default PeopleRoutes;