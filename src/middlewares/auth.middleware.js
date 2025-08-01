import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
   console.log(`Token enviado por el Front End ${token}`);
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) return res.sendStatus(403);
    next();
  });
};