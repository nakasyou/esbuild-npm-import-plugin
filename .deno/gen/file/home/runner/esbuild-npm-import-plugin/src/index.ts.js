import exits from "./exits.ts";
export default function() {
    return {
        name: "esbuild-npm-import-plugin",
        setup (build) {
            build.onResolve({
                filter: /^npm:/
            }, (args)=>({
                    path: args.path,
                    namespace: 'npm-import'
                }));
            build.onLoad({
                filter: /.*/,
                namespace: 'npm-import'
            }, async (args)=>{
                const npm = args.path.replace("npm:", "");
                const url = `https://esm.run/${npm}`;
                if (!await exits("./.deno/esbuild_npm_import")) {
                    await Deno.mkdir("./.deno/esbuild_npm_import", {
                        recursive: true
                    });
                }
                if (!await exits(`./.deno/esbuild_npm_import/${npm}`)) {
                    const res = await fetch(url);
                    const text = await res.text();
                    await Deno.writeTextFile(`./.deno/esbuild_npm_import/${npm}`, text);
                }
                const js = await Deno.readTextFile(`./.deno/esbuild_npm_import/${npm}`);
                return {
                    contents: js
                };
            });
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvZXNidWlsZC1ucG0taW1wb3J0LXBsdWdpbi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4aXRzIGZyb20gXCIuL2V4aXRzLnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB7XG4gICAgbmFtZTpcImVzYnVpbGQtbnBtLWltcG9ydC1wbHVnaW5cIixcbiAgICBzZXR1cChidWlsZCl7XG4gICAgICBidWlsZC5vblJlc29sdmUoeyBmaWx0ZXI6IC9ebnBtOi8gfSwgYXJncyA9PiAoe1xuICAgICAgICBwYXRoOiBhcmdzLnBhdGgsXG4gICAgICAgIG5hbWVzcGFjZTogJ25wbS1pbXBvcnQnLFxuICAgICAgfSkpXG4gICAgICBidWlsZC5vbkxvYWQoeyBmaWx0ZXI6IC8uKi8sIG5hbWVzcGFjZTogJ25wbS1pbXBvcnQnIH0sYXN5bmMoYXJncyk9PntcbiAgICAgICAgY29uc3QgbnBtPWFyZ3MucGF0aC5yZXBsYWNlKFwibnBtOlwiLFwiXCIpO1xuICAgICAgICBjb25zdCB1cmw9YGh0dHBzOi8vZXNtLnJ1bi8ke25wbX1gO1xuICAgICAgICBpZighYXdhaXQgZXhpdHMoXCIuLy5kZW5vL2VzYnVpbGRfbnBtX2ltcG9ydFwiKSl7XG4gICAgICAgICAgYXdhaXQgRGVuby5ta2RpcihcIi4vLmRlbm8vZXNidWlsZF9ucG1faW1wb3J0XCIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmKCFhd2FpdCBleGl0cyhgLi8uZGVuby9lc2J1aWxkX25wbV9pbXBvcnQvJHtucG19YCkpe1xuICAgICAgICAgIGNvbnN0IHJlcz1hd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICAgIGNvbnN0IHRleHQ9YXdhaXQgcmVzLnRleHQoKTtcbiAgICAgICAgICBhd2FpdCBEZW5vLndyaXRlVGV4dEZpbGUoYC4vLmRlbm8vZXNidWlsZF9ucG1faW1wb3J0LyR7bnBtfWAsdGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QganM9YXdhaXQgRGVuby5yZWFkVGV4dEZpbGUoYC4vLmRlbm8vZXNidWlsZF9ucG1faW1wb3J0LyR7bnBtfWApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbnRlbnRzOmpzLFxuICAgICAgICAgIC8vbG9hZGVyOiAndXJsJyxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXLGFBQWE7QUFFL0IsZUFBZSxXQUFVO0lBQ3ZCLE9BQU87UUFDTCxNQUFLO1FBQ0wsT0FBTSxLQUFLLEVBQUM7WUFDVixNQUFNLFNBQVMsQ0FBQztnQkFBRSxRQUFRO1lBQVEsR0FBRyxDQUFBLE9BQVEsQ0FBQztvQkFDNUMsTUFBTSxLQUFLLElBQUk7b0JBQ2YsV0FBVztnQkFDYixDQUFDO1lBQ0QsTUFBTSxNQUFNLENBQUM7Z0JBQUUsUUFBUTtnQkFBTSxXQUFXO1lBQWEsR0FBRSxPQUFNLE9BQU87Z0JBQ2xFLE1BQU0sTUFBSSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBTztnQkFDbkMsTUFBTSxNQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDO2dCQUNsQyxJQUFHLENBQUMsTUFBTSxNQUFNLCtCQUE4QjtvQkFDNUMsTUFBTSxLQUFLLEtBQUssQ0FBQyw4QkFBOEI7d0JBQUUsV0FBVyxJQUFJO29CQUFDO2dCQUNuRSxDQUFDO2dCQUNELElBQUcsQ0FBQyxNQUFNLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsR0FBRTtvQkFDbkQsTUFBTSxNQUFJLE1BQU0sTUFBTTtvQkFDdEIsTUFBTSxPQUFLLE1BQU0sSUFBSSxJQUFJO29CQUN6QixNQUFNLEtBQUssYUFBYSxDQUFDLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLEVBQUM7Z0JBQy9ELENBQUM7Z0JBQ0QsTUFBTSxLQUFHLE1BQU0sS0FBSyxZQUFZLENBQUMsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUM7Z0JBQ3BFLE9BQU87b0JBQ0wsVUFBUztnQkFFWDtZQUNGO1FBQ0Y7SUFDRjtBQUNGLENBQUMifQ==