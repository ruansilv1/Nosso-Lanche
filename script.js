const cardapio = [
  
  //HAMBURGUER CLASSICO
  {id: 'hh1', name: 'Duplo X-egg', desc: 'Pão de hambúrguer, 2 carnes de hambúrguer, 2 ovos, mussarela, presunto, alface, tomate, cheddar cremoso.', price: 19.00, category: 'hamburguer'},
  {id: 'hh2', name: 'Duplo Simples', desc: 'Pão de hambúrguer, 2 carne de hambúrguer, 2 mussarela, 2 presunto, tomate, alface e molhos', price: 18.00, category: 'hamburguer'},
  {id: 'hh3', name: 'X-calabresa', desc: 'Pão de hambúrguer, carne de hambúrguer, calabresa, cebola dourada, mussarela, presunto, salada, cheddar e molhos', price: 20.00, category: 'hamburguer'}, 
  {id: 'hh4', name: 'X-calafrango', desc: 'Pão de hambúrguer, carne de hambúrguer, salada, frango desfiado, calabresa, mussarela, presunto e molho', price: 20.00, category: 'hamburguer'},
  {id: 'hh5', name: 'X-egg', desc: 'Pão de hambúrguer, presunto, mussarela, ovo, carne de , tomate, alface, mussarela, e molhos', price: 16.50, category: 'hamburguer'},
  {id: 'hh6', name: 'X-egg Bacon', desc: 'Pão de hambúrguer, carne frisa, ovo, bacon, salada, mussarela, presunto, e molhos', price: 20.00, category: 'hamburguer'},
  {id: 'hh7', name: 'X-tudo Tradicional', desc: 'Pão de hambúrguer, carne de hambúrguer, alface, tomate, mussarela, presunto, bacon, frango desfiado, calabresa, ovo e milho verde', price: 25.00, category: 'hamburguer'},

  
  // 🍔 HAMBÚRGUER GOURMET
  { id: 'h1', name: 'Clássico', desc: 'Pão de Hambúrguer, carne bovina 100g, mussarela, alface e tomates selecionados, cebola dourada e cheddar cremoso.', price: 16.00, category: 'hamburguerg' },
  { id: 'h2', name: 'Grill', desc: 'Pão de Hambúrguer, carne bovina 200g, alface e tomates selecionados, presunto, bacon, mussarela, ovo e cheddar cremoso.', price: 22.00, category: 'hamburguerg' },
  { id: 'h3', name: 'Nordestino', desc: 'Pão de Hambúrguer, carne bovina 100g, queijo coalho selado, alface e tomates selecionados, presunto e cheddar cremoso.', price: 17.00, category: 'hamburguerg' },
  { id: 'h4', name: 'Tradicional', desc: 'Pão de Hambúrguer, carne bovina 100g, alface e tomates selecionados, presunto, mussarela e cheddar cremoso.', price: 13.00, category: 'hamburguerg' },
  { id: 'h5', name: 'X-Bacon', desc: 'Pão de Hambúrguer, carne bovina 100g, alface e tomates selecionados, presunto, mussarela, ovo, bacon e cheddar cremoso.', price: 17.00, category: 'hamburguerg' },
  { id: 'h6', name: 'N. Burguer', desc: 'Pão de Hambúrguer, carne bovina 150g, mussarela, molho barbecue, cebola caramelizada e cheddar cremoso.', price: 17.00, category: 'hamburguerg' },
  { id: 'h7', name: 'Especial', desc: 'Pão de Hambúrguer, carne bovina 100g, mussarela, requeijão cremoso, bacon, cebola caramelizada e cheddar cremoso.', price: 16.00, category: 'hamburguerg' },
  { id: 'h8', name: 'X-Tudo', desc: 'Pão de Hambúrguer, carne bovina 100g, alface e tomates selecionados, mussarela, presunto, bacon, frango desfiado, calabresa defumada, ovos, milho verde e cheddar cremoso.', price: 21.00, category: 'hamburguerg' },
  { id: 'h9', name: 'Casa', desc: 'Pão de Hambúrguer, carne bovina 100g, alface e tomates selecionados, mussarela, presunto, frango desfiado, ovos, milho e cheddar cremoso.', price: 17.00, category: 'hamburguerg' },

  // 🥖 BAGUETES
  { id: 'bag1', name: 'Baguete de Costela 20cm', desc: 'Pão 20 cm, requeijão cremoso, barbecue, cebola caramelizada e costela.', price: 20.00, category: 'baguete' },
  { id: 'bag2', name: 'Baguetinha de Costela 13cm', desc: 'Pão 13 cm, requeijão cremoso, barbecue, cebola caramelizada e costela.', price: 13.00, category: 'baguete' },
  { id: 'bag3', name: 'Baguete de Toscana 20cm', desc: 'Pão 20 cm, requeijão cremoso, barbecue, vinagrete e toscana.', price: 20.00, category: 'baguete' },
  { id: 'bag4', name: 'Baguetinha de Toscana 13cm', desc: 'Pão 13 cm, requeijão cremoso, barbecue, vinagrete e toscana.', price: 13.00, category: 'baguete' },

  // 🥟 PASTÉIS
  { id: 'past1', name: 'Carne do Sol', desc: 'Carne do sol, queijo e cebola caramelizada.', price: 13.00, category: 'pastel' },
  { id: 'past2', name: 'Big Pizza', desc: 'Tomate, mussarela, presunto, orégano, catupiry, milho.', price: 13.00, category: 'pastel' },
  { id: 'past3', name: 'Calabresa', desc: 'Calabresa, queijo e cebola caramelizada.', price: 13.00, category: 'pastel' },
  { id: 'past4', name: 'Frango', desc: 'Frango, queijo e milho.', price: 14.00, category: 'pastel' },
  { id: 'past5', name: 'Romeu e Julieta', desc: 'Queijo coalho e goiabada.', price: 11.00, category: 'pastel' },
  { id: 'past6', name: 'Carne moída', desc: 'Carne moída, milho e orégano.', price: 12.00, category: 'pastel' },
  { id: 'past7', name: 'Misto', desc: 'Calabresa, frango, carne moída.', price: 12.00, category: 'pastel' },
  { id: 'past8', name: 'Pizza', desc: 'Mussarela, presunto, tomate e orégano.', price: 9.00, category: 'pastel' },
  { id: 'past9', name: 'Sem Recheio', desc: 'Pastel sem recheio.', price: 5.00, category: 'pastel' },

  // 💰 ACRÉSCIMOS
  { id: 'ac1', name: 'Carne moída', desc: '', price: 5.00, category: 'acrescimo' },
  { id: 'ac2', name: 'Frango', desc: '', price: 5.00, category: 'acrescimo' },
  { id: 'ac3', name: 'Queijo coalho', desc: '', price: 5.00, category: 'acrescimo' },
  { id: 'ac4', name: 'Calabresa', desc: '', price: 5.00, category: 'acrescimo' },
  { id: 'ac5', name: 'Carne do Sol', desc: '', price: 5.00, category: 'acrescimo' },
  { id: 'ac6', name: 'Vinagrete', desc: '', price: 3.00, category: 'acrescimo' },
  { id: 'ac7', name: 'Mussarela', desc: '', price: 2.00, category: 'acrescimo' },
  { id: 'ac8', name: 'Presunto', desc: '', price: 2.00, category: 'acrescimo' },
  { id: 'ac9', name: 'Milho', desc: '', price: 2.00, category: 'acrescimo' },

  // BATATAS 
  { id: 'b1', name: 'Batata Frita 200g', desc: 'Com cheddar e bacon', price: 19.00, category: 'batata' },
  { id: 'b2', name: 'Batata Frita 200g', desc: 'Apenas Batata', price: 13.00, category: 'batata' },
  { id: 'b3', name: 'Batata Frita 200g', desc: 'Com catupiry e bacon', price: 19.00, category: 'batata' },
  { id: 'b4', name: 'Batata Frita 350g', desc: 'Apenas batata', price: 19.00, category: 'batata' },
  { id: 'b5', name: 'Batata Frita 350g', desc: 'Com catupiry e bacon', price: 25.00, category: 'batata' },
  { id: 'b6', name: 'Batata Frita 350g', desc: 'Com cheddar e bacon', price: 25.00, category: 'batata' },

  //bebidas
  { id: 'beb1', name: 'Água com gás', desc: '500ml', price: 5.00, category: 'bebida' },
  { id: 'beb2', name: 'Água mineral', desc: '500ml', price: 5.00, category: 'bebida' },
  { id: 'beb3', name: 'Coca Cola Orginial', desc: '600ml', price: 9.00, category: 'bebida' },
  { id: 'beb4', name: 'Coca Cola Lata', desc: 'Lata 350ml', price: 7.00, category: 'bebida' },
  { id: 'beb5', name: 'Coca Cola Pet', desc: '1L', price: 12.00, category: 'bebida' },
  { id: 'beb6', name: 'Coca Cola Original', desc: 'Lata S/Açúcar 350ml', price: 7.00 , category: 'bebida' },
  { id: 'beb7', name: 'Coca Cola Pet', desc: 'S/Açúcar', price: 12.00 , category: 'bebida' },
  { id: 'beb8', name: 'Fanta Laranja', desc: 'Lata 350ml', price:7.00, category: 'bebida' },
  { id: 'beb9', name: 'Fanta Laranja', desc: '1L', price: 12.00 , category: 'bebida' },
  { id: 'beb10', name: 'Guaraná Antartica MINI', desc: '237ml', price: 5.00 , category: 'bebida' },
  { id: 'beb11', name: 'H2o Limonetos', desc: '500ml', price: 8.00 , category: 'bebida'},
  { id: 'beb12', name: 'MINI coca', desc: 'S/Açúcar 220ml', price: 5.00 , category: 'bebida' },
  { id: 'beb13', name: 'Pepsi MINI', desc: '237ml', price: 5.00 , category: 'bebida' },
  { id: 'beb14', name: 'Guaraná Pet', desc: '1L', price: 12.00 , category: 'bebida' },
  { id: 'beb15', name: 'H2o Limão C/gás', desc: '500ml', price: 8.00 , category: 'bebida' },
  { id: 'beb16', name: 'Skinka Laranja1', desc: '450ml', price: 7.00 , category: 'bebida' },
  { id: 'beb17', name: 'Suco Del Valle', desc: 'Larnja 450ml', price: 7.00 , category: 'bebida' },
  { id: 'beb18', name: 'Suco Del Valle', desc: 'Uva 450ml', price: 7.00 , category: 'bebida' },
  { id: 'beb19', name: 'Sukita', desc: 'Laranja 1L', price: 10.00 , category: 'bebida' },
  { id: 'beb20', name: 'Coca Cola Pet', desc: '200ml', price: 5.00 , category: 'bebida' },
  { id: 'beb21', name: 'Coca Cola Pet', desc: 'S/Açúcar 200ml', price: 5.00 , category: 'bebida' },

  // Combos 
  { id: 'com1', name: 'Combo Kids', desc: '1 Hambúrguer gourmet simples (Pão, carne, presunto, mussarela e molho).<br><br>Batata Frita Normal (P)', price: 23.00 , category: 'combospromocionais' },
  {id: 'com2', name: 'Combo tradicional', desc: '1 Hambúrguer gourmet tradicional<br><br>1 Batata 100g <br><br>1 Regrigerante MINI', price: 25.00 , category: 'combospromocionais'},
  {id: 'com3', name: 'Combo X-bacon', desc: '2 Hambúrguer gourmet X-bacon<br><br>1 Refrigerante de 1 litro', price: 50.00 , category: 'combospromocionais'},

  // 🌿 MACAXEIRA

  { id: 'mx1', name: 'Macaxeira Frita c/ Bode', desc: 'Porção de macaxeira frita, bode frito e queijo.', price: 25.00, category: 'macaxeira' },
  { id: 'mx2', name: 'Macaxeira c/ Carne do Sol', desc: 'Porção de macaxeira frita, carne do sol e queijo.', price: 25.00, category: 'macaxeira' },
  { id: 'mx3', name: 'Macaxeira Mista', desc: 'Porção de macaxeira frita com carne do sol, filé de frango, toscana e queijo.', price: 28.00, category: 'macaxeira' },

  //Cuscuz
  { id: 'c1', name: 'Calabresa Acebolada', desc: 'Cuscuz (P) com calabresa acebolada, queijo e vinagrete', price: 16.00 , category: 'cuscuz' },
  { id: 'c2', name: 'Carne de Sol Acebolada', desc: 'Cuscuz (P) com carne de sol acebolada, queijo e vinagrete', price: 16.00 , category: 'cuscuz' },
  { id: 'c3', name: 'Calabresa Acebolada', desc: 'Cuscuz (P) com calabresa acebolada, queijo e vinagrete', price: 16.00 , category: 'cuscuz' },
  { id: 'c4', name: 'Cabra Macho', desc: 'Cuscuz Recheado (P), frango, calabresa, carne de sol, ovo, catupiry, manteiga de garrafa e vinagrete  ', price: 16.00 , category: 'cuscuz' },
  { id: 'c5', name: 'Bode Frito', desc: 'Porção do cuscuz, porção de bode frito, vinagrete', price: 26.00 , category: 'cuscuz' },
  { id: 'c6', name: 'Carne de Sol e Queijo', desc: 'Porção do cuscuz, porção de carne de sol, queijo coalho e vinagrete', price: 25.00 , category: 'cuscuz' },
  { id: 'c7', name: 'Cabra Macho', desc: 'Cuscuz Recheado (G), frango, calabresa, carne de sol, ovo, catupiry, manteiga de garrafa e vinagrete  ', price: 20.00 , category: 'cuscuz' },
  {id: 'c8', name: 'Recheado Caipira', desc: 'Porção de cuscuz, ovo frito, queijo coaçho, manteiga de garrafa e vinagrete', price: 13.00, category: 'cuscuz'},
  {id: 'c9', name: 'Recheado de Frango', desc: 'Cuscuz (P) Frango desfiado, catupiry e vinagrete', price: 13.00, category: 'cuscuz'}


];


// Carrinho
let carrinho = [];

// Mostra os produtos da categoria
function mostrarCategoria(cat) {
  const cardapioDiv = document.getElementById('cardapio');
  cardapioDiv.innerHTML = '';
  const itens = cardapio.filter(item => item.category === cat);
  itens.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <p><b>R$ ${item.price.toFixed(2)}</b></p>
      <button onclick="adicionarCarrinho('${item.id}')">Adicionar</button>
    `;
    cardapioDiv.appendChild(div);
  });
}

// Adiciona item ao carrinho
function adicionarCarrinho(id) {
  const item = cardapio.find(i => i.id === id);
  carrinho.push(item);
  atualizarCarrinho();
}

// Remove item do carrinho
function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

// Atualiza lista e total
function atualizarCarrinho() {
  const lista = document.getElementById('itens-carrinho');
  const total = document.getElementById('total');
  lista.innerHTML = '';
  let soma = 0;

  carrinho.forEach((item, index) => {
    soma += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.style.marginLeft = '10px';
    btnRemover.onclick = () => removerDoCarrinho(index);
    
    li.appendChild(btnRemover);
    lista.appendChild(li);
  });

  total.textContent = `Total: R$ ${soma.toFixed(2)}`;
}

// Exibe campo de troco se for dinheiro
function mostrarCampoTroco() {
  const pagamento = document.getElementById('pagamentoCliente').value;
  const campoTroco = document.getElementById('campoTroco');
  campoTroco.style.display = pagamento === 'Dinheiro' ? 'block' : 'none';
}

// Finaliza pedido e envia pro WhatsApp
document.getElementById('finalizar').addEventListener('click', () => {
  if (carrinho.length === 0) {
    alert('Carrinho vazio!');
    return;
  }

  const nome = document.getElementById('nomeCliente').value.trim();
  const endereco = document.getElementById('enderecoCliente').value.trim();
  const pagamento = document.getElementById('pagamentoCliente').value;
  const troco = document.getElementById('trocoCliente') ? document.getElementById('trocoCliente').value.trim() : '';
  const obs = document.getElementById('obsCliente').value.trim();

  if (!nome || !endereco || !pagamento) {
    alert('⚠️ Por favor, preencha nome, endereço e forma de pagamento antes de finalizar o pedido.');
    return;
  }

  let msg = `*🍔 Novo Pedido - Nosso Lanche*\n\n`;
  msg += carrinho.map(i => `• ${i.name} - R$ ${i.price.toFixed(2)}`).join('\n');

  const total = carrinho.reduce((t, i) => t + i.price, 0);
  msg += `\n\n*Total:* R$ ${total.toFixed(2)}\n\n`;

  msg += `👤 *Nome:* ${nome}\n`;
  msg += `🏠 *Endereço:* ${endereco}\n`;
  msg += `💳 *Pagamento:* ${pagamento}\n`;

  if (pagamento === 'Dinheiro') {
    if (troco) msg += `💵 *Troco para:* ${troco}\n`;
    else msg += `💵 *Troco:* não informado\n`;
  }

  if (obs) msg += `📝 *Observações:* ${obs}\n`;

  const telefone = '5575991235016'; // DDI 55 + DDD + número
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});