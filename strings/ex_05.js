const prompt = require("prompt-sync")()

function main() {
    const s = prompt("Informe uma frase: ")
    const search = prompt("Informe uma palavra da frase: ")
    const value = prompt("Substitua por: ")

    console.log(s.replace(search, value));
    
}

main()