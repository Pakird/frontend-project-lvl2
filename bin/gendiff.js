#!/usr/bin/env node

import commander from 'commander';
const program = new commander.Command();

program.version('0.0.1');

program
  .description('Compares two configuration files and shows a difference.')
  .addOption(new commander.Option('-s, --secret').hideHelp())

program.parse(process.argv);
console.log('Options: ', program.opts());