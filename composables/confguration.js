const exampleConfig = ({
    "guild_id": "988836885281538209",
    "application_id": null,
    "enabled": {
        "moderation": true
    },
    "moderation": {
        "mute_mode": 2,
            "mute_role": null,
            "native_support": true,
            "logs_channel": "989149835590512651",
            "dm_case": true,
            "automod": {
            "rules": [
                {
                    "basic_type": 1,
                    "name": "AntiScamLinks",
                    "filters": [],
                    "checks": [
                        {
                            "type": "FlaggedScamLink"
                        }
                    ],
                    "actions": [
                        {
                            "type": "Timeout",
                            "key": {
                                "duration": {
                                    "$numberLong": "0"
                                }
                            }
                        },
                        {
                            "type": "DeleteMessage"
                        },
                        {
                            "type": "DirectMessage"
                        },
                        {
                            "type": "SendLogs"
                        }
                    ],
                    "ignore": null,
                    "reason": "coś"
                }
            ],
                "bucket_actions": {},
            "logs_channel": "989149796713513010",
                "ignore": {
                "channels": [
                    "991644961198063636"
                ],
                    "channels_ignore_mode": 1,
                    "roles": [
                    "991645722644598785"
                ],
                    "users": []
            }
        }
    },
    "premium": false,
    "levels": {
    "xp_timeout": 0,
        "xp_min": 0,
        "xp_max": 0
    },
    "top": {
        "week": false,
        "day": false,
        "webhook_url": ""
    }
})

export const useGuildConfig = () => {
    // const route = useRoute();
    // const params = route.params?.id;
    return exampleConfig
}