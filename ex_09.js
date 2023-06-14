const prompt = require("prompt-sync")()

function main() {
    let evenSum = 0
    let pairSum = 0

    for (let i = 0; i < 10; i++) {
        let num = parseInt(prompt("Informe um numero: "))

        if (num % 2 === 0) {
            pairSum += num
        } else {
            evenSum += num
        }
    }

    console.log(`A soma dos pares é ${pairSum}`);
    console.log(`A soma dos impares é ${evenSum}`);
}

main()
