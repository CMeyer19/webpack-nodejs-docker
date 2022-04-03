const dotenv = require('dotenv').config({
    path: '.env'
});

export const connectionString = process.env.CONNECTION_STRING;