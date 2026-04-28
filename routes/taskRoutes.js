const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const {createTask,getTasks,updateTask,deleteTask} = require("../controllers/taskController");

router.post("/",authMiddleware,createTask);
router.get("/",authMiddleware,getTasks);
router.put("/:id",authMiddleware,updateTask);
router.delete("/:id",authMiddleware,deleteTask);

module.exports = router;