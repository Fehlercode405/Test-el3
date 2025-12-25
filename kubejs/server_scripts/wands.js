ServerEvents.recipes(event => {
    event.remove({ output: 'wands:stone_wand' })
    event.shaped(
        Item.of('wands:stone_wand'),
        [
            '  A',
            ' B ',
            'B  '
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:stick'
        }
    )
    event.remove('wands:iron_wand')
    event.shaped(
        Item.of('wands:iron_wand'),
        [
            '  A',
            ' B ',
            'B  '
        ],
        {
            A: 'minecraft:diamond',
            B: 'minecraft:stick'
        }
    )
    event.remove('wands:diamond_wand')
    event.smithing(
        'wands:diamond_wand',
        'minecraft:netherite_upgrade_smithing_template',
        'wands:iron_wand',
        'minecraft:netherite_ingot'
    )
    event.remove({output:'wands:netherite_wand'})
    event.shaped(
        Item.of('wands:netherite_wand'),
        [
            '  A',
            ' B ',
            'B  '
        ],
        {
            A: 'mekanism:pellet_polonium',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('wands:creative_wand'),
        [
            '  A',
            ' B ',
            'B  '
        ],
        {
            A: 'mekanism:pellet_antimatter',
            B: 'minecraft:stick'
        }
    )
})