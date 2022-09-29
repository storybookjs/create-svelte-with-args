#!/bin/env node
import { create } from 'create-svelte';

const main = async () => {
  // prepare args with yargs

  // pass args along to create-svelte

  await create('my-new-app', {
    name: 'my-new-app',
    template: 'default', // or 'skeleton' or 'skeletonlib'
    types: 'checkjs', // or 'typescript' or null;
    prettier: false,
    eslint: false,
    playwright: false,
  });
};

main();
