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

module.exports = {
    createTransaction,

}