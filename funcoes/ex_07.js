const prompt = require('prompt-sync')()


function isCosin(n) {
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            continue
        }

        if (n % i === 0) {
            return false
        }
    }

    return true
}

function main() {
    const n = parseFloat(prompt("informe um numero: "))
    let cosin = isCosin(n)
    const anotherCosin = []

    for (let i = 1; i < n; i++) {
        if (isCosin(i)) {
            anotherCosin.push(i)
        }
    }

    if (cosin) {
        console.log('é primo');
    } else {
        console.log('não é primo');
    }

    console.log(`Os outros primos ate ${n} são: ${anotherCosin}`);
}

main()