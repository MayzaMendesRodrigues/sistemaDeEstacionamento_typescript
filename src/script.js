(function () {
    console.log("entrou");
    var getInput = function (selector) {
        return document.querySelector(selector);
    };
    var registerButton = document.querySelector("#cadastrar");
    registerButton === null || registerButton === void 0 ? void 0 : registerButton.addEventListener("click", function () {
        var inputName = getInput("#name");
        var inputPlaca = getInput("#placa");
        var name = inputName === null || inputName === void 0 ? void 0 : inputName.value;
        var placa = inputPlaca === null || inputPlaca === void 0 ? void 0 : inputPlaca.value;
        console.log("clicado");
        if (!name || !placa) {
            alert("Os campos sao obrigatorios");
            return;
        }
    });
});
console.log("entrou");
