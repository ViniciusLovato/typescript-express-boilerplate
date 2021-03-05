import express from "express";
import defaultController from "../controllers/default.controller";

const router = express.Router();

router.route("").get(defaultController.getHello);

export default router;
