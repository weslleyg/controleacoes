const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const balance = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('users').insert({
            id,
            balance,
        })

        return res.json({id});
    }
};