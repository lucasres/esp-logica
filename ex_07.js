const prompt = require("prompt-sync")()

function main() {
    for (let i = 0; i < 5; i++) {
        let num = parseInt(prompt("Informe um número: "))
        console.log(`O seu quadrado é ${num * num}`)
    }
}

main()