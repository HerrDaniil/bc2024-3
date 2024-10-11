const { program } = require('commander');
const fs = require('fs');

program
    .option('-i, --input <path>', 'path to the file for reading')
    .option('-o, --output <path>', 'path to the result file')
    .option('-d, --display', 'display result in console');

program.parse(process.argv);

const options = program.opts();

if (!options.input) {
    console.error('Please, specify input file');
    process.exit(1);
}

if (!fs.existsSync(options.input)) {
    console.error('Cannot find input file');
    process.exit(1);
}