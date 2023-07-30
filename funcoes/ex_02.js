const prompt = require('prompt-sync')()

function printData(d) {
    const [day, month, year] = d.split('/')

    const nameMonths = {
        "01": 'Janeiro',
        "02": 'Fevereiro',
        "03": 'Março',
        "04": 'Abril',
        "05": 'Maio',
        "06": 'Junho',
        "07": 'Julho',
        "08": 'Agosto',
        "09": 'Setembro',
        "10": 'Outubro',
        "11": 'Novembro',
        "12": 'Dezembro',
    }

    console.log(`${day} de ${nameMonths[month]} de ${year}`);
}

function main() {
    const d = prompt("informe uma data:")
    printData(d)
}

main()