const prompt = require("prompt-sync")()

function main() {
    const txtUpper = prompt("Informe um texto em maiúsculo: ")
    console.log(`o texto em minúculos é ${txtUpper.toLowerCase()}`);

    const txtLower = prompt("Informe um texto em maiúsculo: ")
    console.log(`o texto em maiúsculo é ${txtLower.toUpperCase()}`);
}

main()