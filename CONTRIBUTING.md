# Contributing

### Getting started

Initialize project at current stage

```sh
// acquire source
git clone https://github.com/pouk/idem

cd idem

// install dependencies
npm install
```

### Making changes

**Branching**

Create a topic branch from (usually from `master`)

**Commits**

Make commits of logical and atomic units. Make sure to use _conventional commit
messages_, i.e. following fashion:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

Type must be one of the following:

- `feat` - add new feature
- `fix` - fix or enhancement of existing feature
- `test` - add missing test or refactor existing
- `refactor` - change to production code w/o changing behavior
- `docs` - changes to documentation only
- `chore` - routine work
- `build`
- `ci`
- `perf`
- `style`
- `revert`

The footer should contain any information about **Breaking Changes** and is also the 
place to reference GitHub issues that this commit _Closes_.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or 
two newlines. The rest of the commit message is then used for this.
