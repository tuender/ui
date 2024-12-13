# Contributing

Tuender is an MIT-licensed open source project with its ongoing development made by contributors.

## Content location

All the available components and util functions available under `libs/ui`.

## Commit message guidelines

Tuender uses semantic commit messages to have more meaningful messages.

```
<type>(<scope>): <desription>

<body> (optional)

<footer> (optional)

```

Following types available:

- **feat** – new feature or improvement.
- **fix** – bug fix, should possibly reference the issue id in footer or body.
- **docs** – changes to the documentation
- **style** – changes that don’t affect functionality or such as cosmetic changes or formatting.
- **refactor** – code refactoring which does not modify functionality or fix a bug, class changes, name changes, moves, etc.
- **perf** – changes that improve or address performance issues.
- **build** – changes to the build and continuous integration systems, or to run scripts and installer files.
- **test** – adding missing tests or correcting existing tests

The scope field is optional but if a change related to a given component, please refer it.

Example commit message:

```
fix(button): button icon invisible

Fix the button to show icons on the right place at the right time

Fixes #234
```
