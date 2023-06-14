const prompt = require("prompt-sync")()

function main() {
    const op = parseInt(prompt("Informe operação: "))
    const num1 = parseFloat(prompt("Informe um número: "))
    const num2 = parseFloat(prompt("Informe um número: "))

    if (op === 1) {
        console.log(`Média é ${(num1 + num2) / 2}`)
    } else if (op === 2) {
        console.log(`Diferença do maior pelo menor é ${num1 > num2 ? num1 - num2 : num2 - num1}`)
    } else if (op === 3) {
        console.log(`O produto é ${num1 * num2}`)
    } else if (op === 4) {
        console.log(`A divisão do primeiro pelo segundo é ${num1 / num2}`)
    } else {
        console.log("Operação inválida")
    }
}

main()