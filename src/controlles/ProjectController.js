const knex = require("../database");

module.exports = {
  async index(req, res, next) {
    try {
      const results = await knex("project");

      return res.send(results);
    } catch (error) {
      next(error);
    }
  },
  
  async show(req, res, next) {
    try {
      const { id } = req.params;
      const query = knex("project");

      query
        .where({ "project.id": id })
        .join("navers", "navers.id", "=", "project.navers_id")
        .select(
          "project.*",
          "navers.name",
          "navers.birthdate",
          "navers.job_role",
          "navers.admission_date"
        );

      const results = await query;

      return res.send(results);
    } catch (error) {
      next(error);
    }
  },

  async store(req, res, next) {
    try {
      const { project, navers_id } = req.body;

      await knex("project").insert({
        project,
        navers_id,
      });

      return res.status(201).send(
        {
          messagen:"projecto criado com sucesso"
        }
      );
    } catch (error) {
      next(error);
    }
  },
};
