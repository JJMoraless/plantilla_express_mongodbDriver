import { request, response } from "express";
import db from "../../db/conection.js";
import { resOk } from "../utils/functions.js";
const User = db.collection("users");

export class UserCrll {
  static async create(req, res) {
    const data = req.body;
    await User.insertOne({ aaa: "asa" });
    res.status(200).json({ data });
  }

  static async update(res = response, req = request) {
    resOk(res, 200);
  }

  static async delete(res = response, req = request) {}
}
