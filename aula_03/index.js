// Importando o Express na aplicação
const express = require("express"); //CommonJS Modules
// Criando uma instância do Express
const app = express();

// Definindo o EJS como renderizador de páginas
app.set("view engine", "ejs");

// Definir a pasta dos arquivos estáticos (public)
app.use(express.static('public'))

// CRIANDO A ROTA PRINCIPAL
app.get("/", (req, res) => {
  // Será renderizada a página index.ejs que está na pasta 'views'
  res.render("home.ejs");
});

// ROTA CLIENTES
app.get("/clientes", (req, res) => {
  const clientes = [

    { cliente: "Valéria Silva", cpf: "38728973888", endereco: "rua Orquídeas" },
    { cliente: "João Pereira", cpf: "12345678901", endereco: "av. das Palmeiras" },
    { cliente: "Maria Costa", cpf: "23456789012", endereco: "rua dos Lírios" },
    { cliente: "Pedro Oliveira", cpf: "34567890123", endereco: "av. do Sol" },
    { cliente: "Ana Souza", cpf: "45678901234", endereco: "rua das Flores" },
    { cliente: "Lucas Lima", cpf: "56789012345", endereco: "rua dos Jacarandás" },
    { cliente: "Julia Rocha", cpf: "67890123456", endereco: "av. dos Pinheiros" },
    { cliente: "Carlos Almeida", cpf: "78901234567", endereco: "rua da Esperança" },
    { cliente: "Renata Martins", cpf: "89012345678", endereco: "av. do Lago" },
    { cliente: "Thiago Ferreira", cpf: "90123456789", endereco: "rua do Bosque" },
    { cliente: "Fernanda Mendes", cpf: "23456789013", endereco: "rua das Palmeiras" },
    { cliente: "André Dias", cpf: "34567890124", endereco: "rua das Flores" },
    { cliente: "Cláudia Nascimento", cpf: "45678901235", endereco: "av. do Sol" },
    { cliente: "Felipe Cardoso", cpf: "56789012346", endereco: "rua dos Jacarandás" },
    { cliente: "Patrícia Azevedo", cpf: "67890123457", endereco: "av. dos Pinheiros" },
    { cliente: "Rodrigo Pimentel", cpf: "78901234568", endereco: "rua da Esperança" },
    { cliente: "Aline Teixeira", cpf: "89012345679", endereco: "av. do Lago" },
    { cliente: "Vinícius Santos", cpf: "90123456780", endereco: "rua do Bosque" },
    { cliente: "Juliana Castro", cpf: "01234567891", endereco: "rua Orquídeas" },
    { cliente: "Roberto Alves", cpf: "12345678902", endereco: "av. das Palmeiras" },
    { cliente: "Sofia Martins", cpf: "23456789014", endereco: "rua dos Lírios" },
    { cliente: "Eduardo Rocha", cpf: "34567890125", endereco: "av. do Sol" },
    { cliente: "Luana Silva", cpf: "45678901236", endereco: "rua das Flores" },
    { cliente: "Marcos Pinto", cpf: "56789012347", endereco: "rua dos Jacarandás" },
    { cliente: "Isabela Ferreira", cpf: "67890123458", endereco: "av. dos Pinheiros" },
    { cliente: "Diego Ramos", cpf: "78901234569", endereco: "rua da Esperança" },
    { cliente: "Camila Barros", cpf: "89012345680", endereco: "av. do Lago" },
    { cliente: "Thiago Lima", cpf: "90123456781", endereco: "rua do Bosque" },
    { cliente: "Nathalia Gomes", cpf: "01234567892", endereco: "rua Orquídeas" },
    { cliente: "Gabriel Lopes", cpf: "12345678903", endereco: "av. das Palmeiras" },
    { cliente: "Mariana Souza", cpf: "23456789015", endereco: "rua dos Lírios" },
    { cliente: "Ricardo Santos", cpf: "34567890126", endereco: "av. do Sol" },
    { cliente: "Fernanda Lima", cpf: "45678901237", endereco: "rua das Flores" },
    { cliente: "Leandro Almeida", cpf: "56789012348", endereco: "rua dos Jacarandás" },
    { cliente: "Patrícia Silva", cpf: "67890123459", endereco: "av. dos Pinheiros" },
    { cliente: "César Araújo", cpf: "78901234570", endereco: "rua da Esperança" },
    { cliente: "Lívia Carvalho", cpf: "89012345681", endereco: "av. do Lago" },
    { cliente: "Eduardo Lima", cpf: "90123456782", endereco: "rua do Bosque" },
    { cliente: "Bianca Castro", cpf: "01234567893", endereco: "rua Orquídeas" },
    { cliente: "Felipe Mendes", cpf: "12345678904", endereco: "av. das Palmeiras" },
    { cliente: "Patrícia Dias", cpf: "23456789016", endereco: "rua dos Lírios" },
    { cliente: "Marcos Lima", cpf: "34567890127", endereco: "av. do Sol" },
    { cliente: "Sabrina Martins", cpf: "45678901238", endereco: "rua das Flores" },
    { cliente: "Vinícius Santos", cpf: "56789012349", endereco: "rua dos Jacarandás" },
    { cliente: "Mariana Alves", cpf: "67890123460", endereco: "av. dos Pinheiros" },
    { cliente: "Lucas Ribeiro", cpf: "78901234571", endereco: "rua da Esperança" },
    { cliente: "Letícia Fernandes", cpf: "89012345682", endereco: "av. do Lago" },
    { cliente: "Anderson Costa", cpf: "90123456783", endereco: "rua do Bosque" },
    { cliente: "Jéssica Pacheco", cpf: "01234567894", endereco: "rua Orquídeas" }

  ];
  res.render("clientes", {
    // Enviando o array de objetos para a página
    clientes: clientes
  });
});


// ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = [
    {
      produto: "Calça de Tecido Ecológico", imagem: "/imgs/img4.jpg", valor: "R$ 129,90"
    },
    { produto: "Calça de Linho", imagem: "/imgs/img5.webp", valor: "R$ 99,90" },
    { produto: "T-shirt de Algodão Orgânico", imagem: "/imgs/img6.webp", valor: "R$ 49,90" },
    { produto: "Jaqueta de Lã Reciclada", imagem: "/imgs/img7.webp", valor: "R$ 199,90" },
    { produto: "Macacão de Algodão", imagem: "/imgs/img8.webp", valor: "R$ 159,90" },
    { produto: "Blusa de Tencel", imagem: "/imgs/img9.jpg", valor: "R$ 89,90" },
    { produto: "Calça Jeans Sustentável", imagem: "/imgs/img10.webp", valor: "R$ 149,90" },
    { produto: "Camiseta de Lino", imagem: "/imgs/img11.jpg", valor: "R$ 59,90" },
    { produto: "Saia de Poliéster Reciclado", imagem: "/imgs/img12.jpg", valor: "R$ 79,90" },
    { produto: "T-shirt de Algodão Sustentável", imagem: "/imgs/img13.webp", valor: "R$ 54,90" },
    { produto: "Jaqueta de Algodão Orgânico", imagem: "/imgs/img14.jpeg", valor: "R$ 199,90" },
    { produto: "Mochila de Material Reciclado", imagem: "/imgs/img15.webp", valor: "R$ 139,90" },
    { produto: "Shorts de Algodão Orgânico", imagem: "/imgs/img16.png", valor: "R$ 69,90" },
    { produto: "Calça de Algodão Sustentável", imagem: "/imgs/img17.webp", valor: "R$ 119,90" },
    { produto: "Vestido de Linho", imagem: "/imgs/img18.jpg", valor: "R$ 159,90" },
    { produto: "Blusa de Tencel", imagem: "/imgs/img19.jpg", valor: "R$ 79,90" },
    { produto: "Camiseta de Poliéster Reciclado", imagem: "/imgs/img20.webp", valor: "R$ 59,90" },
    { produto: "Jaqueta de Lã Reciclada", imagem: "/imgs/img21.webp", valor: "R$ 199,90" },
    { produto: "Saia de Tecido Ecológico", imagem: "/imgs/img22.webp", valor: "R$ 89,90" },
    { produto: "Macacão de Algodão Orgânico", imagem: "/imgs/img23.jpg", valor: "R$ 159,90" }
  ];




  const produto = req.params.produto;
  res.render("produtos", {
    // Enviando a variável para a página
    // Será chamado na página
    produto: produto, // Variável que está na index (req.params)
    listaProdutos: listaProdutos,
    // Na pagina produtos.ejs haverá uma testagem de condição
  });
});

// ROTA PEDIDOS
app.get("/pedidos", (req, res) => {
  // ARRAY DE OBJETOS COM OS PEDIDOS
  const pedidos = [

    { cliente: "Valéria Silva", codProduto: 101, produto: "Camisa de Algodão Orgânico", valor: 150 },
    { cliente: "João Pereira", codProduto: 102, produto: "Calça Jeans Sustentável", valor: 250 },
    { cliente: "Maria Costa", codProduto: 103, produto: "Vestido de Linho", valor: 300 },
    { cliente: "Pedro Oliveira", codProduto: 104, produto: "Jaqueta Reutilizada", valor: 400 },
    { cliente: "Ana Souza", codProduto: 105, produto: "Saia de Tecido Ecológico", valor: 200 },
    { cliente: "Lucas Lima", codProduto: 106, produto: "Camiseta de Poliéster Reciclado", valor: 100 },
    { cliente: "Julia Rocha", codProduto: 107, produto: "Shorts de Algodão Orgânico", valor: 120 },
    { cliente: "Carlos Almeida", codProduto: 108, produto: "Macacão de Linho", valor: 350 },
    { cliente: "Renata Martins", codProduto: 109, produto: "Mochila de Material Reciclado", valor: 180 },
    { cliente: "Thiago Ferreira", codProduto: 110, produto: "T-shirt de Algodão Orgânico", valor: 80 },
    { cliente: "Fernanda Mendes", codProduto: 111, produto: "Jaqueta de Lã Reciclada", valor: 450 },
    { cliente: "André Dias", codProduto: 112, produto: "Calça de Algodão Sustentável", valor: 260 },
    { cliente: "Cláudia Nascimento", codProduto: 113, produto: "Blusa de Tencel", valor: 220 },
    { cliente: "Felipe Cardoso", codProduto: 114, produto: "Vestido de Algodão Orgânico", valor: 310 },
    { cliente: "Patrícia Azevedo", codProduto: 115, produto: "Camiseta de Lino", valor: 90 },
    { cliente: "Rodrigo Pimentel", codProduto: 116, produto: "Saia de Poliéster Reciclado", valor: 210 },
    { cliente: "Aline Teixeira", codProduto: 117, produto: "Calça de Tecido Ecológico", valor: 275 },
    { cliente: "Vinícius Santos", codProduto: 118, produto: "T-shirt de Algodão Sustentável", valor: 110 },
    { cliente: "Juliana Castro", codProduto: 119, produto: "Shorts de Lã Reciclada", valor: 130 },
    { cliente: "Roberto Alves", codProduto: 120, produto: "Mochila de Algodão Orgânico", valor: 200 },
    { cliente: "Sofia Martins", codProduto: 121, produto: "Camisa de Linho", valor: 175 },
    { cliente: "Eduardo Rocha", codProduto: 122, produto: "Jaqueta de Algodão Sustentável", valor: 500 },
    { cliente: "Luana Silva", codProduto: 123, produto: "Camiseta de Poliéster Reciclado", valor: 95 },
    { cliente: "Marcos Pinto", codProduto: 124, produto: "Vestido de Algodão Orgânico", valor: 290 },
    { cliente: "Isabela Ferreira", codProduto: 125, produto: "Saia de Tecido Ecológico", valor: 230 },
    { cliente: "Diego Ramos", codProduto: 126, produto: "Calça de Linho", valor: 280 },
    { cliente: "Camila Barros", codProduto: 127, produto: "T-shirt de Algodão Orgânico", valor: 120 },
    { cliente: "Thiago Lima", codProduto: 128, produto: "Jaqueta de Lã Reciclada", valor: 460 },
    { cliente: "Nathalia Gomes", codProduto: 129, produto: "Macacão de Algodão Sustentável", valor: 370 },
    { cliente: "Gabriel Lopes", codProduto: 130, produto: "Blusa de Tencel", valor: 240 },
    { cliente: "Mariana Souza", codProduto: 131, produto: "Calça Jeans Sustentável", valor: 260 },
    { cliente: "Ricardo Santos", codProduto: 132, produto: "Camiseta de Lino", valor: 100 },
    { cliente: "Fernanda Lima", codProduto: 133, produto: "Saia de Poliéster Reciclado", valor: 220 },
    { cliente: "Leandro Almeida", codProduto: 134, produto: "T-shirt de Algodão Sustentável", valor: 85 },
    { cliente: "Patrícia Silva", codProduto: 135, produto: "Jaqueta de Algodão Orgânico", valor: 480 },
    { cliente: "César Araújo", codProduto: 136, produto: "Mochila de Material Reciclado", valor: 190 },
    { cliente: "Lívia Carvalho", codProduto: 137, produto: "Shorts de Algodão Orgânico", valor: 130 },
    { cliente: "Eduardo Lima", codProduto: 138, produto: "Calça de Algodão Sustentável", valor: 275 },
    { cliente: "Bianca Castro", codProduto: 139, produto: "Vestido de Linho", valor: 310 },
    { cliente: "Felipe Mendes", codProduto: 140, produto: "Blusa de Tencel", valor: 220 },
    { cliente: "Patrícia Dias", codProduto: 141, produto: "Camiseta de Poliéster Reciclado", valor: 90 },
    { cliente: "Marcos Lima", codProduto: 142, produto: "Jaqueta de Lã Reciclada", valor: 450 },
    { cliente: "Sabrina Martins", codProduto: 143, produto: "Calça Jeans Sustentável", valor: 250 },
    { cliente: "Vinícius Santos", codProduto: 144, produto: "Saia de Tecido Ecológico", valor: 200 },
    { cliente: "Mariana Alves", codProduto: 145, produto: "Macacão de Algodão Orgânico", valor: 370 },
    { cliente: "Lucas Ribeiro", codProduto: 146, produto: "T-shirt de Algodão Sustentável", valor: 100 },
    { cliente: "Letícia Fernandes", codProduto: 147, produto: "Camiseta de Lino", valor: 85 },
    { cliente: "Anderson Costa", codProduto: 148, produto: "Jaqueta de Algodão Sustentável", valor: 460 },
    { cliente: "Jéssica Pacheco", codProduto: 149, produto: "Mochila de Algodão Orgânico", valor: 200 },
    { cliente: "Fernanda Mendes", codProduto: 150, produto: "Saia de Poliéster Reciclado", valor: 210 }

  ];
  res.render("pedidos", {
    // Enviando o array de objetos para a página
    pedidos: pedidos
  });
});

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
