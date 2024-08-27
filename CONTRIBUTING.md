# Contribution guide

> **It's really cool** that you want to contribute to this project, here are simple and straightforward instructions, if you have any further questions, send an email to [email@guiseek.dev](mailto:email@guiseek.dev)

## Branches

Before starting, create a branch from the main branch

```sh
git checkout -b your-task
```

Implement your proposal, check all, commit, submit and open a pull-request.

## Build

```sh
nx build nome-do-projeto
```

## Test

```sh
nx test nome-do-projeto
```

## Lint

```sh
nx lint nome-do-projeto
```


## Commit

```sh
pnpm commit
```

```sh
git push origin your-task
```

![click](./design/pr-button.svg)

## Release

Use the `-d` flag to simulate a release.

```sh
nx release --yes -d
```

If everything is cool

```sh
nx release --yes
```