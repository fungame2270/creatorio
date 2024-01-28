ServerEvents.recipes(event => {

    event.remove({ id: 'create_dd:compacting/steel_ingot'})
    event.remove({ id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})

    event.recipes.create.mixing('8x createindustry:fireclay_ball', ['8x minecraft:clay_ball', 'minecraft:blaze_powder'])
    event.recipes.create.mixing('createindustry:limesand', ['sand', '2x glow_berries'])
    event.remove({ id: 'minecraft:compacting/cast_iron_ingot'})

    event.replaceInput(
        { output: 'createindustry:coke_oven' }, // Arg 1: the filter
        'create:industrial_iron_block',            // Arg 2: the item to replace
        'createdeco:cast_iron_block'         // Arg 3: the item to replace it with
    )
})