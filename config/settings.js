const config = {
    sqlConfig: {
        host:  process.env.PGHOST || "127.0.0.1",
        user: process.env.PGUSER || "postgres",
        password: process.env.PGPASSWORD || "1234",
        database: process.env.PGDATABASE || "postgres"
    },
    host: "127.0.0.1",
    port: 3001
}

function init() {
    global.config = config;
}

module.exports = init();