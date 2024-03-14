import express, { json } from "express";
import router from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();

// SETTINGS

app.set("port", process.env.PORT || 3000);

//MIDDLEWARES
app.use(json());

//ROUTES
app.use(router);
app.use("/tasks", taskRoutes);

export default app;
