import * as esbuild from "https://deno.land/x/esbuild@v0.17.11/mod.js";
import { npmPlugin } from "../../mod.ts";
const result = await esbuild.build({
    plugins: [
        npmPlugin()
    ],
    entryPoints: [
        new URL("./src.ts", import.meta.url).toString().replace("file://", "")
    ],
    outfile: new URL("./dist.js", import.meta.url).toString().replace("file://", ""),
    bundle: true,
    format: "esm"
});
Deno.exit();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvZXNidWlsZC1ucG0taW1wb3J0LXBsdWdpbi90ZXN0L21haW4vYnVpbGQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXNidWlsZCBmcm9tIFwiaHR0cHM6Ly9kZW5vLmxhbmQveC9lc2J1aWxkQHYwLjE3LjExL21vZC5qc1wiO1xuaW1wb3J0IHtucG1QbHVnaW59IGZyb20gXCIuLi8uLi9tb2QudHNcIlxuXG5jb25zdCByZXN1bHQgPSBhd2FpdCBlc2J1aWxkLmJ1aWxkKHtcbiAgcGx1Z2luczogW25wbVBsdWdpbigpXSxcbiAgZW50cnlQb2ludHM6IFtuZXcgVVJMKFwiLi9zcmMudHNcIixpbXBvcnQubWV0YS51cmwpLnRvU3RyaW5nKCkucmVwbGFjZShcImZpbGU6Ly9cIixcIlwiKV0sXG4gIG91dGZpbGU6IG5ldyBVUkwoXCIuL2Rpc3QuanNcIixpbXBvcnQubWV0YS51cmwpLnRvU3RyaW5nKCkucmVwbGFjZShcImZpbGU6Ly9cIixcIlwiKSxcbiAgYnVuZGxlOiB0cnVlLFxuICBmb3JtYXQ6IFwiZXNtXCIsXG59KTtcbkRlbm8uZXhpdCgpXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxhQUFhLDhDQUE4QztBQUN2RSxTQUFRLFNBQVMsUUFBTyxlQUFjO0FBRXRDLE1BQU0sU0FBUyxNQUFNLFFBQVEsS0FBSyxDQUFDO0lBQ2pDLFNBQVM7UUFBQztLQUFZO0lBQ3RCLGFBQWE7UUFBQyxJQUFJLElBQUksWUFBVyxZQUFZLEdBQUcsRUFBRSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVU7S0FBSTtJQUNuRixTQUFTLElBQUksSUFBSSxhQUFZLFlBQVksR0FBRyxFQUFFLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVTtJQUMzRSxRQUFRLElBQUk7SUFDWixRQUFRO0FBQ1Y7QUFDQSxLQUFLLElBQUkifQ==