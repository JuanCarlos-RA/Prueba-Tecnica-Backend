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

/**
 * Get a specific transaction
 * @param {number} pk_transaction transaction primary key
 * @returns {{pk_transaction: 1, fk_user: 123, description: "Compra de ticket", amount: 500.5 }} transaction schema
 */
 const getTransaction = async (pk_transaction) => {
    try {
        return await transactionModel.getTransaction(pk_transaction)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Update an specific transaction
 * @param {number} pk_transaction transaction primary key
 * @param {number} fk_user transaction foreign key to user
 * @param {string} description transaction description
 * @param {float} amount transaction amount
 * @returns {{pk_transaction: 1, fk_user: 123, description: "Devolucion de ticket", amount: 660.5 }}
 */
 const updateTransaction = async (pk_transaction,fk_user,description, amount) => {
    try {
        return transactionModel.updateTransaction(pk_transaction,fk_user,description, amount)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Get a transaction
 * @param {number} fk_user transaction primary key
 * @returns {{pk_transaction: 1, fk_user: 123, description: "Compra de ticket", amount: 500.5 }} List of transactions for each user
 */
 const getTransactionsXuser = async (fk_user) => {
    try {
        return await transactionModel.getTransactionsXuser(fk_user)
    } catch (e) {
        throw new Error(e.message)
    }
}



module.exports = {
    createtransaction,
    getTransaction,
    updateTransaction,
    getTransactionsXuser
}
