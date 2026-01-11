import fs from "fs";
import path from "path";

const cdn_url = "https://rykadev.github.io/scalar-api-client-single-js";
var [start, end] = ['="','/index.']
const absolutehtml = fs.readFileSync(path.join('docs', 'index.html'), 'utf-8').replaceAll(`${start}.${end}`, `${start}${cdn_url}${end}`);

const absolute_filename = 'absolute.html';
fs.writeFileSync(path.join('docs', absolute_filename), absolutehtml, 'utf-8');

const separator = '\r\n---\r\n\r\n';

const READMEmd = "README.md";
const text = `${separator}

[${absolute_filename}](https://github.com/rykadev/scalar-api-client-single-js/blob/master/docs/${absolute_filename})


\`\`\`html
${absolutehtml}
\`\`\`
`
fs.writeFileSync(READMEmd, fs.readFileSync(READMEmd, 'utf-8').split(separator)[0]+text , 'utf-8')