import express from "express";
import { routes } from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import "./database";

const app = express();
app.use(express.json());
app.use(routes);

app.use("/api-docs", swaggerUi.serve);
app.use("/api-docs", swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
