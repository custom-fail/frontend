const loginUrl = "https://discord.com/api/oauth2/authorize?client_id=896107978145546301&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fservers&response_type=code&scope=identify%20guilds"

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("tak")
  let { authenticated, user } = useAuth()
  console.log(authenticated, user)
  const { query } = useRoute()
  console.log(to.path, authenticated, user, query)
  if(!authenticated) {
    return navigateTo({
      path: "/error",
      query: {
        redirect_to: to.path
      }
    })
  }
})
