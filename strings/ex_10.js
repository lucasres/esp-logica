const prompt = require("prompt-sync")()

function main() {
    const s = prompt("Informe uma frase: ")
    let totalSpaces = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            totalSpaces++
        }
    }

    console.log(`Total de espaços em brancos: ${totalSpaces}`);
}

main()