ServerEvents.tags("item", e => {
    let ae_hide = [
        "ae2:facade",
        ""
    ];
    ae_hide.forEach(element => {
            e.add("c:hidden_from_recipe_viewers", element);
    });
})