const prompt = require('prompt-sync')()

function volumeSphere(r) {
    return  (4/3) * Math.PI * r ** 3
}

function main() {
    const r = parseFloat(prompt("Informe o raio:"))
    console.log(`O volume é ${volumeSphere(r)}`)
}

main()