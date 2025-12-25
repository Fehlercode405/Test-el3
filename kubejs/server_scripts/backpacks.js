ServerEvents.recipes(event => {
    function backpack(ingot, before, after) {
        event.remove({output:after})
        event.custom({
            type: "sophisticatedbackpacks:backpack_upgrade",
            conditions: [
                {
                    type: "sophisticatedcore:item_enabled",
                    itemRegistryName: after
                }
            ],
            key: {
                B: {
                    item: before
                },
                I: {
                    item: ingot
                }
            },
            pattern: [
                "III",
                "IBI",
                "III"
            ],
            result: {
                "item": after
            }
        })
    }
    backpack("minecraft:gold_ingot", "sophisticatedbackpacks:backpack", "sophisticatedbackpacks:copper_backpack")
    backpack("minecraft:diamond", "sophisticatedbackpacks:copper_backpack", "sophisticatedbackpacks:iron_backpack")
    event.remove({output:"sophisticatedbackpacks:gold_backpack"})
    event.recipes.sophisticatedbackpacks.smithing_backpack_upgrade
        ("minecraft:netherite_ingot", "sophisticatedbackpacks:iron_backpack", "sophisticatedbackpacks:gold_backpack",
            "minecraft:netherite_upgrade_smithing_template")
    backpack("mekanism:pellet_polonium","sophisticatedbackpacks:gold_backpack","sophisticatedbackpacks:diamond_backpack")
    backpack("mekanism:pellet_antimatter","sophisticatedbackpacks:diamond_backpack","sophisticatedbackpacks:netherite_backpack")
})