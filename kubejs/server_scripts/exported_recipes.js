ServerEvents.recipes(event => {

    event.shaped(
        Item.of('mekanism:module_energy_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            D: 'mekanism:hdpe_sheet',
            C: 'mekanism:module_base',
            B: 'mekanism:basic_induction_cell',
            A: 'mekanism:alloy_infused',
            E: 'draconicevolution:item_draconic_energy'
        }
    )
    event.shaped(
        Item.of('mekanism:module_silk_touch_unit'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            D: Item.of('mekanism:module_base'),
            E: Item.of('mekanism:pellet_polonium'),
            C: Item.of('mekanismtools:refined_obsidian_pickaxe'),
            A: Item.of('mekanism:alloy_reinforced'),
            B: Item.of('mekanism:block_refined_glowstone'),
            F: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:silk_touch",lvl:1s}]}').strongNBT()
        }
    )
    event.shaped(
        Item.of('mekanism:module_excavation_escalation_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            D: Item.of('mekanism:hdpe_sheet'),
            C: Item.of('mekanism:module_base'),
            A: Item.of('mekanism:alloy_infused'),
            B: Item.of('mekanismtools:refined_obsidian_pickaxe'),
            E: Item.of('apotheosis:potion_charm', '{Potion:"apotheosis:strong_haste"}').strongNBT()
        }
    )
});
