import {onMounted, onUnmounted, ref} from 'vue'

const loginUrl = "https://discord.com/api/oauth2/authorize?client_id=810280511192432642&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&response_type=code&scope=identify%20guilds"

export const useAuth = () => {
    const { user, authenticated } = window
    return { user, authenticated }
}

export const useLoginControls = () => {

    const login = async (code) => {
        const { query } = useRoute()

        const params = new URLSearchParams()
        params.append("code", code)

        const response = await $fetch(`/api/login?${params}`)
        if(response.status !== 200) return

        const { user, token } = await response.json()

        window.authenticated = true
        window.user = user

        localStorage.setItem("token", token)

        await navigateTo(query.redirect_to || "/servers")
    }

    const listen = () => {
        const bc = new BroadcastChannel('login')
        bc.onmessage = (msg) => {
            bc.close()
            login(msg.data)
        }
    }

    return { login, listen }

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