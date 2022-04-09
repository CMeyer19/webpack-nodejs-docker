import {pool} from "../models/pool";

const getUsers = (request, response) => {
    pool.query(
        'SELECT * FROM users ORDER BY id ASC',
        (error, results) => {
            if (error) console.error(error);

            response.status(200).json(results.rows)
        }
    );
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query(
        'SELECT * FROM users WHERE id = $1',
        [id],
        (error, results) => {
            if (error) console.error(error);

            response.status(200).json(results.rows)
        }
    );
}

const createUser = (request, response) => {
    const {firstName, lastName} = request.body

    pool.query(
        'INSERT INTO users(firstName, lastName) VALUES ($1, $2) RETURNING id;',
        [firstName, lastName],
        (error, result) => {
            if (error) console.error(error);

            const insertedId: number = result.rows.at(0).id;

            response.status(201).send(`User added with ID: ${insertedId}`)
        }
    );
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const {firstName, lastName} = request.body

    pool.query(
        'UPDATE users SET firstName = $1, lastName = $2 WHERE id = $3;',
        [firstName, lastName, id],
        error => {
            if (error) console.error(error);

            response.status(200).send(`User modified with ID: ${id}`)
        }
    );
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query(
        'DELETE FROM users WHERE id = $1',
        [id],
        error => {
            if (error) console.error(error);

            response.status(200).send(`User deleted with ID: ${id}`)
        }
    );
}

export default {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}