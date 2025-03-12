// Dados de exemplo da venda
let vendas = [
  { numero: 1, nome: "João", telefone: "123456789", pago: true },
  { numero: 2, nome: "Maria", telefone: "987654321", pago: false },
  { numero: 3, nome: "Pedro", telefone: "555666777", pago: true },
  // mais números podem ser adicionados aqui
];

// Exibir os números da rifa
const numbersContainer = document.getElementById("numbers-container");

vendas.forEach(venda => {
  const numberDiv = document.createElement("div");
  numberDiv.classList.add("number");
  numberDiv.dataset.numero = venda.numero;
  numberDiv.innerHTML = `
    <p>${venda.numero}</p>
    <div class="tooltip">Nome: ${venda.nome} | Telefone: ${venda.telefone} | Pago: ${venda.pago ? "Sim" : "Não"}</div>
  `;

  // Mostrar detalhes ao clicar no número
  numberDiv.addEventListener("click", () => {
    showModal(venda);
  });

  // Adicionar número ao container
  numbersContainer.appendChild(numberDiv);
});

// Modal de Exibição de Detalhes
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const cancelSaleBtn = document.getElementById("cancel-sale");
let currentSale = null;

// Mostrar modal com detalhes
function showModal(venda) {
  currentSale = venda;
  document.getElementById("modal-name").textContent = venda.nome;
  document.getElementById("modal-phone").textContent = venda.telefone;
  document.getElementById("modal-status").textContent = venda.pago ? "Pago" : "Não Pago";
  modal.style.display = "block";
}

// Fechar o modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cancelar venda (remover do array de vendas)
cancelSaleBtn.addEventListener("click", () => {
  if (currentSale) {
    vendas = vendas.filter(venda => venda.numero !== currentSale.numero);
    // Remover o número da tela
    const numberDiv = document.querySelector(`[data-numero='${currentSale.numero}']`);
    if (numberDiv) numberDiv.remove();
    modal.style.display = "none";
    alert(`Venda do número ${currentSale.numero} cancelada.`);
  }
});
