const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const connection = require('../database/connection');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
};

module.exports = {
    async create(req, res) {
        const name = req.body.name;
        const email = req.body.email;
        const password = await bcrypt.hash(req.body.password, 10);
        const balance = req.body.balance;

        const id = crypto.randomBytes(4).toString('HEX');

        try {
            await connection('users').insert({
                id,
                email,
                name,
                password,
                balance
            });
    
            return res.json({
                id,
                name,
                email,
                password,
                balance,
                token: generateToken({ id: id })
            });
        } catch(err) {
            return res.status(401).json({
                error: "Email already exists!"
            });
        };
    }
};