import express from 'express'
import Cliente from "../models/Cliente.js"


const router = express.Router()
//Importando o model de Cliente

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
    Cliente.findAll().then(clientes => {
        res.render("clientes", { clientes: clientes })
    })
})

router.post("/clientes/new", function (req, res) {
    try {
        const clientDados = req.body;
        const cliente = Cliente.create({ nome: clientDados.nome, cpf: clientDados.cpf, endereco: clientDados.endereco })
        res.status(201).send("Cadastrado")
    } catch (e) {
        console.error("erro", e);
        res.status(400);
    }
})

router.get("/clientes/delete/:id", (req, res) => {
    const id = req.params.id
    Cliente.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/clientes")
    })
})

router.get("/clientes/edit/:id", (req, res) => {
    const id = req.params.id
    Cliente.findByPk(id).then(function (cliente) {
        res.render("clienteEdit", {
            cliente: cliente
        })
    })
})

router.post("/clientes/update/:id", (req, res) => {
    const id = req.params.id
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco
    Cliente.update(
        {
            nome: nome,
            cpf: cpf,
            endereco: endereco
        },
        { where: { id: id } }
    ).then(() => {
        res.redirect("/clientes")
    })
})
export default router