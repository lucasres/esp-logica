const prompt = require('prompt-sync')()

function calcSeconds(l1, l2, l3) {
    return (h* 60 * 60) + (m * 60) + s
}

function main() {
    const h = parseFloat(prompt("Informe a quantidade de horas:"))
    const m = parseFloat(prompt("Informe a quantidade de minutos:"))
    const s = parseFloat(prompt("Informe a quantidade de segundos:"))
    console.log(`O total de segungos são ${calcSeconds(h, m, s)}`)
}

main()