## 1. Environment

* WSL(Ubuntu 20.04.1 LTS (GNU/Linux 4.19.128-microsoft-standard x86_64))
* node v14.16.0
* npm 7.8.0

## 2. Reference

* [TypeScript](https://www.typescriptlang.org/)

### 3. Clone this repogitory

```bash
git clone git@github.com:oasis-forever/typescript_tutorial.git
```

## 4. JEST install for Unit Test

### 4-1. Build a Node.js project

```bash
$ npm init
```

You will be asked some questions, but just keep tapping "Enter" key.

### 4-2. Install required packages

```bash
$ npm install --save-dev jest babel-jest babel-core @babel/core @babel/preset-env
```

### 4-3. Install a plugin with babel to convert JEST to CommonJS

```bash
$ npm install --save-dev jest babel-jest
```

### 4-4. Run a unittest

To execuate all unittests, run `npx jest`.

```bash
$ npx jest
 PASS  __tests__/hello.test.js (24.047 s)
  ✓ Hello (3 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        48.781 s
Ran all test suites.
```

---

To execuate a unittest, run `npx jest ./__test__/{filename}_test.js`.

```bash
$ npx jest ./basic/__tests__/hello_test.js
PASS  basic/__tests__/hello_test.js (15.283 s)
 ✓ hello (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        38.076 s
Ran all test suites matching /basic\/__tests__\/hello_test.js/i.
```
