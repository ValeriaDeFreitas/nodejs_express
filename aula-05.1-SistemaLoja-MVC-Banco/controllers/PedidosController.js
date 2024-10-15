import express from 'express';
import Pedido from "../models/Pedido.js"
const router = express.Router()

// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
    Pedido.findAll().then(pedidos => {
        res.render("pedidos", { pedidos })
    })

})

router.post("/pedidos/new", function (req, res) {
    try {
        const pedidoDados = req.body;
        const pedido = Pedido.create({ numero: pedidoDados.numero, valor: pedidoDados.valor })
        res.status(201).send("Cadastrado")
    } catch (e) {
        console.error("erro", e);
        res.status(400);
    }
})
router.get("/pedidos/delete/:id", (req, res) => {
    const id = req.params.id
    Pedido.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/pedidos")
    })
})

router.get("/pedidos/edit/:id", (req, res) => {
    const id = req.params.id
    Pedido.findByPk(id).then(function (pedidos) {
        res.render("pedidoEdit", {
            pedidos: pedidos
        })
    })
})

router.post("/pedidos/update/:id", (req, res) => {
    const id = req.params.id
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco
    Pedido.update(
        {
            nome: nome,
            cpf: cpf,
            endereco: endereco
        },
        { where: { id: id } }
    ).then(() => {
        res.redirect("/pedidos")
    })
})

export default router