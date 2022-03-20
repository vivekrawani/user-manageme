import express from "express";
const router = express.Router();

import { getUsers, createUser, getUser, deleteuser, updateUser } from "../controllers/users.js";

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:username', getUser);

router.patch("/:username",updateUser);

router.delete("/:username", deleteuser);

export default router;
