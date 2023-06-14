const prompt = require("prompt-sync")()

function main() {
    const totalLoops = 25
    let ageMoreThat50 = 0
    let sumHeigthPeople20A50 = 0
    let countHeigthPeople20A50 = 0
    let countWeigthPeopleLess40 = 0

    for (let i = 0; i < totalLoops; i++) {
        let age = parseInt(prompt("Informe a idade: "))
        let height = parseFloat(prompt("Informe a altura: "))
        let weight = parseFloat(prompt("Informe o peso: "))

        if (age > 50) {
            ageMoreThat50 += 1
        }

        if (age >= 10 && age <= 20 ) {
            sumHeigthPeople20A50 += height
            countHeigthPeople20A50 += 1
        }

        if (weight < 40) {
            countWeigthPeopleLess40 += 1
        }
    }

    console.log(`Pessoas acima de 50: ${ageMoreThat50}`)
    console.log(`Média de altura das pessoas entre 10 e 20: ${sumHeigthPeople20A50 / countHeigthPeople20A50}`)
    console.log(`Percentual de pessoas com menos de 40kg: ${(countWeigthPeopleLess40 / totalLoops) * 100}%`)
}

main()