import * as esbuild from "https://deno.land/x/esbuild@v0.17.11/mod.js";
import {npmPlugin} from "../../mod.ts"

const result = await esbuild.build({
  plugins: [npmPlugin()],
  entryPoints: [new URL("./src.ts",import.meta.url).toString().replace("file://","")],
  outfile: new URL("./dist.js",import.meta.url).toString().replace("file://",""),
  bundle: true,
  format: "esm",
});
Deno.exit()
