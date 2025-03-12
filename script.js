const rifaGrid = document.getElementById("rifa-grid");
const modal = document.getElementById("modal");
const nomeInput = document.getElementById("nome");
const telefoneInput = document.getElementById("telefone");
const pagamentoInput = document.getElementById("pagamento");
const salvarButton = document.getElementById("salvar");
const cancelarButton = document.getElementById("cancelar");

let rifaData = JSON.parse(localStorage.getItem("rifaData")) || Array(100).fill(null);

function renderRifa() {
  rifaGrid.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    const button = document.createElement("button");
    button.textContent = i + 1;
    button.disabled = rifaData[i] !== null;
    button.addEventListener("click", () => openModal(i));
    rifaGrid.appendChild(button);
  }
}

function openModal(index) {
  const data = rifaData[index];
  nomeInput.value = data ? data.nome : "";
  telefoneInput.value = data ? data.telefone : "";
  pagamentoInput.checked = data ? data.pago : false;

  salvarButton.onclick = () => saveData(index);
  cancelarButton.onclick = () => closeModal();

  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

function saveData(index) {
  const nome = nomeInput.value;
  const telefone = telefoneInput.value;
  const pago = pagamentoInput.checked;

  rifaData[index] = { nome, telefone, pago };
  localStorage.setItem("rifaData", JSON.stringify(rifaData));

  closeModal();
  renderRifa();
}

renderRifa();
