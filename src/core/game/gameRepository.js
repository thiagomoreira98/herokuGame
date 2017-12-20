const pg = require("smn-pg")(global.config.sqlConfig);

const procedures = {
    selecionar: "selecionarGames",
    buscar: "buscarGame",
    inserir: "inserirGame",
    alterar: "alteraeGame",
    deletar: "deletarGame"
}

function selecionar(callback) {
    pg.request()
        .execute(procedures.selecionar, (err, data) => {
            if (err)
                return callback(err);

            callback(null, data);
        });
}

function buscar(id, callback) {
    pg.request()
        .input("pId", id)
        .executeOne(procedures.buscar, (err, data) => {
            if (err)
                return callback(err);

            callback(null, data);
        });
}

function inserir(game, callback) {
    pg.request()
        .input("pNome", game.nome)
        .input("pProdutora", game.produtora)
        .input("pAno", game.ano)
        .execute(procedures.inserir, (err, data) => {
            if (err)
                return callback(err);

            callback(null);
        });
}

function alterar(id, game, callback) {
    pg.request()
        .input("pId", id)
        .input("pNome", game.nome)
        .input("pProdutora", game.produtora)
        .input("pAno", game.ano)
        .execute(procedures.alterar, (err, data) => {
            if (err)
                return callback(err);

            callback(null);
        });
}

function deletar(id, callback) {
    pg.request()
        .input("pId", id)
        .executeOne(procedures.deletar, (err, data) => {
            if (err)
                return callback(err);

            callback(null);
        });
}

module.exports = {
    selecionar,
    buscar,
    inserir,
    alterar,
    deletar
}