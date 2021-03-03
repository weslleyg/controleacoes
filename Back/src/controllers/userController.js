const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const balance = req.body.balance;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('users').insert({
            id,
            balance,
        })

        console.log(balance);

        return res.json({id, balance});
    }
};