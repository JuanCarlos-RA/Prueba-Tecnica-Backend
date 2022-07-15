const transactionModel = require('../models/transactions')


/**
 * Create a transaction
 * @param {number} pk_transaction transaction primary key
 * @param {number} fk_user transaction foreign key to user
 * @param {string} description transaction description
 * @param {float} amount transaction amount
 * @returns {{pk_transaction: 1, fk_user: 123, description: "Compra de ticket", amount: 500.5 }}
 */
 const createtransaction = async (pk_transaction,fk_user,description, amount) => {
    try {
        return transactionModel.createTransaction(pk_transaction,fk_user,description, amount)
    } catch (e) {
        throw new Error(e.message)
    }
}


module.exports = {
    createtransaction,
}
