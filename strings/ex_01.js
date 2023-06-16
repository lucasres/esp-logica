const prompt = require("prompt-sync")()

function main() {
    const s = prompt("informe uma string: ")
    console.log(`Você informou uma string com ${s.length}`);
}

main()