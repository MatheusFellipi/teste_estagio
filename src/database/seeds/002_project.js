exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("project")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("project").insert([
        {
          navers_id: 14,
          project: "Meu projeto",
        },
      ]);
    });
};
