import commander from 'commander';

import parseFile from './parseFile';

const program = new commander.Command();

program
  .name('typemock')
  .version('0.1.0')
  .description(`Mock data objects shaped with your TypeScript interfaces`)
  .option('-o, --out-dir [outDir]', 'output directory for mocked data', '.')
  .requiredOption('-p, --path [path]', 'path to interface to be mocked')
  .requiredOption('-i, --interfaces [interfaces]', 'interface to be mocked')
  .parse(process.argv);

const { interfaces, outDir, path } = program;
console.log({ outDir, path, interfaces });
// TODO
// 1. Access file
const file = parseFile(path);
console.log(file);
// 2. Yeet interfaces by name & type
// 3. forEach named interface, generate data object
// 4. Write data object to file specified in outDir
