const config = {
    sqlConfig: {
        host: "127.0.0.1",
        user: "postgres",
        password: "1234",
        database: "postgres"
    },
    host: "127.0.0.1",
    port: 3001
}

function init() {
    global.config = config;
}

module.exports = init();