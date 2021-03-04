const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const balance = req.body.balance;

        const id = crypto.randomBytes(4).toString('HEX');

        console.log(name, email, password, balance)

        await connection('users').insert({
            id,
            email,
            name,
            password,
            balance
        });

        return res.json({id, name, balance});
    }
};