ServerEvents.recipes(event => {
    event.recipes.ae2.inscriber(
        '9x mekanism:basic_control_circuit',
        'mekanism:enriched_redstone',
        'mekanism:block_osmium',
    ).mode("press")
    event.recipes.ae2.inscriber(
        'mekanism:advanced_control_circuit',
        'mekanism:alloy_infused',
        'mekanism:basic_control_circuit',
    ).mode("press")
    event.recipes.ae2.inscriber(
        'mekanism:elite_control_circuit',
        'mekanism:alloy_reinforced',
        'mekanism:advanced_control_circuit',
    ).mode("press")
    event.recipes.ae2.inscriber(
        'mekanism:ultimate_control_circuit',
        'mekanism:alloy_atomic',
        'mekanism:elite_control_circuit',
    ).mode("press")
    event.remove('mekanism:teleportation_core')
    event.shaped(
        Item.of('mekanism:teleportation_core'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            B: Item.of('mekanism:alloy_atomic'),
            C: Item.of('minecraft:gold_ingot'),
            A: Item.of('mekanism:pellet_polonium'),
            D: Item.of('minecraft:diamond')
        }
    )
})