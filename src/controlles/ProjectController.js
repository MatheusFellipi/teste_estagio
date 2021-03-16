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
  async index(req, res, next) {
    try {
      const { navers_id } = req.query;
      const query = knex("project");

      if (navers_id) {
        query
          .where({ navers_id })
          .join("navers", "navers.id", "=", "project.navers_id")
          .select(
            "project.*",
            "navers.id",
            "navers.name",
            "navers.birthdate",
            "navers.job_role",
            "navers.admission_date"
          );
      }
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

      return res.status(201).send({
        message: "projeto criando com sucesso",
      });
    } catch (error) {
      next(error);
    }
  },
};
