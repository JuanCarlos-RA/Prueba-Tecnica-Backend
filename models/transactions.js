const { postgresql } = require('../databases/postgresql');

/**
 * Create a transaction
 * @param {number} pk_transaction transaction primary key
 * @param {number} fk_user transaction foreign key to user
 * @param {string} description transaction description
 * @param {float} amount transaction amount
 * @returns {{pk_transaction: 1, fk_user: 123, description: "Compra de ticket", amount: 500.5 }}
 */
const createTransaction = (pk_transaction,fk_user,description, amount) => {
    try {
        let transaction = postgresql.public.one(`insert into transactions values ('${pk_transaction}', '${fk_user}','${description}', '${amount}' ) returning *;`);
        return transaction
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Get a specific transaction
 * @param {number} pk_transaction transaction primary key
 * @returns {{pk_transaction: 1, fk_user: 123, description: "Compra de ticket", amount: 500.5 }} transaction schema
 */
 const getTransaction = (pk_transaction) => {

    let transaction = postgresql.public.one(`select * from transactions where pk_transaction = '${pk_transaction}'`);
    return transaction
}

/**
 * Update an specific transaction
 * @param {number} pk_transaction transaction primary key
 * @param {number} fk_user transaction foreign key to user
 * @param {string} description transaction description
 * @param {float} amount transaction amount
 * @returns {{pk_transaction: 1, fk_user: 123, description: "Devolucion de ticket", amount: 660.5 }}
 */
 const updateTransaction = (pk_transaction,fk_user,description, amount) => {

    let transaction = postgresql.public.one(`update transactions SET fk_user = '${fk_user}',
                                                            amount = '${amount}',
                                                            description = '${description}'
                                                            where pk_transaction = '${pk_transaction}'  returning *;`);
    return transaction
}

/**
 * Get a transaction
 * @param {number} fk_user transaction primary key
 * @returns {{pk_transaction: 1, fk_user: 123, description: "Compra de ticket", amount: 500.5 }} List of transactions for each user
 */
 const getTransactionsXuser = (fk_user) => {

    let transaction = postgresql.public.many(`select * from transactions where fk_user = '${fk_user}'`);
    return transaction
}

module.exports = {
    createTransaction,
    getTransaction,
    updateTransaction,
    getTransactionsXuser

}