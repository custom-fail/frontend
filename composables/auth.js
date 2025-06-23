import {onMounted, onUnmounted, ref} from 'vue'

const loginUrl = "https://discord.com/api/oauth2/authorize?client_id=810280511192432642&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&response_type=code&scope=identify%20guilds"

export const useAuth = async () => {
    const { user, authenticated, authLoaded } = window
    if (!authLoaded) {
        const token = localStorage.getItem("token")
        if (!token) return ({ authenticated: false, user: null })

        const res = await fetch(`http://localhost/users/me`, {
            headers: {
                Authorization: token,
                "User-Id": localStorage.getItem("userId"),
            }
        })

        if(res.status !== 200) {
            localStorage.removeItem("token");
            return { authenticated: false, user: null }
        }

        const userData = await res.json()

        window.authenticated = true
        window.authLoaded = true
        window.user = userData

        return { user: userData, authenticated: true }
    }

    return { user, authenticated }
}

export const useLoginControls = () => {

    const login = async (code) => {
        const params = new URLSearchParams()
        params.append("code", code)

        const res = await fetch(`http://localhost/login?${params}`)
        if(res.status !== 200) return console.log("tak", res.status)

        const { user, token } = await res.json()

        window.authenticated = true
        window.authLoaded = true
        window.user = user

        localStorage.setItem("token", token)
        localStorage.setItem("userId", user.id)
        console.log("done")
    }

    const listen = () => {
        const bc = new BroadcastChannel('login')
        bc.onmessage = (msg) => {
            bc.close()
            login(msg.data)
        }
    }

    const getGuilds = async () => {
        const res = await fetch(`http://localhost/guilds`, {
            headers: {
                Authorization: localStorage.getItem("token"),
                "User-Id": localStorage.getItem("userId")
            }
        })

        if(res.status !== 200) return console.log("tak", res.status)

        return await res.json()
    }

    return { login, listen, getGuilds }

}

export const useLoginPopup = () => {
    return {
        open() {
            window.open(loginUrl, "_blank", "location=yes,height=670,width=520,scrollbars=yes,status=yes")
        }
    }
}

export const useLoginBroadcast = () => {
    return {
        send() {
            const { query } = useRoute()
            const bc = new BroadcastChannel('login');
            if(query.code) {
                bc.postMessage(query.code)
                bc.close()
                setTimeout(() => window.close(), 1000)
            }
        }
    }
}
