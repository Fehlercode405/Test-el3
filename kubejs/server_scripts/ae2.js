ServerEvents.recipes(event => {
    event.remove({ id: 'ae2:inscriber/engineering_processor' })
    event.recipes.ae2.inscriber(
        "ae2:engineering_processor",
        "ae2:printed_engineering_processor",
        "mekanism:alloy_infused",
        "ae2:printed_silicon",
    )
    event.remove({ id: 'ae2:inscriber/calculation_processor' })
    event.recipes.ae2.inscriber(
        "ae2:calculation_processor",
        "ae2:printed_calculation_processor",
        "mekanism:alloy_infused",
        "ae2:printed_silicon",
    )
    event.remove({ id: 'advanced_ae:quantum_processor' })
    event.recipes.ae2.inscriber(
        "advanced_ae:quantum_processor",
        "advanced_ae:printed_quantum_processor",
        "mekanism:alloy_infused",
        "ae2:printed_silicon",
    )
    event.remove({ id: 'ae2:inscriber/logic_processor' })
    event.recipes.ae2.inscriber(
        "ae2:logic_processor",
        "ae2:printed_logic_processor",
        "mekanism:alloy_infused",
        "ae2:printed_silicon",
    )
    event.remove({id: "advanced_ae:regeneration_card"})
    event.shaped(
        Item.of('advanced_ae:regeneration_card'),
        [
            'ABC',
            'DEF',
            'GHI'
        ],
        {
            F: Item.of('farmersdelight:roast_chicken_block'),
            C: Item.of('farmersdelight:honey_glazed_ham_block'),
            D: Item.of('farmersdelight:hamburger'),
            A: Item.of('farmersdelight:stuffed_pumpkin_block'),
            G: Item.of('farmersdelight:sweet_berry_cheesecake'),
            E: Item.of('advanced_ae:quantum_upgrade_base'),
            B: Item.of('draconicevolution:dragon_heart'),
            I: Item.of('farmersdelight:pasta_with_mutton_chop'),
            H: Item.of('farmersdelight:rice_roll_medley_block')
        }
    )
    event.remove({id:'advanced_ae:flight_card'})
        event.shaped(
        Item.of('advanced_ae:flight_card'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            B: Item.of('minecraft:elytra'),
            D: Item.of('advanced_ae:quantum_upgrade_base'),
            E: Item.of('draconicevolution:dragon_heart'),
            C: Item.of('minecraft:feather'),
            A: Item.of('advanced_ae:quantum_alloy_plate')
        }
    )
    event.remove({output:"advanced_ae:quantum_processor_press"})
    event.recipes.ae2.inscriber("advanced_ae:quantum_processor_press",
        'ae2:engineering_processor_press',
        "minecraft:nether_star",
        'ae2:logic_processor_press')
})