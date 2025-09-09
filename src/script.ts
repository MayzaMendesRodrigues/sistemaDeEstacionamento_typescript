() => {
  console.log("entrou");
  const getInput = (selector: string) =>
    document.querySelector<HTMLInputElement>(selector);
  const registerButton =
    document.querySelector<HTMLButtonElement>("#cadastrar");

  registerButton?.addEventListener("click", () => {
    const inputName = getInput("#name");
    const inputPlaca = getInput("#placa");

    const name = inputName?.value;
    const placa = inputPlaca?.value;
    console.log("clicado");

    if (!name || !placa) {
      alert("Os campos sao obrigatorios");
      return;
    }
  });
};
