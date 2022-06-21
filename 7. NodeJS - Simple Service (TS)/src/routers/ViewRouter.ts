import { Router } from "express";

import * as controller from "../controllers/ViewController";

const router = Router();

router.get("/harga-sembako", controller.HargaSembako);

export default router;
