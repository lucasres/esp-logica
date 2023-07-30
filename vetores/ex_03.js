const prompt = require('prompt-sync')()

function main() {
    const notes = []
    for (let i = 0; i < 5; i++) {
        let name = prompt(`informa o nome do aluno nº ${i + 1}:`)
        let n1 = parseFloat(prompt(`informa a primeira nota nº ${i + 1} do aluno:`)) 
        let n2 = parseFloat(prompt(`informa a segunda nota nº ${i + 1} do aluno:`)) 
        notes.push({
            name,
            n1,
            n2,
        })
    }

    notes.forEach((n, i) => {
        console.log( `Aluno ${n.name} tirou ${n.n1} e ${n.n2} e teve media de ${(n.n1 + n.n2)/2}`);
    });
}

main()