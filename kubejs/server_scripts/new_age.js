ServerEvents.recipes(event => {

    event.remove({ output: 'create_new_age:basic_motor' })
    event.shaped(
        Item.of('create_new_age:basic_motor'),
        [
            'AAA',
            'BCD',
            'AAA'
        ],
        {
            D: Item.of('create:shaft'),
            A: Item.of('mekanism:basic_control_circuit'),
            C: Item.of('create:brass_casing'),
            B: Item.of('create_new_age:overcharged_iron')
        }
    )
    event.remove({ output: 'create_new_age:advanced_motor' })
    event.shaped(
        Item.of('create_new_age:advanced_motor'),
        [
            'AAA',
            'BCD',
            'AAA'
        ],
        {
            A: Item.of('mekanism:advanced_control_circuit'),
            D: Item.of('create:shaft'),
            C: Item.of('create:brass_casing'),
            B: Item.of('create_new_age:overcharged_gold')
        }
    )
    event.remove({ output: 'create_new_age:reinforced_motor' })
    event.recipes.create.mechanical_crafting(
        Item.of('create_new_age:reinforced_motor'),
        [
            'AADDA',
            'ABCEE',
            'AADDA'
        ],
        {
            A: Item.of('create_new_age:overcharged_diamond'),
            B: Item.of('create:brass_casing'),
            C: Item.of('#chipped:redstone_block'),
            D: Item.of('mekanism:elite_control_circuit'),
            E: Item.of('create:shaft'),
        }
    )
    event.remove({ output: 'create_new_age:redstone_magnet' })
    event.shaped(
        Item.of('create_new_age:redstone_magnet'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            B: Item.of('minecraft:redstone_block'),
            A: Item.of('create_new_age:magnetite_block')
        }
    )
    event.remove({ output: 'create_new_age:layered_magnet' })
    event.shaped(
        Item.of('create_new_age:layered_magnet'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: Item.of('create_new_age:overcharged_iron'),
            C: Item.of('create_new_age:redstone_magnet'),
            A: Item.of('create_new_age:overcharged_gold')
        }
    )
    event.remove({ output: 'create_new_age:fluxuated_magnetite' })
    event.shaped(
        Item.of('create_new_age:fluxuated_magnetite'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: Item.of('create_new_age:layered_magnet'),
            A: Item.of('mekanism:alloy_reinforced'),
            B: Item.of('create_new_age:overcharged_diamond')
        }
    )
    event.remove({ output: 'create_new_age:netherite_magnet' })
    event.shaped(
        Item.of('create_new_age:netherite_magnet'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: Item.of('mekanism:alloy_atomic'),
            C: Item.of('create_new_age:fluxuated_magnetite'),
            B: Item.of('minecraft:netherite_scrap')
        }
    )
    event.remove({ output: 'create_new_age:energiser_t1' })
    event.shaped(
        Item.of('create_new_age:energiser_t1'),
        [
            'AB ',
            'C  ',
            '   '
        ],
        {
            A: Item.of('numismatics:andesite_depositor'),
            C: Item.of('mekanism:alloy_infused'),
            B: Item.of('minecraft:lightning_rod')
        }
    )
    event.remove({ output: 'create_new_age:energiser_t2' })
    event.shaped(
        Item.of('create_new_age:energiser_t2'),
        [
            'ABA',
            ' C ',
            ' C '
        ],
        {
            B: Item.of('create_new_age:energiser_t1'),
            C: Item.of('mekanism:alloy_reinforced'),
            A: Item.of('create_new_age:overcharged_iron')
        }
    )
    event.remove({ output: 'create_new_age:energiser_t3' })
    event.shaped(
        Item.of('create_new_age:energiser_t3'),
        [
            'ABA',
            'ACA',
            ' C '
        ],
        {
            C: Item.of('mekanism:alloy_atomic'),
            B: Item.of('create_new_age:energiser_t2'),
            A: Item.of('create_new_age:overcharged_diamond')
        }
    )
    event.remove({ output: 'create_new_age:heat_pump' })
    event.shaped(
        Item.of('create_new_age:heat_pump'),
        [
            'ABA',
            '   ',
            '   '
        ],
        {
            B: 'mekanism:basic_control_circuit',
            A: 'create_new_age:heat_pipe'
        }
    )
    event.remove({ output: 'create_new_age:reactor_fuel_acceptor' })
    event.shaped(
        Item.of('create_new_age:reactor_fuel_acceptor'),
        [
            'ABA',
            'ACA',
            'DDD'
        ],
        {
            B: 'create:andesite_funnel',
            C: 'create:brass_funnel',
            D: 'mekanism:elite_control_circuit',
            A: 'create_new_age:reactor_casing'
        }
    )
    event.remove({ output: 'create_new_age:reactor_heat_vent' })
    event.shaped(
        Item.of('create_new_age:reactor_heat_vent'),
        [
            'ABA',
            'ABA',
            'CCC'
        ],
        {
            C: 'mekanism:alloy_reinforced',
            B: 'create_new_age:heat_pipe',
            A: 'create_new_age:reactor_casing'
        }
    )
    event.remove({ output: 'create_new_age:reactor_rod' })
    event.recipes.create.mechanical_crafting(
        Item.of('create_new_age:reactor_rod'),
        [
            'ABBBA',
            ' CDC ',
            ' CDC ',
            'ABBBA'
        ],
        {
            A: Item.of('create_new_age:reactor_casing'),
            B: Item.of('mekanism:alloy_atomic'),
            C: Item.of('create_new_age:reactor_glass'),
            D: Item.of('create_new_age:nuclear_fuel'),
        }
    )
    event.custom(
        {
            "type": "create_new_age:energising",
            "energy_needed": 100000,
            "ingredients": [
                {
                    "item": 'create_new_age:overcharged_iron'
                }
            ],
            "results": [
                {
                    "item": 'create_new_age:magnetite_block'
                }
            ]
        }
    )
});
