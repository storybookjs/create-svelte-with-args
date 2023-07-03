# 🏗 [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte) Without The Prompts

> **Warning**
> This package is **not** supported nor endorsed by the maintainers of Svelte.
> If you experience any issues with it you should file them in this repository and not in the official SvelteKit repository.
>
> The Svelte team has been very explicit about not adding CLI arguments to `create-svelte` for good reasons.
> See https://github.com/sveltejs/kit/pull/6117#issuecomment-1221323822

![upstream create-svelte version](https://img.shields.io/badge/upstream_create--svelte-2.0.0--next.180-brightgreen)

`create-svelte-with-args` is a simple wrapper around the [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte) package that allows you to specify the options as CLI arguments instead of using the interactive prompts.

This is useful if you want to automate the creation of SvelteKit projects, which can be pretty hard with interactive prompts.

> **Note**
> If you do not need to create SvelteKit projects programmatically you probabvly just want to use the official `create-svelte` package instead of this one.

## Usage

Run the CLi with

```bash
npm create svelte-with-args [args]
```

The arguments match one to one with the upstream [programmatic `create-svelte` package](https://github.com/sveltejs/kit/tree/master/packages/create-svelte#api). All arguments except `--directory´ are required.

| **Argument**         | **Description**                                                                 | **Type**                                          | **Example**                         |
| -------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------- | ----------------------------------- |
| `--name`, `-n`       | The name of the project                                                         | `string`                                          | `--name=my-new-app`                 |
| `--directory`, `-d`  | Optional. The directory to install the project in. Defaults to the project name | `string`                                          | `--directory=other-dir`             |
| `--template`, `-t`   | The template to use                                                             | One of `"default"`, `"skeleton"`, `"skeletonlib"` | `--template=default`                |
| `--types`, `-y`      | How types will be written                                                       | One of `"checkjs"`, `"typescript"`, `"null"`      | `--types=checkjs`                   |
| `--prettier`, `-p`   | Whether prettier should be included                                             | `boolean`                                         | `--prettier` or `--no-prettier`     |
| `--eslint`, `-e`     | Whether eslint should be included                                               | `boolean`                                         | `--eslint` or `--no-eslint`         |
| `--playwright`, `-l` | Whether playwright should be included                                           | `boolean`                                         | `--playwright` or `--no-playwright` |
| `--vitest`, `-v`     | Whether vitest should be included                                               | `boolean`                                         | `--vitest` or `--no-vitest`         |

### Examples

Create a default project called `my-new-app` that checks JS types with prettier but without eslint and playwright:

```bash
npm create svelte-with-args --name=my-new-app --template=default --types=checkjs --prettier --no-eslint --no-playwright
```

Create a skeleton project without any type checking:

```bash
npm create svelte-with-args --name=my-new-app --template=skeleton --types=null --no-prettier --no-eslint --no-playwright
```

### `--help`

```
create-svelte-with-args [args]

Options:
      --help        Show help                                          [boolean]
      --version     Show version number                                [boolean]
  -n, --name        The name of the project                  [string] [required]
  -d, --directory   The directory to install the project in. Defaults to the
                    project name                                        [string]
  -t, --template    The template to use
             [string] [required] [choices: "default", "skeleton", "skeletonlib"]
  -y, --types       How types will be written
                             [required] [choices: "checkjs", "typescript", null]
  -p, --prettier    Whether prettier should be included     [boolean] [required]
  -e, --eslint      Whether eslint should be included       [boolean] [required]
  -l, --playwright  Whether playwright should be included   [boolean] [required]
  -v, --vitest      Whether vitest should be included       [boolean] [required]
      --dry         Whether to run in dry run mode, not creating any files
                                                      [boolean] [default: false]

Examples:
  npm create svelte-with-args@latest        Default app, checking JS types, with
  --name=my-new-app --template=default      Prettier, and no ESLint, Playwright
  --types=checkjs --prettier --no-eslint    or Vitest
  --no-playwright --no-vitest
  npm create svelte-with-args@latest        Default app, installing in specified
  --name=my-new-app                         directory
  --directory=other-dir/my-app
  --template=default --types=typescript
  --no-prettier --no-eslint
  --no-playwright --no-vitest

For more information, see https://github.com/storybookjs/create-svelte-with-args
```

## Releasing

Releases are handled automatically by [auto](https://github.com/intuit/auto). By setting the correct labels on a pull request, the semantic versioning is handled automatically, GitHub releases are generated as well as a changelog.

Once a pull request has been merged to `main` it is automatically released as the `latest` version.
