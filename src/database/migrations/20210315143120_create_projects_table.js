exports.up = (knex) =>
  knex.schema.createTable("project", (table) => {
    table.increments("id");
    table.text("project");

    table
      .integer("navers_id")
      .references("navers.id")
      .notNullable()
      .onDelete("CASCADE");

    table.timestamp(true, true).defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("project");
