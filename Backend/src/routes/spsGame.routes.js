import { Router } from "express";

import {
  createGame,
  updateGame,
  getGameById,
  getHistoryOfUser,
} from "../controllers/spsGame.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyJWT);

router.route("/create").post(createGame);
router.route("/update/:game_Id").patch(updateGame);
router.route("/info/:game_id").get(getGameById);
router.route("/history").get(getHistoryOfUser);

export default router;
