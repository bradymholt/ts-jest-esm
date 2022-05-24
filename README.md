# ts-jest-esm

This is a project scaffold demonstrating Jest + TypeScript + ESModules working together.

Use `npm test` to run the tests and it should output the following:

```
> npx jest

 PASS  test/index.test.ts
  myFunction
    ✓ returns expected string (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.435 s, estimated 1 s
Ran all test suites.
```

Notes:

- `package.json` contains `"type": "module"`
- `src/tsconfig.json` contains `{ "target": "ES2018", "module": "ES2015", ... }`
- `src/` and `test/` files are written in TypeScript and run as ESModules in Node.js
