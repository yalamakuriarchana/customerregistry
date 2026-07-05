const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const customerRoutes = require("./routes/customerRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Customer Routes
app.use("/api/customers", customerRoutes);

app.get("/", (req, res) => {
    res.send("Customer Registry Backend Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});