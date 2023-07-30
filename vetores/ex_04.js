const prompt = require('prompt-sync')()

function main() {
    const notes = []
    let mean = 0
    for (let i = 0; i < 80; i++) {
        let name = prompt(`informa o nome do aluno nº ${i + 1}:`)
        let n = parseFloat(prompt(`informa a primeira nota nº ${i + 1} do aluno:`)) 
        notes.push({
            name,
            n,
        })
        mean += n
    }

    notes.forEach((n) => {
        console.log( `Aluno ${n.name} tirou ${n.n}`);
    });
    console.log(`media da turma ${mean / 80}`);
}

main()