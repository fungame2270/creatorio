ServerEvents.recipes(event => {
    event.remove({ output: 'create:fluid_pipe'})
    event.remove({ output: 'createindustry:brass_pipe'})

    let s = 'create:brass_sheet'
    let p = '2x createindustry:brass_pipe'
    event.recipes.create.compacting(p, [s, s, s, s])

    let f = 'create:fluid_pipe'
    event.shaped(f, [
        ' C ', 
        ' C ',
        ' C '  
    ], {
        C: 'minecraft:copper_ingot'   
    })
    event.shaped(f, [
        '   ', 
        'CCC',
        '   '  
    ], {
        C: 'minecraft:copper_ingot'   
    })
  })

  