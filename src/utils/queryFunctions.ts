import {pool} from '../models/pool';
import {createUsersTable, dropUsersTable, insertUsers} from './queries';

export const executeQueryArray = async arr => new Promise(resolve => {
    const stop = arr.length;

    arr.forEach(async (q, index) => {
        await pool.query(q);
        if (index + 1 === stop) resolve(void 0);
    });
});

export const dropTables = () => executeQueryArray([dropUsersTable]);
export const createTables = () => executeQueryArray([createUsersTable]);
export const insertIntoTables = () => executeQueryArray([insertUsers]);