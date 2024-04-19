const express = require("express");
const router = express();

router.use("/api",require("./api/index.js") );

module.exports = router;