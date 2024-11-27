# Bug reproduction 

https://github.com/vikejs/vike/issues/1985

## Description

When using `baseUrl` in `tsconfig.json`, i'll get error:

```
8:25:57 PM [vike@0.4.201][Bug] You stumbled upon a Vike bug. Go to https://github.com/vikejs/vike/issues/new and copy-paste this error. A maintainer will fix the bug (usually under 24 hours).
    at isVirtualFileId (/app-deck/node_modules/vike/dist/esm/utils/virtual-files.js:13:4)
    at resolveId (/app-deck/node_modules/vike/dist/esm/node/plugin/plugins/importUserCode/index.js:34:16)
    at /app-deck/node_modules/vite/dist/node/chunks/dep-BWSbWtLw.js:49015:16
    at processTicksAndRejections (native)
```

## Reproduction

1. Bun must be installed
2. Install dependencies `bun install`
3. Run `bun dev`
4. Do request to `http://localhost:3000`
5. Console has no errors
6. Stop dev script

7. Now edit `tsconfig.json` and add `"baseUrl": "./"`
8. Run `bun dev` again
9. Do request to `http://localhost:3000`
10. Now you see error in console
