export default (async (filename)=>{
    try {
        await Deno.stat(filename);
        return true;
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            return false;
        } else {
            throw error;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvZXNidWlsZC1ucG0taW1wb3J0LXBsdWdpbi9zcmMvZXhpdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGZpbGVuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBEZW5vLnN0YXQoZmlsZW5hbWUpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIERlbm8uZXJyb3JzLk5vdEZvdW5kKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxufTsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxDQUFBLE9BQU8sV0FBdUM7SUFDM0QsSUFBSTtRQUNGLE1BQU0sS0FBSyxJQUFJLENBQUM7UUFDaEIsT0FBTyxJQUFJO0lBQ2IsRUFBRSxPQUFPLE9BQU87UUFDZCxJQUFJLGlCQUFpQixLQUFLLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDekMsT0FBTyxLQUFLO1FBQ2QsT0FBTztZQUNMLE1BQU0sTUFBTTtRQUNkLENBQUM7SUFDSDtBQUNGLENBQUEsRUFBRSJ9