ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:chest'),
        ['AAA',
        'A A',
        'AAA'],
        {A:'#minecraft:planks'}
    )
})