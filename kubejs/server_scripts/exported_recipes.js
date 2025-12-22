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
    event.shaped(
        Item.of('mekanism:module_farming_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            D: Item.of('mekanism:hdpe_sheet', '{}'),
            C: Item.of('mekanism:module_base', '{}'),
            A: Item.of('mekanism:alloy_infused', '{}'),
            B: Item.of('mekanismtools:refined_obsidian_hoe', '{Damage:0}').strongNBT(),
            E: Item.of('create:mechanical_harvester', '{}')
        }
    )
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
    event.shaped(
        Item.of('mekanism:module_electrolytic_breathing_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            B: Item.of('mekanism:electrolytic_core', '{}'),
            D: Item.of('mekanism:hdpe_sheet', '{}'),
            C: Item.of('mekanism:module_base', '{}'),
            A: Item.of('mekanism:alloy_infused', '{}'),
            E: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:long_water_breathing"}').strongNBT()
        }
    )
    event.shaped(
        Item.of('mekanism:module_vision_enhancement_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            D: Item.of('mekanism:hdpe_sheet', '{}'),
            C: Item.of('mekanism:module_base', '{}'),
            A: Item.of('mekanism:alloy_reinforced', '{}'),
            B: Item.of('create:goggles', '{}'),
            E: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:long_night_vision"}').strongNBT()
        }
    )
    event.shaped(
        Item.of('mekanism:module_jetpack_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            C: Item.of('mekanism:module_base', '{}'),
            D: Item.of('mekanism:pellet_polonium', '{}'),
            B: Item.of('mekanism:jetpack_armored', '{mekData:{GasTanks:[{Tank:0b,stored:{amount:50000L,gasName:"mekanism:hydrogen"}}]}}').strongNBT(),
            A: Item.of('mekanism:alloy_reinforced', '{}'),
            E: Item.of('draconicevolution:dragon_heart', '{}')
        }
    )
    event.shaped(
        Item.of('mekanism:module_charge_distribution_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            E: Item.of('fluxnetworks:flux_controller', '{}'),
            C: Item.of('mekanism:module_base', '{}'),
            D: Item.of('mekanism:pellet_polonium', '{}'),
            A: Item.of('mekanism:alloy_reinforced', '{}'),
            B: Item.of('mekanism:basic_induction_provider', '{}')
        }
    )
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
    event.shaped(
        Item.of('mekanism:module_locomotive_boosting_unit'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            C: Item.of('mekanism:energy_tablet', '{mekData:{EnergyContainers:[{Container:0b,stored:"1000000"}]}}').strongNBT(),
            D: Item.of('mekanism:module_base', '{}'),
            E: Item.of('mekanism:pellet_polonium', '{}'),
            B: Item.of('mekanismtools:refined_obsidian_leggings', '{Damage:0}').strongNBT(),
            F: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:strong_swiftness"}').strongNBT(),
            A: Item.of('mekanism:alloy_reinforced', '{}')
        }
    )
    event.shaped(
        Item.of('mekanism:module_motorized_servo_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            C: Item.of('mekanism:module_base', '{}'),
            D: Item.of('mekanism:pellet_polonium', '{}'),
            A: Item.of('mekanism:alloy_reinforced', '{}'),
            B: Item.of('create_new_age:reinforced_motor', '{}'),
            E: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:swift_sneak",lvl:3s}]}').strongNBT()
        }
    )
    event.shaped(
        Item.of('mekanism:module_hydraulic_propulsion_unit'),
        [
            'ABA',
            'CDC',
            'EEE'
        ],
        {
            C: Item.of('mekanism:energy_tablet', '{mekData:{EnergyContainers:[{Container:0b,stored:"1000000"}]}}').strongNBT(),
            D: Item.of('mekanism:module_base', '{}'),
            E: Item.of('mekanism:pellet_polonium', '{}'),
            A: Item.of('mekanism:alloy_reinforced', '{}'),
            B: Item.of('mekanism:free_runners_armored', '{mekData:{EnergyContainers:[{Container:0b,stored:"74000"}]}}').strongNBT()
        }
    )
    event.shaped(
        Item.of('mekanism:module_magnetic_attraction_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            C: Item.of('mekanism:module_base', '{}'),
            D: Item.of('mekanism:pellet_polonium', '{}'),
            A: Item.of('mekanism:alloy_reinforced', '{}'),
            E: Item.of('create_new_age:magnetite_block', '{}'),
            B: Item.of('draconicevolution:magnet', '{}')
        }
    )
    event.shaped(
        Item.of('mekanism:module_frost_walker_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            C: Item.of('mekanism:module_base', '{}'),
            D: Item.of('mekanism:pellet_polonium', '{}'),
            E: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:2s}]}').strongNBT(),
            A: Item.of('mekanism:alloy_reinforced', '{}'),
            B: Item.of('mekanism:hydrogen_bucket', '{}')
        }
    )
    event.shaped(
        Item.of('mekaweapons:module_looting_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            E: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}').strongNBT(),
            C: Item.of('mekanism:module_base', '{}'),
            D: Item.of('mekanism:pellet_polonium', '{}'),
            A: Item.of('mekanism:alloy_reinforced', '{}'),
            B: Item.of('mekanismtools:refined_obsidian_sword', '{Damage:0}').strongNBT()
        }
    )
    event.shaped(
        Item.of('mekaweapons:module_drawspeed_unit'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            D: Item.of('mekanism:module_base', '{}'),
            E: Item.of('mekanism:pellet_polonium', '{}'),
            F: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:3s}]}').strongNBT(),
            C: Item.of('mekanism:upgrade_speed', '{}'),
            A: Item.of('mekanism:alloy_reinforced', '{}'),
            B: Item.of('minecraft:bow', '{Damage:0}').strongNBT()
        }
    )
    event.shaped(
        Item.of('mekaweapons:module_sweeping_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            C: Item.of('mekanism:module_base', '{}'),
            D: Item.of('mekanism:pellet_polonium', '{}'),
            A: Item.of('mekanism:alloy_reinforced', '{}'),
            B: Item.of('mekanismtools:refined_obsidian_sword', '{Damage:0}').strongNBT(),
            E: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3s}]}').strongNBT()
        }
    )
    event.shaped(
        Item.of('mekaweapons:module_arrowenergy_unit'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            F: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:infinity",lvl:1s}]}').strongNBT(),
            C: Item.of('mekanism:energy_tablet', '{mekData:{EnergyContainers:[{Container:0b,stored:"1000000"}]}}').strongNBT(),
            D: Item.of('mekanism:module_base', '{}'),
            E: Item.of('mekanism:pellet_polonium', '{}'),
            B: Item.of('minecraft:arrow', '{}'),
            A: Item.of('mekanism:alloy_reinforced', '{}')
        }
    )
    event.shaped(
        Item.of('mekaweapons:module_autofire_unit'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            C: Item.of('mekanism:module_base', '{}'),
            D: Item.of('mekanism:pellet_polonium', '{}'),
            E: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"mob-ai-tweaks:full_auto_retrofit",lvl:1s}]}').strongNBT(),
            A: Item.of('mekanism:alloy_reinforced', '{}'),
            B: Item.of('minecraft:clock', '{"quark:clock_calculated":1b}').strongNBT()
        }
    )
    event.shaped(
        Item.of('mekanismgenerators:module_solar_recharging_unit'),
        [
            'ABA',
            'ACA',
            'DDD'
        ],
        {
            C: Item.of('mekanism:module_base', '{}'),
            D: Item.of('mekanism:pellet_polonium', '{}'),
            A: Item.of('mekanism:alloy_reinforced', '{}'),
            B: Item.of('create_new_age:advanced_solar_heating_plate', '{}')
        }
    )
    event.shaped(
        Item.of('mekanismgenerators:module_geothermal_generator_unit'),
        [
            'ABA',
            'ACA',
            'DDD'
        ],
        {
            B: Item.of('create_new_age:heater', '{}'),
            C: Item.of('mekanism:module_base', '{}'),
            D: Item.of('mekanism:pellet_polonium', '{}'),
            A: Item.of('mekanism:alloy_reinforced', '{}')
        }
    )
});
