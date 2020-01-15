import commander from 'commander';

import sum from './sum';

const program = new commander.Command();

program
  .version('0.1.0')
  .description(`Mock  data objects shaped with your TypeScript interfaces`)
  .option('-s, --say [string]', 'echos back string', 'hello, world!')
  .requiredOption('-d, --double <number>', 'must choose a number to double')
  .parse(process.argv);

if (program.double) console.log(`sum: ${sum(program.double, program.double)}`);
if (program.say) console.log(program.say);
