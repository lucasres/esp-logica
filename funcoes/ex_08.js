const prompt = require('prompt-sync')()

function main() {
    let h = parseFloat(prompt("informe as horas: "))
    const m = parseFloat(prompt("informe os minutos: "))
    let format = "A.M."

    if (h > 12) {
        format = "P.M."
        h = h - 12
    }

    console.log(`${h}:${m} ${format}`);   
}

main()