ServerEvents.recipes(event => {

    event.shaped(
        Item.of('create_new_age:basic_motor'),
        [
            'AAA',
            'BCD',
            'AAA'
        ],
        {
            D: Item.of('create:shaft', '{}'),
            A: Item.of('mekanism:basic_control_circuit', '{}'),
            C: Item.of('create:brass_casing', '{}'),
            B: Item.of('create_new_age:overcharged_iron', '{}')
        }
    )
    event.shaped(
        Item.of('create_new_age:advanced_motor'),
        [
            'AAA',
            'BCD',
            'AAA'
        ],
        {
            A: Item.of('mekanism:advanced_control_circuit', '{}'),
            D: Item.of('create:shaft', '{}'),
            C: Item.of('create:brass_casing', '{}'),
            B: Item.of('create_new_age:overcharged_gold', '{}')
        }
    )
});
