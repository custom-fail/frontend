import { createPatch } from "rfc6902"

const calculateConfig = (changes, config) => {
    return { ...config, ...changes }
}

export const useGuildConfig = async () => {
    const route = useRoute();
    const guildID = route.params?.id;

    let resolved = false;

    if (!guildID) return console.error("Missing guildID");
    if (window.connection) return window.config

    return new Promise((resolve) => {
        const query = new URLSearchParams()
        query.set("User-Id", localStorage.getItem("userId"))
        query.set("Authorization", localStorage.getItem("token"))

        const url = `ws://localhost/guilds/${guildID}?${query}`
        window.connection = new WebSocket(url);
        window.config = ref({})

        window.connection.addEventListener("open", () => {
            console.log("Connected; Listening for configuration updates")
        });

        window.connection.addEventListener("message", (event) => {
            const message = JSON.parse(event.data);
            if (message.action === "UpdateConfigurationData") {
                window.config.value = calculateConfig(message.data.changes, message.data.saved_config)
                if (!resolved) {
                    resolved = true;
                    watch(() => JSON.parse(JSON.stringify(window.config.value)), (newC, oldC) => {
                        if (!oldC || !newC) return;
                        const newConfig = toRaw(newC);
                        const oldConfig = toRaw(oldC);
                        const changes = createPatch(oldConfig, newConfig)
                        console.log(changes)
                    }, {
                        deep: true,
                    })
                    resolve(window.config)
                }
            }
        });

        window.connection.addEventListener("close", () => console.log("Connection closed"));
    })
}
