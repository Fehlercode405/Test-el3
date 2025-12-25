ServerEvents.recipes(event => {
    let fusionCrafting = (output, count_out, mainInput, count_in, sideInput, tier, energy) => {
        let catalyst = Ingredient.of(mainInput)
        if (count_in > 1) {
            catalyst = {
                type: "draconicevolution:ingredient_stack",
                count: (count_in),
                items: [Ingredient.of(mainInput)]
            }
        }
        let result = Ingredient.of(output)
        if (count_out > 1) {
            result = {
                count: (count_out),
                items: [Ingredient.of(output)]
            }
        }
        let items = Array.isArray(sideInput) ? sideInput : [sideInput]
        let ingredients = []
        items.forEach(item => { ingredients.push(Ingredient.of(item)) })
        event.custom({
            type: "draconicevolution:fusion_crafting",
            catalyst: catalyst,
            ingredients: ingredients,
            result: result,
            total_energy: energy,
            tier: tier
        }).id(`custom:fusion_crafting/${output.replace(':', '/')}`)
    }
    event.remove({output:"draconicevolution:dislocator"})
    fusionCrafting(
        "draconicevolution:dislocator", 1
        , "minecraft:ender_pearl", 1,
        ["minecraft:blaze_powder", "minecraft:blaze_powder", "minecraft:blaze_powder", "minecraft:blaze_powder",
            "draconicevolution:draconium_ingot", "draconicevolution:draconium_ingot", "draconicevolution:draconium_ingot", "draconicevolution:draconium_ingot"],
        "WYVERN",
        10000
    )
    event.remove({output:"draconicevolution:advanced_dislocator"})    
    fusionCrafting(
        "draconicevolution:advanced_dislocator", 1,
        "draconicevolution:dislocator",1,
        ["minecraft:ender_pearl","minecraft:ender_pearl","minecraft:ender_pearl","minecraft:ender_pearl",
            "#forge:ingots/draconium","#forge:ingots/draconium","#forge:ingots/draconium","draconicevolution:wyvern_core"],
        "DRACONIC",
        100000
    )
})