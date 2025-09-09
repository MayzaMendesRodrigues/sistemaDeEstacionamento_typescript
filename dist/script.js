"use strict";
() => {
    console.log("entrou");
    const getInput = (selector) => document.querySelector(selector);
    const registerButton = document.querySelector("#cadastrar");
    registerButton === null || registerButton === void 0 ? void 0 : registerButton.addEventListener("click", () => {
        const inputName = getInput("#name");
        const inputPlaca = getInput("#placa");
        const name = inputName === null || inputName === void 0 ? void 0 : inputName.value;
        const placa = inputPlaca === null || inputPlaca === void 0 ? void 0 : inputPlaca.value;
        console.log("clicado");
        if (!name || !placa) {
            alert("Os campos sao obrigatorios");
            return;
        }
    });
};
//# sourceMappingURL=script.js.map