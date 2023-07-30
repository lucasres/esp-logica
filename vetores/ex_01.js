const prompt = require('prompt-sync')()

function main() {
    const notes = []
    for (let i = 0; i < 10; i++) {
        let currentNote = prompt(`informa a nota nº ${i + 1} do aluno:`) 
        if (currentNote > 5) {
            notes.push(currentNote)
        }
    }

    notes.forEach(n => {
        console.log(n);
    });
}

main()