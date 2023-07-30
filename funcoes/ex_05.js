const prompt = require('prompt-sync')()

function typeOfTriangle(l1, l2, l3) {
    if (l1 === l2 && l2 === l3) {
        console.log('Triangulo equilátero');
        return
    }

    if (l1 === l2 || l2 === l3 || l1 === l3) {
        console.log('Triangulo é isósceles');
        return
    }

    console.log('Triangulo é escaleno');
}

function main() {
    const l1 = parseFloat(prompt("Informe o lado 1:"))
    const l2 = parseFloat(prompt("Informe o lado 2:"))
    const l3 = parseFloat(prompt("Informe o lado 3:"))

    if (l1 <= 0 || l2 <= 0 || l3 <= 0) {
        console.log('Obrigatoriamente os 3 numeros devem ser maiores que zero');
        return
    }

    typeOfTriangle(l1,l2,l3)
}

main()