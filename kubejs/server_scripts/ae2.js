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
})