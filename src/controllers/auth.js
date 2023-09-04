import { request, response } from "express";
import { createToken } from "../utils/jwt.js";
import db from "../../db/conection.js";
import { resOk } from "../utils/functions.js";
const User = db.users;

export class AuthCrll {
  static async login(req = request, res = response) {
    const { user } = req;
    const token = await createToken({ sub: user._id, role: user.role });
    resOk(res, 200, token);
  }
}
