const prompt = require("prompt-sync")()

function main() {
    const num = parseInt(prompt("Informe um número: "))

    for (let i = 0; i <= 10; i++) {
        console.log(`${i} x ${num} = ${i * num}`);
    }
}

main()