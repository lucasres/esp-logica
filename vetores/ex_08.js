const prompt = require('prompt-sync')()

function printNegative(a) {
    for (let i = 0; i < a.length; i++) {
        if(parseFloat(a[i]) < 0) {
            console.log(`número negativo na posição ${i}`);
            return
        }
    }

    console.log('Sem número negativo');
}

function main() {
    const list = prompt('Informe os números sepradors por vírgula:').split(',')
    printNegative(list)
    
}

main()