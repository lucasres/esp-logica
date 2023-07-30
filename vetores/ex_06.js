const prompt = require('prompt-sync')()

function main() {
    const numbers = []
    let t = parseFloat(prompt(`quantos números vc quer inserir:`)) 
    for (let i = 0; i < t; i++) {
        let n = parseFloat(prompt(`informe um número:`)) 
        numbers.push(n)
    }

    console.log(`inverso é ${numbers.reverse()}`);
}

main()