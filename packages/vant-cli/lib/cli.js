import { Command } from 'commander';

const program = new Command();

program.command('dev').description('Run dev server').action(async () => {
  const { dev } = await import('./commands/dev.js');
  dev();
})

program.parse();