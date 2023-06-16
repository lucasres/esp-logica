const prompt = require("prompt-sync")()

function main() {
    const s = prompt("Informe uma frase: ")
    let words = 0
    let chars = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            words++
            continue
        }

        chars++
    }
    
    words++

    console.log(`Total de palavras ${words}`);
    console.log(`Total de caractares ${chars}`);
}

main()