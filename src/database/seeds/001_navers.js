exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("navers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("navers").insert([
        {
          name: "matheus fellipi",
          job_role: "Front end",
          birthdate: "03/12/1998",
          admission_date: "14/03/2021",
        },
      ]);
    });
};
