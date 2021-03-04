
exports.up = function(knex) {
    return knex.schema.createTable('trades', function(table) {
        table.increments();

        table.string('date');
        table.string('time');
        table.string('type');
        table.string('ticket');
        table.string('entryPrice');
        table.string('nShares');
        table.string('stopPrice');
        table.string('takePrice');
        table.string('exitPrice');
        table.string('tradeCosts');
        table.string('tradeNotes');

        table.string('user_id').notNullable();

        table.foreign('user_id').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('trades');
};
