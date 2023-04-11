const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=988840106938990632&permissions=8&scope=bot%20applications.commands`

const setup = [{
    title: "Adding bot to the server",
    components: [{
        type: "text",
        content: "You can add Custom by clicking button in the bot profile."
    }, {
        type: "images",
        content: [
            "https://media.discordapp.net/attachments/988845764925067424/1020980946180251678/unknown.png?width=1251&height=670",
            "https://media.discordapp.net/attachments/988845764925067424/1020981453091242014/unknown.png?width=1253&height=670"
        ]
    }, {
        type: "text",
        content: ["Alternatively you can add bot by clicking ", { url: inviteUrl, text: "this link" }, "."]
    }]
}, {
    title: "Dashboard setup",
    components: [{
        type: "text",
        content: [
            "To see your server after opening the servers section you need to complete setup ",
            { url: "/servers/setup", text: "here" }, "."
        ]
    }, {
        type: "images",
        content: [
            "https://media.discordapp.net/attachments/988845764925067424/1021534782015934514/unknown.png?width=1394&height=670",
            "https://media.discordapp.net/attachments/988845764925067424/1021534997544456222/unknown.png?width=1394&height=670"
        ]
    }, {
        type: "text",
        content: ["Now you are free to configure your server"]
    }]
}]

const commands = [{
    title: "Commands Permissions",
    components: [{
        type: "text",
        content: [
            "You can change permissions for roles/channels/users in discord servers settings. You can find it by opening: Integrations > Bots and Apps > Custom > Command Permissions.",
        ]
    }, {
        type: "images",
        content: []
    }]
}, {
    title: "Commands Visibility",
    components: []
}]

const sections = [{
    name: "Server setup",
    pages: [{ name: "Adding bot to your server", url: "setup" }]
}, {
    name: "Basic concepts",
    pages: [{ name: "Commands permissions and visibility", url: "commands" }]
}, {
    name: "Configuration",
    pages: [
        { name: "Bans, Kicks, Mutes, Warns", url: "execution" },
        { name: "Auto moderation", url: "automod" },
        { name: "Cases (Saving punishments data)", url: "cases" }
    ]
}]

export const useSupportPagesData = () => {
    return {
        setup,
        commands
    }
}

export const useSupportSectionsData = () => {
    return sections
}