# esbuild-npm-import-plugin
ESBuildでDeno-likeなnpm importを実現する
## Hou to use it?
```typescript
// build.ts
import * as esbuild from "https://deno.land/x/esbuild/mod.js";
import * as esbuild from "https://deno.land/x/esbuild_npm_import_plugin/mod.js";

await build({
  entryPoints: ['src.ts'],
  bundle: true,
  outfile: 'out.js'
})
```
```typescript
// src.ts
import _ from 'npm:lodash';  // <- NPM IMPORT

export default input=>return _.isString(input);
```
