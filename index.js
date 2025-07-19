import "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();

// app.use((req, res, next) => {
//   res.json({ message: "En mantenimiento" });
// });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Rest en Node.js #####" });
});

//aca ingreso el nuevo
/*
import authRouter from "./src/routes/auth.router.js";
app.use("/auth", authRouter);
*/


import productsRouter from "./src/routes/products.router.js";
app.use("/api", productsRouter);
/******************************************************************* */

import authRouter from "./src/routes/auth.router.js";
app.use("/auth",authRouter);

//********************************************************************* */
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});
//console.log(process.env);//****************************************************************************** */

//AUTH


//app.use(authRouter);
//router.post("/api/login",login);
//router.post("/api/login",login);



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
