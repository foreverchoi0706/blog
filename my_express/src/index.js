const express = require("express");
const cors = require("cors");
const snakeize = require("snakeize");
const camelize = require("camelize");

//routes
const user = require("./routes/user");

const app = express();

app.use(cors());

app.use("/user", user);

app.get("/", (req, res, next) => {



    const target = { 
        name : "forever_choi",
    }

    return res.status(200).json({
        snakeize: snakeize(target),
        camelize: camelize(target)
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})