const prompt = require("prompt-sync")()

function main() {
    let s = "ifpi"
    let display = ""

    for (let i = 0; i < s.length; i++) {
        display += s.charAt(i)
        console.log(display)
    }

    for (let i = s.length - 1; i >= 0; i--) {
        console.log(display.substring(0, i))
    }
}

main()