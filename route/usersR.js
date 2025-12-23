import express from "express";
import { read, selectById, createUser, updateUser, deleteUser } from "../ctrls/usersC.js";

const router = express.Router();

router.get("/", read)
router.get("/:id", selectById)
router.post("/", createUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router