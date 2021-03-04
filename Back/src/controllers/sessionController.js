const connection = require('../database/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
};

module.exports = {
    async create(req, res) {
        const { email, password } = req.body;

        const user = await connection('users')
            .where('email', id)
            .select('password')
            .first();

            console.log(user);

        if (!user) {
            return res.status(400).json({ error: 'User not found!' });
        };

        if(!await bcrypt.compare(password, user.password)) {
            return res.status(400).json('Invalid password!');
        };

        return res.json(user);
    }
};