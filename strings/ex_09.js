const prompt = require("prompt-sync")()

function main() {
    const s = prompt("Informe o nome da pessoa: ")
   
    const splited = s.split(' ')

    console.log(`O sobrenome é ${splited[splited.length - 1]}`);
}

main()