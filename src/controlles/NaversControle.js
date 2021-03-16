const knex = require("../database");

module.exports = {
  async index(req, res, next) {
    try {
      const results = await knex("navers").select(
        "navers.id",
        "navers.name",
        "navers.birthdate",
        "navers.job_role",
        "navers.admission_date"
      );
      return res.json(results);
    } catch (error) {
      next(error);
    }
  },

  async show(req, res, next) {
    try {
      const { id } = req.params;
      const query = knex("navers");

      query
        .where({ "navers.id": id })
        .join("project", "project.navers_id", "=", "navers.id")
        .select(
          "navers.id",
          "navers.name",
          "navers.birthdate",
          "navers.job_role",
          "navers.admission_date",
          "project.project"
        );

      const results = await query;

      return res.send(results);
    } catch (error) {
      next(error);
    }
  },

  async store(req, res, next) {
    const { name, job_role, birthdate, admission_date } = req.body;
    await knex("navers").insert({
      name,
      job_role,
      birthdate,
      admission_date,
    });
    try {
      await knex("navers").insert({
        name,
        job_role,
        birthdate,
        admission_date,
      });
      return res.status(201).send({
        message: "navers criado com suceesso",
      });
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    const { id } = req.params;
    const { name, job_role, birthdate, admission_date } = req.body;

    try {
      await knex("navers")
        .update({ name, job_role, birthdate, admission_date })
        .where({ id });
      return res.status(201).send({
        message: "navers atualizado com suceesso",
      });
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    const { id } = req.params;

    try {
      await knex("navers").where({ id }).del();

      return res.status(201).send({
        message: "navers deletado com suceesso",
      });
    } catch (error) {
      next(error);
    }
  },
};
