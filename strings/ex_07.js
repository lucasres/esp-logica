const prompt = require("prompt-sync")()

function main() {
    const s = prompt("Informe um número: ")
    let out = []

    for (let i = 0; i < s.length; i++) {
        
        switch (s[i]) {
            case '1':
                out.push('um')
                break
            case '2':
                out.push('dois')
                break
            case '3':
                out.push('três')
                break
            case '4':
                out.push('quatro')
                break
            case '5':
                out.push('cinco')
                break
            case '6':
                out.push('seis')
                break
            case '7':
                out.push('sete')
                break
            case '8':
                out.push('oito')
                break
            case '9':
                out.push('nove')
                break
            case '0':
                out.push('zero')
                break
        }
    }
    console.log(out.join(', '));
}

main()