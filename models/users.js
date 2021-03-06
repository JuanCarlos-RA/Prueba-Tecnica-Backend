const { postgresql } = require('../databases/postgresql');

/**
 * Create an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @returns {{pk_user: 1, name: "Juan"}}
 */
const createUser = (pk_user, name) => {
    try {
        //En esta linea estaba el Bug, No se estaba pasando ningun valor para el Status
        // let user = postgresql.public.one(`insert into users values ('${pk_user}', '${name}', status) returning *;`);

        let user = postgresql.public.one(`insert into users values ('${pk_user}', '${name}', true) returning *;`);
        return user
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Update an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @param {boolean} status User name
 * @returns {{pk_user: 1, name: "Juan", status: true}}
 */
const updateUser = (pk_user, name, status) => {

    let user = postgresql.public.one(`update users SET name = '${name}', status = '${status}'  where pk_user = '${pk_user}'  returning *;`);
    return user
}

/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @returns {{pk_user: 1, name: "Juan"}} User schema
 */
const getUser = (pk_user) => {

    let user = postgresql.public.one(`select * from users where pk_user = '${pk_user}'`);
    return user
}

/**
 * Delete an specific user
 * @param {number} pk_user User primary key
 * @returns {pk_user: 123} User primary key
 */
const deleteUser = (pk_user) => {

    let user = postgresql.public.one(`delete from users where pk_user = '${pk_user}' returning pk_user;`);
    return user
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
}