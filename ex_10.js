const prompt = require("prompt-sync")()

function main() {
    let sumHeight = 0
    let countPeoople = 0

    while (true) {
        const age = parseInt(prompt("Informe a ideade: "))
        const height = parseFloat(prompt("Informe a altura: "))

        if (age <= 0) {
            break
        }

        if (age > 50) {
            sumHeight += height
            countPeoople += 1
        }
    }

    console.log(`A média da altura das pessoas com mais de 50 anos é ${sumHeight/countPeoople}`);
}

main()