global.disabledItems = [
    'minecraft:diamond_sword',
    'minecraft:netherite_pickaxe',
    "minecraft:dirt"
]

ServerEvents.recipes(event => {
    if (!global.disabledItems) return
    global.disabledItems.forEach(id => {
        event.remove({ output: id })
    })
})
LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.CHEST)
        .removeLoot('minecraft:netherite_block')
})
LootJS.modifiers(event => {
    if (!global.disabledItems) return
    const modifier = event.addLootTableModifier(/.*/)
    global.disabledItems.forEach(id => modifier.removeLoot(id))
})