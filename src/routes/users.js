import { Router } from "express";
import { UserCrll } from "../controllers/users.js";
import { wrapError } from "../middlewares/errorsHandler.js";

export const router = Router();
router.post("/", wrapError(UserCrll.create));
