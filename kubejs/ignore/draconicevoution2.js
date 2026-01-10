/*StartupEvents.recipeSchemaRegistry((event) => {
  const $RecipeComponentBuilder = Java.loadClass(
    'dev.latvian.mods.kubejs.recipe.component.RecipeComponentBuilder'
  )
  const Components = event.components
  const input = Components.get('inputItem')
  const output = Components.get('outputItem')
  const bool = Components.get('bool')
  const string = Components.get('string')
  const intNumber = Components.get('intNumber')
  const consume = $RecipeComponentBuilder(2).add(bool.key("consume")).add(input.key("ingredient"))

  event.register(
    'draconicevolution:fusion_crafting',
    new $RecipeSchema(
      input.key("catalyst"),
      consume.asArray().key("ingredients"),
      output.key("result"),
      string.key("techLevel"),
      intNumber.key("totalEnergy")
    )
  )

  console.log('RecipeSchema for Draconic Evolution Fusion Crafting loaded.')
})
StartupEvents.recipeSchemaRegistry((event) => {
  const $RecipeSchema = Java.loadClass(
    'dev.latvian.mods.kubejs.recipe.RecipeSchema'
  )
  
  const Components = event.components
  const input = Components.get('inputItem')
  const output = Components.get('outputItem')

  if (!input || !output) {
    console.log("Input oder Output Component fehlt!")
    return
  }

  event.register(
    'draconicevolution:fusion_crafting',
    new $RecipeSchema(
      input.key("catalyst"),
      output.key("result")
    )
  )

  console.log('Minimal RecipeSchema loaded.')
})*/