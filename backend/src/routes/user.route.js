import { Router } from "express";

route = Router();

route.method("/login").post(loginUser);
route.method("/signup").post(registerUser);
route.method("/reset").post(resetCredentials);

export default router;
