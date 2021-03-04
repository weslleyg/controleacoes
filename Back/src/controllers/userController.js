const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const name = req.body.name;
        const email = req.body.email;
        const password = await bcrypt.hash(req.body.password, 10);
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

        return res.json({id, name, email, password, balance});
    }
};