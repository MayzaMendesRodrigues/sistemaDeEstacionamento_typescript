const getInput = (selector) => document.querySelector(selector);
const registerButton = document.querySelector("#cadastrar");
function calcularTempo(mil) {
    const min = Math.floor(mil / 60000);
    const seg = Math.floor((mil % 60000) / 1000);
    const precoPormin = 0.10;
    const valor = min * precoPormin;
    return `${min}m e ${seg}s | Valor:€${valor.toFixed(2)}`;
}
// Cria uma única instância do patio
const patio = (function () {
    function ler() {
        return localStorage.patio ? JSON.parse(localStorage.patio) : [];
    }
    function salvar(veiculos) {
        localStorage.setItem("patio", JSON.stringify(veiculos));
    }
    function render() {
        const patioData = ler();
        const tbody = document.querySelector("tbody");
        if (tbody)
            tbody.innerHTML = "";
        if (patioData.length) {
            patioData.forEach((veiculo) => adicionar(veiculo, false));
        }
    }
    function adicionar(veiculo, salva) {
        var _a, _b;
        const row = document.createElement("tr");
        // Formata a data para melhor visualização
        const dataFormatada = new Date(veiculo.entrada).toLocaleString("pt-BR");
        row.innerHTML = `
      <td>${veiculo.name}</td>
      <td>${veiculo.placa}</td>
      <td>${dataFormatada}</td>
      <td>
        <button class="delete" data-placa="${veiculo.placa}">Deletar</button>
      </td>
    `;
        (_a = document.querySelector("tbody")) === null || _a === void 0 ? void 0 : _a.appendChild(row);
        // Adiciona o event listener para o botão delete
        (_b = row.querySelector(".delete")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
            remover(this.dataset.placa);
        });
        if (salva) {
            const patioAtual = ler();
            salvar([...patioAtual, veiculo]);
        }
    }
    function remover(placa) {
        const veiculo = ler().find((v) => v.placa === placa);
        if (!veiculo)
            return; // Se não encontrar o veículo, sai da função
        const tempo = calcularTempo(new Date().getTime() - new Date(veiculo.entrada).getTime());
        // CORREÇÃO AQUI: removi o return desnecessário
        if (!confirm(`O veiculo ${veiculo.name} permaneceu por ${tempo}. Deseja encerrar?`)) {
            return; // Se o usuário cancelar, não remove
        }
        // Remove o veículo e salva
        salvar(ler().filter((veiculo) => veiculo.placa !== placa));
        render();
    }
    // Renderiza os dados iniciais
    render();
    return { adicionar, ler, salvar, render, remover };
})();
registerButton === null || registerButton === void 0 ? void 0 : registerButton.addEventListener("click", () => {
    const inputName = getInput("#name");
    const inputPlaca = getInput("#placa");
    const name = inputName === null || inputName === void 0 ? void 0 : inputName.value;
    const placa = inputPlaca === null || inputPlaca === void 0 ? void 0 : inputPlaca.value;
    if (!name || !placa) {
        alert("Os campos sao obrigatorios");
        return;
    }
    // Usa a instância única do patio
    patio.adicionar({ name, placa, entrada: new Date().toISOString() }, true);
    // Limpa os campos após adicionar
    if (inputName)
        inputName.value = "";
    if (inputPlaca)
        inputPlaca.value = "";
});
console.log("entrou");
//# sourceMappingURL=script.js.map