const { Client } = require("pg");
const client = new Client(global.config.sqlConfig);

client.connect()
    .then(() => { console.log("connected") })
    .catch((err) => { console.log(err) });

module.exports = client;