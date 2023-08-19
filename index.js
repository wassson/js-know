#! /usr/bin/env node

const yargs = require("yargs")
const { argv } = yargs(process.argv)

class Know {
    constructor(opts) {
        this.opts = opts
        if (this.opts === 'array') { this.array() }
    }
    array = () => {
        console.log("List all Array methods:")
    }
}

if (argv.array !== undefined) {
    const know = new Know('array');
    console.log(know);
}
