const prompt = require("prompt-sync")()

function main() {
    let s = "ifpi"

    for (let i = 0; i <= s.length; i++) {
        console.log(s.substring(0,i))
    }

    for (let i = s.length - 1; i >= 0; i--) {
        console.log(s.substring(0, i))
    }
}

main()