// Cria a classe principal: Produto
class Produto {
  constructor(id, nome, descricao, preco, quantidade) {
    (this.id = id),
      (this.nome = nome),
      (this.descricao = descricao),
      (this.preco = preco),
      (this.quantidade = quantidade);
  }
  getNome() {}
  getDescricao() {}
  getPreco() {}
  getQuantidade() {}
  setNome() {}
  setDescricao() {}
  setPreco() {}
  setQuantidade() {}
}

// Implementa a classe Cliente
class Cliente {
  constructor(id, nome, endereco, pagamento) {
    (this.id = id), (this.nome = nome);
    (this.endereco = endereco), (this.pagamento = pagamento);
  }
}

// Implementa a classe de Venda
class Venda {
  constructor(id, data, cliente, produtos) {
    (this.id = id), (this.data = data);
    (this.cliente = cliente), (this.produtos = produtos);
  }
}

// Implementa a classe de usuário Administrador
class Administrador {
  constructor(id, nome) {
    (this.id = id), (this.nome = nome);
  }
  getNome() {}
  cadastrarProduto() {}
  atualizarProduto() {}
  gerarRelatorio() {}
}

// Implementa a classe de Pedidos
class Pedido {
  constructor(id, cliente, status) {
    (this.id = id), (this.cliente = cliente), (this.status = status);
  }
  cancelarPedido() {}
  atualizarStatus() {}
}

// Implementa a classe de itens
class Item {
  constructor(quantidade, produto, venda) {
    (this.quantidade = quantidade),
      (this.produto = produto),
      (this.venda = venda);
  }
  calcularSubtotal() {}
  getProduto() {}
}
