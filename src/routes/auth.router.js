
import { Router } from "express";
const router = Router();

//import { login } from "../controllers/auth.controller.js";

//router.post("/api/login",login);
//router.post("/login",login);
/*router.post("/login",(req,res)=>{

console.log(req,body);
res,json({messge:"OK"});
});


/*
router.post("/login",(req,res)=>{

console.log(req,body);
res,json({messge:"OK"});

}




)

*/
import { login } from "../controllers/auth.controller.js";

//router.post("/login", login);
router.post("/login", login);
export default router;


