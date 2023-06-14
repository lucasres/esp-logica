const prompt = require("prompt-sync")()

function main() {
    const num1 = parseFloat(prompt("Informe um número: "))
    const num2 = parseFloat(prompt("Informe um número: "))

    console.log(`Este é o maior numero ${num1 > num2 ? num1 : num2}`);
}

main()