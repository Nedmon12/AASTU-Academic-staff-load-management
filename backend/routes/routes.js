const routes = require("express").Router();

//routes.use(require("./courseRoutes"));
//routes.use(require("./officeRoutes"));
//routes.use(require("./userRoutes"));
//routes.use(require("./semesterRoutes"));
//routes.use(require("./researchRoutes"));

const courseRoutes = require("./courseRoutes");
routes.use("/courses", courseRoutes);
module.exports = routes;
