import exits from "./exits.ts";
export default function(){
  return {
    name:"esbuild-npm-import-plugin",
    setup(build){
      build.onResolve({ filter: /^npm:/ }, args => ({
        path: args.path,
        namespace: 'npm-import',
      }))
      build.onLoad({ filter: /.*/, namespace: 'npm-import' },async(args)=>{
        const npm=args.path.replace("npm:","");
        const url=`https://esm.run/${npm}`;
        if(!await exits("./.deno/esbuild_npm_import")){
          await Deno.mkdir("./.deno/esbuild_npm_import", { recursive: true });
        }
        if(!await exits(`./.deno/esbuild_npm_import/${npm}`)){
          const res=await fetch(url);
          const text=await res.text();
          await Deno.writeTextFile(`./.deno/esbuild_npm_import/${npm}`,text);
        }
        const js=await Deno.readTextFile(`./.deno/esbuild_npm_import/${npm}`);
        return {
          contents:js,
          //loader: 'url',
        }
      })
    }
  }
}