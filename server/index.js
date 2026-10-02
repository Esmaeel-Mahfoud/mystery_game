import express from "express";
import dotenv from "dotenv";
import mysteriesRouter from "./router/routes.js";

dotenv.config();

const PORT = Number(process.env.PORT || 3001);

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/mysteries", mysteriesRouter);

app.use((req, res) => {
  res.status(404).json({error: "Route not found."});
});

// app.use((err, req, res, next) => {
//   if (err.type === "entity.parse.failed") {
//     return res.status(400).json({error: "Request body must contain valid JSON."});
//   }

//   if (err.type === "entity.too.large") {
//     return res.status(413).json({error: "Request body is too large."});
//   }

//   console.error(err);
//   res.status(500).json({error: "Something went wrong. Please try again."});
// });

const server = app.listen(PORT, () => {
  console.log(`Mystery Room API running at http://localhost:${PORT}`);
});
