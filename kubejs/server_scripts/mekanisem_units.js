ServerEvents.recipes(event => {
    event.remove('mekanism:module_energy_unit')
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
    event.remove('mekanism:module_silk_touch_unit')
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
    event.remove('mekanism:module_excavation_escalation_unit')
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
    event.remove('mekanism:module_farming_unit')
    event.shaped(
        Item.of('mekanism:module_farming_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            D: Item.of('mekanism:hdpe_sheet'),
            C: Item.of('mekanism:module_base'),
            A: Item.of('mekanism:alloy_infused'),
            B: Item.of('mekanismtools:refined_obsidian_hoe'),
            E: Item.of('create:mechanical_harvester')
        }
    )
    event.remove('mekanism:module_vein_mining_unit')
    event.shaped(
        Item.of('mekanism:module_vein_mining_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            C: 'mekanism:module_base',
            D: 'mekanism:pellet_polonium',
            A: 'mekanism:alloy_reinforced',
            E: 'wands:netherite_wand',
            B: 'mekanismtools:refined_obsidian_paxel'
        }
    )
    event.remove('mekanism:module_electrolytic_breathing_unit')
    event.shaped(
        Item.of('mekanism:module_electrolytic_breathing_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            B: Item.of('mekanism:electrolytic_core'),
            D: Item.of('mekanism:hdpe_sheet'),
            C: Item.of('mekanism:module_base'),
            A: Item.of('mekanism:alloy_infused'),
            E: Item.of('apotheosis:potion_charm', '{Potion:"minecraft:long_water_breathing"}').strongNBT()
        }
    )
    event.remove('mekanism:module_vision_enhancement_unit')
    event.shaped(
        Item.of('mekanism:module_vision_enhancement_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            D: Item.of('mekanism:hdpe_sheet'),
            C: Item.of('mekanism:module_base'),
            A: Item.of('mekanism:alloy_reinforced'),
            B: Item.of('create:goggles'),
            E: Item.of('apotheosis:potion_charm', '{Potion:"minecraft:long_night_vision"}').strongNBT()
        }
    )
    event.remove('mekanism:module_jetpack_unit')
    event.shaped(
        Item.of('mekanism:module_jetpack_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            C: Item.of('mekanism:module_base'),
            D: Item.of('mekanism:pellet_polonium'),
            B: Item.of('mekanism:jetpack_armored'),
            A: Item.of('mekanism:alloy_reinforced'),
            E: Item.of('draconicevolution:dragon_heart')
        }
    )
    event.remove('mekanism:module_charge_distribution_unit')
    event.shaped(
        Item.of('mekanism:module_charge_distribution_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            E: Item.of('fluxnetworks:flux_controller'),
            C: Item.of('mekanism:module_base'),
            D: Item.of('mekanism:pellet_polonium'),
            A: Item.of('mekanism:alloy_reinforced'),
            B: Item.of('mekanism:basic_induction_provider')
        }
    )
    event.remove('mekanism:module_gravitational_modulating_unit')
    event.shaped(
        Item.of('mekanism:module_gravitational_modulating_unit'),
        [
            'ABA',
            'CDC',
            'EEE'
        ],
        {
            A: 'mekanism:alloy_atomic',
            E: 'mekanism:pellet_antimatter',
            D: 'mekanism:module_base',
            C: 'mekanism:ultimate_induction_provider',
            B: 'draconicevolution:dragon_heart'
        }
    )
    event.remove('mekanism:module_locomotive_boosting_unit')
    event.shaped(
        Item.of('mekanism:module_locomotive_boosting_unit'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            C: Item.of('mekanism:energy_tablet'),
            D: Item.of('mekanism:module_base'),
            E: Item.of('mekanism:pellet_polonium'),
            B: Item.of('mekanismtools:refined_obsidian_leggings'),
            F: Item.of('apotheosis:potion_charm', '{Potion:"minecraft:strong_swiftness"}').strongNBT(),
            A: Item.of('mekanism:alloy_reinforced')
        }
    )
    event.remove('mekanism:module_motorized_servo_unit')
    event.shaped(
        Item.of('mekanism:module_motorized_servo_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            C: Item.of('mekanism:module_base'),
            D: Item.of('mekanism:pellet_polonium'),
            A: Item.of('mekanism:alloy_reinforced'),
            B: Item.of('create_new_age:reinforced_motor'),
            E: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:swift_sneak",lvl:3s}]}').strongNBT()
        }
    )
    event.remove('mekanism:module_magnetic_attraction_unit')
    event.shaped(
        Item.of('mekanism:module_magnetic_attraction_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            C: Item.of('mekanism:module_base'),
            D: Item.of('mekanism:pellet_polonium'),
            A: Item.of('mekanism:alloy_reinforced'),
            E: Item.of('create_new_age:magnetite_block'),
            B: Item.of('draconicevolution:magnet')
        }
    )
    event.remove('mekanism:module_frost_walker_unit')
    event.shaped(
        Item.of('mekanism:module_frost_walker_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            C: Item.of('mekanism:module_base'),
            D: Item.of('mekanism:pellet_polonium'),
            E: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:2s}]}').strongNBT(),
            A: Item.of('mekanism:alloy_reinforced'),
            B: Item.of('mekanism:hydrogen_bucket')
        }
    )
    event.remove('mekaweapons:module_looting_unit')
    event.shaped(
        Item.of('mekaweapons:module_looting_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            E: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}').strongNBT(),
            C: Item.of('mekanism:module_base'),
            D: Item.of('mekanism:pellet_polonium'),
            A: Item.of('mekanism:alloy_reinforced'),
            B: Item.of('mekanismtools:refined_obsidian_sword')
        }
    )
    event.remove('mekaweapons:module_drawspeed_unit')
    event.shaped(
        Item.of('mekaweapons:module_drawspeed_unit'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            D: Item.of('mekanism:module_base'),
            E: Item.of('mekanism:pellet_polonium'),
            F: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:3s}]}').strongNBT(),
            C: Item.of('mekanism:upgrade_speed'),
            A: Item.of('mekanism:alloy_reinforced'),
            B: Item.of('minecraft:bow')
        }
    )
    event.remove('mekaweapons:module_sweeping_unit')
    event.shaped(
        Item.of('mekaweapons:module_sweeping_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            C: Item.of('mekanism:module_base'),
            D: Item.of('mekanism:pellet_polonium'),
            A: Item.of('mekanism:alloy_reinforced'),
            B: Item.of('mekanismtools:refined_obsidian_sword'),
            E: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3s}]}').strongNBT()
        }
    )
    event.remove('mekaweapons:module_arrowenergy_unit')
    event.shaped(
        Item.of('mekaweapons:module_arrowenergy_unit'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            F: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:infinity",lvl:1s}]}').strongNBT(),
            C: Item.of('mekanism:energy_tablet'),
            D: Item.of('mekanism:module_base'),
            E: Item.of('mekanism:pellet_polonium'),
            B: Item.of('minecraft:arrow'),
            A: Item.of('mekanism:alloy_reinforced')
        }
    )
    event.remove('mekaweapons:module_autofire_unit')
    event.shaped(
        Item.of('mekaweapons:module_autofire_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            C: Item.of('mekanism:module_base'),
            D: Item.of('mekanism:pellet_polonium'),
            E: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"mob-ai-tweaks:full_auto_retrofit",lvl:1s}]}').strongNBT(),
            A: Item.of('mekanism:alloy_reinforced'),
            B: Item.of('minecraft:clock')
        }
    )
    event.remove('mekanism:module_attack_amplification_unit')
    event.shaped(
        Item.of('mekanism:module_attack_amplification_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            C: Item.of('mekanism:module_base'),
            D: Item.of('mekanism:pellet_polonium'),
            E: Item.of('apotheosis:potion_charm', '{Potion:"minecraft:strength"}').strongNBT(),
            A: Item.of('mekanism:alloy_reinforced'),
            B: Item.of('mekanismtools:refined_obsidian_sword')
        }
    )
    event.remove('mekanism:module_hydraulic_propulsion_unit')
    event.shaped(
        Item.of('mekanism:module_hydraulic_propulsion_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            C: Item.of('mekanism:module_base'),
            D: Item.of('mekanism:pellet_polonium'),
            E: Item.of('apotheosis:potion_charm', '{Potion:"minecraft:strong_leaping"}').strongNBT(),
            A: Item.of('mekanism:alloy_reinforced'),
            B: Item.of('mekanism:free_runners_armored')
        }
    )
    event.remove('mekanism:module_fortune_unit')
    event.shaped(
        Item.of('mekanism:module_fortune_unit'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            C: Item.of('minecraft:diamond_block'),
            D: Item.of('mekanism:module_base'),
            E: Item.of('mekanism:pellet_polonium'),
            F: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:fortune",lvl:3s}]}').strongNBT(),
            A: Item.of('mekanism:alloy_reinforced'),
            B: Item.of('mekanismtools:refined_obsidian_paxel')
        }
    )
});
