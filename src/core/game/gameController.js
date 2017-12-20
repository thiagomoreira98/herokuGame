const repository = require("./gameRepository");

function selecionar(req, res) {
    repository.selecionar((err, data) => {
        if(err)
            return res.status(500).json(err);

        if(!data)
            return res.status(404).json({ message: "Nenhum Registro Encontrado." });

        res.status(200).json(data);
    })
}

function buscar(req, res) {
    repository.buscar(req.params.id, (err, data) => {
        if(err)
            return res.status(500).json(err);

        if(!data)
            return res.status(404).json({ message: "Nenhum Registro Encontrado." });

        res.status(200).json(data);
    })
}

function inserir(req, res) {
    repository.inserir(req.body, (err, data) => {
        if(err)
            return res.status(500).json(err);

        res.status(200).json({ message: "Cadastrado com Sucesso." });
    })
}

function alterar(req, res) {
    repository.alterar(req.params.id, req.body, (err, data) => {
        if(err)
            return res.status(500).json(err);

        res.status(200).json({ message: "Alterado com Sucesso." });
    })
}

function deletar(req, res) {
    repository.deletar(req.params.id, (err, data) => {
        if(err)
            return res.status(500).json(err);

        res.status(200).json({ message: "Removido com Sucesso." });
    })
}

module.exports = {
    selecionar,
    buscar,
    inserir,
    alterar,
    deletar
}