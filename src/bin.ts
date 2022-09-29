#!/usr/bin/env node
import { create } from 'create-svelte';
import yargs from 'yargs/yargs';

const main = async () => {
  const argv = yargs(process.argv.slice(2))
    .scriptName('create-svelte-with-args')
    .usage('$0 [args]')
    .epilog('For more information, see https://github.com/storybookjs/create-svelte-with-args')
    .example([
      [
        'npm create svelte-with-args@latest --name=my-new-app --template=default --types=checkjs --prettier --no-eslint --no-playwright',
        'Default app, checking JS types, with Prettier, and no ESLint or Playwright',
      ],
      [
        'npm create svelte-with-args@latest --name=my-new-app --directory=other-dir/my-app --template=default --types=typescript --no-prettier --no-eslint --no-playwright',
        'Default app, installing in specified directory',
      ],
    ])
    .options({
      name: {
        alias: 'n',
        type: 'string',
        description: 'The name of the project',
        demandOption: true,
      },
      directory: {
        alias: 'd',
        type: 'string',
        description: 'The directory to install the project in. Defaults to the project name',
      },
      template: {
        alias: 't',
        type: 'string',
        description: 'The template to use',
        choices: ['default', 'skeleton', 'skeletonlib'] as const,
        demandOption: true,
      },
      types: {
        alias: 'y',
        description: 'How types will be written',
        choices: ['checkjs', 'typescript', null] as any,
        demandOption: true,
        coerce: (value: string) => (value === 'null' ? null : value),
      },
      prettier: {
        alias: 'p',
        type: 'boolean',
        description: 'Whether prettier should be included',
        demandOption: true,
      },
      eslint: {
        alias: 'e',
        type: 'boolean',
        description: 'Whether eslint should be included',
        demandOption: true,
      },
      playwright: {
        alias: 'l',
        type: 'boolean',
        description: 'Whether playwright should be included',
        demandOption: true,
      },
      dry: {
        type: 'boolean',
        description: 'Whether to run in dry run mode, not creating any files',
        default: false,
      },
    })
    .parseSync();

  if (!argv.directory) {
    argv.directory = argv.name;
    argv.d = argv.name;
  }

  if (argv.dry) {
    console.log(`Running in dry run mode, not creating any files.
args received:
${JSON.stringify(argv, null, 2)}
Will call create-svelte with the following arguments:
  create('${argv.directory}', {
    name: '${argv.name}',
    template: '${argv.template}',
    types: ${argv.types ? `'${argv.types}'` : argv.types},
    prettier: ${argv.prettier},
    eslint: ${argv.eslint},
    playwright: ${argv.playwright},
  });`);
    return;
  }

  await create(argv.directory, {
    name: argv.name,
    template: argv.template,
    types: argv.types,
    prettier: argv.prettier,
    eslint: argv.eslint,
    playwright: argv.playwright,
  });

  console.log(`Done. Succesfully created a new Svelte project in ./${argv.directory}`);
};

main().catch((error) => {
  console.error('An unexpected error occurred:', error);
  process.exit(1);
});
