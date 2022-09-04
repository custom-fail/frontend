export default eventHandler(async (event) => {

    const query = useQuery(event);
    if(!query || !query.code) return { body: "Missing code in query", status: 400 }

    const { code } = query

    const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = useRuntimeConfig();

    const params = new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "authorization_code",
        redirect_uri: REDIRECT_URI,
        scopes: "identify guilds",
        code
    })
    console.log(createError({
        statusMessage: "dsadas", statusCode: 402
    }))
    const tokens = await fetch(`https://discord.com/api/oauth2/token?${params}`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });

    if(tokens.status !== 200) throw createError({
        statusMessage: (await tokens.json()).message, statusCode: tokens.status
    })

    const { token_type, access_token } = await tokens.json();
    console.log(token_type, access_token)
    const user = await fetch("https://discord.com/api/users/@me", {
        headers: { "Authorization": `${token_type} ${access_token}` }
    })

    if(user.status !== 200) throw createError({
        statusMessage: (await user.json()).message, statusCode: user.status
    })

    return ({
        body: {
            access_token,
            token_type,
            user: await user.json()
        }
    })

})