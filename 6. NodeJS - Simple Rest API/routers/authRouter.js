const router = require("express").Router();
const controller = require("../controllers/authController");

const endpoint = "/auth";

router.post(endpoint + "/register", controller.register);
router.post(endpoint + "/login", controller.login);

module.exports = router;
