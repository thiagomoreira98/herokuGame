const express = require("express"),
    bodyParser = require("body-parser");
    cors = require("cors");
    app = express();

require("./config/settings");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

require("./src/api/routes/pingRoute.js")(app);
require("./src/api/routes/gameRoute.js")(app);

app.listen(global.config.port, () => {
    console.log(`SERVER LISTENING ON ${global.config.host}:${global.config.port}`);
});