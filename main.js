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

const inputData = fs.readFileSync(options.input, 'utf-8');
const data = JSON.parse(inputData);

let minValue = Infinity;
let minAsset = '';

data.forEach(asset => {
    if (asset.value < minValue) {
        minValue = asset.value;
        minAsset = asset.txt;
    }
});

let result = `${minAsset}:${minValue}`;

if (options.display) {
    console.log(result);
}

if (options.output) {
    fs.writeFileSync(options.output, result);
    console.log('Result saved to:', options.output);
}