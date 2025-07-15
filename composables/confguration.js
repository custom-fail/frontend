import { createPatch, applyPatch } from "rfc6902"

const calculateConfig = (changes, config) => {
    const combinedChanges = changes.flatMap(patch => patch.changes)
    console.log(combinedChanges)
    applyPatch(config, combinedChanges)
    return config
}

export const useGuildConfig = async () => {
    const route = useRoute();
    const guildID = route.params?.id;

    let resolved = false;

    if (!guildID) return console.error("Missing guildID");
    if (window.connection) return window.configPromise

    const configPromise = new Promise((resolve) => {
        const query = new URLSearchParams()
        query.set("User-Id", localStorage.getItem("userId"))
        query.set("Authorization", localStorage.getItem("token"))

        const url = `ws://localhost/guilds/${guildID}?${query}`
        window.connection = new WebSocket(url);
        window.config = ref({})
        window.users = ref([])
        window.isSaved = ref(true)

        window.connection.addEventListener("open", () => {
            console.log("Connected; Listening for configuration updates")
        });

        window.connection.addEventListener("message", (event) => {
            const message = JSON.parse(event.data);
            if (message.action === "Initialization") {
                window.config.value = calculateConfig(message.data.changes, message.data.saved_config)
                window.isSaved.value = message.data.changes.length === 0

                watch(
                    () => JSON.parse(JSON.stringify(window.config.value)),
                    (newC, oldC) => {
                        if (!oldC || !newC) return;
                        const newConfig = toRaw(newC);
                        const oldConfig = toRaw(oldC);
                        const changes = createPatch(oldConfig, newConfig)
                        console.debug(changes)
                        if (changes.length === 0) return;
                        window.connection.send(JSON.stringify({
                            action: "GuildConfigUpdate",
                            data: changes
                        }));
                    },
                    { deep: true }
                )

                resolve({
                    config: window.config,
                    users: window.users,
                    isSaved: window.isSaved,
                    save: () => {
                        window.connection.send(JSON.stringify({ action: "ApplyChanges" }))
                        // setTimeout(() => window.connection.send(JSON.stringify({ action: "SynchronizeCommands" })), 10000)
                    }
                })
            } else if (message.action === "PushChange") {
                if (window.config?.value) applyPatch(window.config.value, message.data.changes)
                window.isSaved.value = false
            } else if (message.action === "OverwriteConfigurationData") {
                window.config.value = calculateConfig(message.data.changes, message.data.saved_config)
                window.isSaved.value = message.data.changes.length === 0
            }
        });

        window.connection.addEventListener("close", () => console.log("Connection closed"));
    });

    window.configPromise = configPromise
    return configPromise
}
