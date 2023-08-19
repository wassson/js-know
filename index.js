#! /usr/bin/env node

const yargs = require("yargs")
const { argv } = yargs(process.argv)

const array = (opts) => {
    console.log("List all Array methods:")
}

array(argv.array);