const prompt = require('prompt-sync')()

function main() {
    const notes = []
    const names = []
    for (let i = 0; i < 5; i++) {
        let currentName = prompt(`informa o nome do aluno nº ${i + 1}:`)
        let currentNote = parseFloat(prompt(`informa a nota nº ${i + 1} do aluno:`)) 
        if (currentNote > 5) {
            notes.push(currentNote)
            names.push(currentName)
        }
    }

    notes.forEach((n, i) => {
        console.log( `Aluno ${names[i]} tirou ${n}`);
    });
}

main()