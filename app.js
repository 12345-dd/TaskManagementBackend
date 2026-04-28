require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { sequelize } = require("./models");

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({message: 'Task Manager API is running'});
});


app.use("/user",require("./routes/userRoutes"));
app.use("/tasks",require("./routes/taskRoutes"));


const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log("Database connected");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});