import express from "express";
import dotenv from "dotenv";

import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import service_routes from "./routes/service.js";
import util_routes from "./routes/util.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Docs
// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: process.env.npm_package_version,
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Contact Name",
      },
      servers: [`http://localhost:${port}`],
    },
  },
  apis: ["src/routes/*.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Settings
app.set("port", port);
app.set("json spaces", 2);

// Middleware
app.use(express.json());

// Routes
app.use("/api/service", service_routes);
app.use("/api", util_routes);

// Server
const server = app.listen(port, () => {
  console.log(`Server on port ${port}`);
});

export { app, server };
