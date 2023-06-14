const prompt = require("prompt-sync")()

function main() {
    const num = parseFloat(prompt("Informe um número: "))

    if (num % 3 === 0) {
        console.log("É um múltiplo de 3")
    } else {
        console.log("Não é um múltiplo de 3")
    }

}

main()