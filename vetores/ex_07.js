const prompt = require('prompt-sync')()

function printNumber(a, n) {
    a.forEach((e, i) => {
        if (e === n) {
            console.log(`Número encontrado na posição ${i}`);
        }
    })
}

function main() {
    const list = prompt('Informe os números sepradors por vírgula:').split(',')
    const n = prompt('numero que voce quer procurar:')
    printNumber(list, n)
}

main()