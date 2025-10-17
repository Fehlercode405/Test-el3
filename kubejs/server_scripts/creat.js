ServerEvents.recipes(event => {
  event.shaped(
    Item.of(, ), // Output
    [
    ],
    {
    }
  )
  event.shaped(
  Item.of('minecraft:stone', 3), // arg 1: output
  [
    'A B',
    ' C ', // arg 2: the shape (array of strings)
    'B A'
  ],
  {
    A: 'minecraft:andesite',
    B: 'minecraft:diorite',  //arg 3: the mapping object
    C: 'minecraft:granite'
  }
)
})