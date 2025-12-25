//uncomand if not alreday definde
//const $RecipeSchema = Java.loadClass('dev.latvian.mods.kubejs.recipe.schema.RecipeSchema')
StartupEvents.recipeSchemaRegistry(event =>{
    const Component = event.components.get.bind(event.components)
    event.register("sophisticatedbackpacks:smithing_backpack_upgrade",
        new $RecipeSchema(
        Component('inputItem')().key('addition'),
        Component('inputItem')().key('base'),
        Component('outputItem')().key("result"),
        Component('inputItem')().key("template"),)
    )
})