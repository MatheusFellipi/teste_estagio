const express = require("express");
const NaversControllers = require("./controlles/NaversControle");
const ProjectController = require("./controlles/ProjectController");
const routes = express.Router();

routes.get("/navers", NaversControllers.index);
routes.get("/navers/:id", NaversControllers.show);

routes.post("/navers", NaversControllers.store);
routes.put("/navers/:id", NaversControllers.update);
routes.delete("/navers/:id", NaversControllers.delete);
 
routes.get("/project", ProjectController.index);


module.exports = routes;
