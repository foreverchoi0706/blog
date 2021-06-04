const express = require("express");
const cors = require("cors");
//routes
const user = require("./routes/user");
const app = express();

app.use(cors());

app.use("/user", user);

app.get("/", (_, res) => {
    res.status(200).json({
        "success": true
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})