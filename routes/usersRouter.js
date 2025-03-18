const { Router } = require("express")
const usersController = require("../controllers/usersController");

const router = Router();

router.get("/", usersController.getUsernames);

router.get("/new", usersController.createUsernameGet);

router.post("/new", usersController.createUsernamePost);

router.get("/delete", usersController.deleteUsernamesGet);

module.exports = router;