import { Router } from "express";
import passport from "passport";
import { AuthCrll } from "../controllers/auth.js";
import { wrapError } from "../middlewares/errorsHandler.js";

export const router = Router();
router.use(passport.authenticate("local", { session: false }));
router.post("/login", wrapError(AuthCrll.login));
