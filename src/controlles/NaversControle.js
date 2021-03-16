const knex = require("../database");

module.exports = {
  async index(req, res, next) {
    try {
      const results = await knex("navers")
        .select("navers.*", "project.*")
        .from("navers")
        .innerJoin("project", "navers.id", "project.navers_id");

      return res.json(results);
    } catch (error) {
      next(error);
    }
  },

  async show(req, res) {
    const { id } = req.params;

    const results = await knex("navers").where({ id });

    return res.json(results);
  },

  async store(req, res, next) {
    const { name, job_role, birthdate, admission_date } = req.body;
    await knex("navers").insert({
      name,
      job_role,
      birthdate,
      admission_date,
    });
    console.log(req.body);
    try {
      await knex("navers").insert({
        name,
        job_role,
        birthdate,
        admission_date,
      });
      return res.status(201).send();
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
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    const { id } = req.params;

    try {
      await knex("navers").where({ id }).del();

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
};
