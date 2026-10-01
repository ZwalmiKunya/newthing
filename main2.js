const config = {
    Theme: "Dark",
    FontSize: 12,
    codeWorking: true,

    show() {
        return Object.entries(this).filter( (([v]) => v != "show")).map( ( ([i,v]) => `${i}: ${v}`) ).join("\n")
    }
}

Object.freeze(config)
console.log(config.show());