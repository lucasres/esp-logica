const prompt = require('prompt-sync')()

function double(n) {
    return n * 2
}

function main() {
    n = parseFloat(prompt("Informe um número:"))
    console.log(`O dobro é ${double(n)}`)
}

main()