const prompt = require("prompt-sync")()

function main() {
    const s = "3–14–12–15–20–19–1–4–14–17"
    let out = ""
    let splited = s.split('–')

    for (let i = 0; i < splited.length; i++) {
        // 1 = a, 3 = c, 4 = d, 12 = m, 14 = o, 15 = p, 17 = r, 19 = t, 20 = u
        switch (splited[i]) {
            case '1':
                out += 'a'
                break
            case '3':
                out += 'c'
                break
            case '4':
                out += 'd'
                break
            case '12':
                out += 'm'
                break
            case '14':
                out += 'o'
                break
            case '15':
                out += 'p'
                break
            case '17':
                out += 'r'
                break
            case '19':
                out += 't'
                break
            case '20':
                out += 'u'
                break
        }
    }
    console.log(out);
}

main()