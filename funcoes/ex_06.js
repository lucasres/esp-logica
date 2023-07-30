function main() {
    const r = {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
    }

    for (let i = 0; i < 1000000; i++) {
        let c = Math.floor(Math.random() * 6) + 1
        r[c] += 1
    }

    console.log(`Probabilidade de 1 é ${r["1"]/1000000}`);
    console.log(`Probabilidade de 2 é ${r["2"]/1000000}`);
    console.log(`Probabilidade de 3 é ${r["3"]/1000000}`);
    console.log(`Probabilidade de 4 é ${r["4"]/1000000}`);
    console.log(`Probabilidade de 5 é ${r["5"]/1000000}`);
    console.log(`Probabilidade de 6 é ${r["6"]/1000000}`);
}

main()