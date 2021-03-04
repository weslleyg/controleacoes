
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('id').primary();
        table.string('email').notNullable();
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.string('balance').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
