const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

require("./config/db");

const app = express();

app.use(express.json());

const userRoutes = require("./routes/user");
const roleRoutes = require("./routes/role");
const permissionRoutes = require("./routes/permissionRoutes");

app.use("/user", userRoutes);
app.use("/api/roles", roleRoutes);      
app.use("/api/permissions", permissionRoutes);

app.get("/", (req, res) => {
    res.send("Hello World");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});