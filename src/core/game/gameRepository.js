const db = require("../../../config/database");

function selecionar(callback) {
    db.query("SELECT * FROM game", (err, result) => {
        if (err)
            return callback(err);

        callback(null, result.rows);
    });
}

function buscar(id, callback) {

}

function inserir(game, callback) {

}

function alterar(id, game, callback) {

}

function deletar(id, callback) {

}

module.exports = {
    selecionar,
    buscar,
    inserir,
    alterar,
    deletar
}