require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const noteRoutes = require("./routes/notes.routes");
const categoryRoutes = require("./routes/category.routes");
const authRoutes = require("./routes/auth.routes");

app.use("/api/notes", noteRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auth", authRoutes);

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("✅ Database connected with Sequelize");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to the database:", err);
  });
