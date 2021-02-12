const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

