const router = require("express").Router();
const controller = require("./controller");

//'localhost:${port}/main' 경로로 들어가면 controller.js의 mainview가 보인다.
router.get("/main", controller.mainView); 


module.exports = router;