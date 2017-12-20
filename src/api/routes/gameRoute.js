module.exports = (app) => {

    const ctrl = require("../../core/game/gameController");

    app.get("/api/games", ctrl.selecionar)
    app.post("/api/games", ctrl.inserir)
    app.get("/api/games/:id", ctrl.buscar)
    app.put("/api/games/:id", ctrl.alterar)
    app.delete("/api/games/:id", ctrl.deletar)
}