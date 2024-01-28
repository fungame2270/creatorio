ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'create_train_additions:copperwire' }, // Arg 1: the filter
        'create_train_additions:copperwire',            // Arg 2: the item to replace
        'create_new_age:copper_wire'         // Arg 3: the item to replace it with
    )
    event.remove({ output: 'create_train_additions:copperwire'})
  })

  