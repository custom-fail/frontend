const loginUrl = "https://discord.com/api/oauth2/authorize?client_id=988840106938990632&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&response_type=code&scope=identify%20guilds%20applications.commands.permissions.update"
export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) return
  let { authenticated, user } = await useAuth()
  const { query } = useRoute()
  console.log(to.path, authenticated, user, query)
  if(!authenticated) {
    localStorage.setItem("redirectTo", to.path)
    // window.open(loginUrl, "_self")
    return navigateTo(loginUrl, { external: true })
  }
})
