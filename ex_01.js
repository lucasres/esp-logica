const prompt = require("prompt-sync")()

function main() {
    const n1 = parseFloat(prompt("A nota 1: "))
    const n2 = parseFloat(prompt("A nota 2: "))
    const n3 = parseFloat(prompt("A nota 3: "))
    const n4 = parseFloat(prompt("A nota 4: "))

    const mean = (n1 + n2 + n3 + n4) / 4
    
    console.log(`media foi de ${mean}`);
    if (mean >= 7) {
        console.log("aluno aprovado :)")
    } else {

        console.log("aluno reprovado :(")
    }

}

main()