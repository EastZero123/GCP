const express = require("express")

const lowdbController = require("../controller/lowdb-controller.js")

const router = express.Router()

router.get("/section2", lowdbController.getSection2)

router.get("/section4", lowdbController.getSection4)

module.exports = router
