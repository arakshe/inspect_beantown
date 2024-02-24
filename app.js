// express framework for dealing with rest api 
// handles HTTP requests
const express = require("express");

// handles route handlers (POST) (GET)
const router = express.Router();


/* References */
// create an express application
const app = express();
// allow to parse requests sent through json
app.use(bodyParser.json());

const route = require("./api/routes/home");

app.use("/students", homepageRoutes); /* --> This leads to another JS file that handles homepageRoutes */


app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: error.message || "Internal Server Error",
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
