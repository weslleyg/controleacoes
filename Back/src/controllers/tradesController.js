const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const user_id = req.headers.authorization;
        const { page = 1 } = req.query;

        const [count] = await connection('trades')
            .where('user_id', user_id)
            .count()

            res.header('X-Total-Count', count['count(*)'])

        if (!user_id) {
            return res.status(401).json({ error: 'Operation not permitted.'});
        }

        const trades = await connection('trades')
            .where('user_id', user_id)
            .join('users', 'users.id', '=', 'trades.user_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['trades.*', 'users.balance']);

        return res.json(trades)
    },

    async create(req, res) {
        const { 
            date, 
            time, 
            type, 
            ticket,
            entryPrice,
            nShares,
            stopPrice,
            takePrice,
            exitPrice,
            tradeCosts,
            tradeNotes
        } = req.body;

        const user_id = req.headers.authorization;

        if (!user_id) {
            return res.status(401).json({ error: 'Operation not permitted.'});
        }

        const [id] = await connection('trades').insert({
            date, 
            time, 
            type, 
            ticket,
            entryPrice,
            nShares,
            stopPrice,
            takePrice,
            exitPrice,
            tradeCosts,
            tradeNotes,
            user_id
        });

        return res.json({ id });
    },

    async delete(req, res) {
        const { id } = req.params;
        const user_id = req.headers.authorization;

        const trades = await connection('trades')
            .where('id', id)
            .select('user_id')
            .first();

            if (trades.user_id !== user_id) {
                return res.status(401).json({ error: 'Operation not permitted.'});
            }

            await connection('trades').where('id', id).delete();

            return res.status(204).send();

    }
};