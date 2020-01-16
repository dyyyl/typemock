import commander from 'commander';

const program = new commander.Command();

program
  .name('typemock')
  .version('0.1.0')
  .description(`Mock data objects shaped with your TypeScript interfaces`)
  .option('-o, --out-dir [outDir]', 'echos back string', '.')
  .requiredOption(
    '-p, --path [path]',
    'must choose a path to the interface intended for mocking',
  )
  .requiredOption(
    '-i, --interfaces [interfaces]',
    'must name an interface intended for mocking',
  )
  .parse(process.argv);

const { interfaces, outDir, path } = program;
console.log({ outDir, path, interfaces });
// TODO
// 1. Access file
// 2. Yeet interfaces by name & type
// 3. forEach named interface, generate data object
// 4. Write data object to file specified in outDir
