const usersTableName: string = 'users';

export const createUsersTable = `
DROP TABLE IF EXISTS ${usersTableName};

CREATE TABLE IF NOT EXISTS ${usersTableName} (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR DEFAULT '',
  lastName VARCHAR DEFAULT ''
)
`;

export const insertUsers = `
INSERT INTO ${usersTableName}(firstName, lastName)
VALUES ('cole', 'meyer'),
      ('meghan', 'dobbin')
`;

export const dropUsersTable = `DROP TABLE ${usersTableName}`;
