const prompt = require('prompt-sync')()

function main() {
    const numbers = []
    let mean = 0
    for (let i = 0; i < 3; i++) {
        let n = parseFloat(prompt(`informe um número:`)) 
        numbers.push(n)

    }

    console.log(`inverso é ${numbers.reverse()}`);
}

main()