WorldgenEvents.add(event => {
  
    const { anchors } = event

    event.addOre(ore => {
        ore.id = 'kubejs:iron_patch' // (optional, but recommended) custom id for the feature

        ore.addTarget([
          'minecraft:gravel',
          '#minecraft:dirt',
          'minecraft:stone'   // replace these...
        ], 'minecraft:iron_ore')       //with...
    
        ore.squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
        ore.triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
            anchors.aboveBottom(120),    // the lower bound, from Y = -64
            anchors.absolute(120)	      // the upper bound, from Y = 0
        )
    
        ore.size = 64                           // max. blocks in generated vein
        ore.noSurface = 0                  // chance to discard if the ore would be exposed to air
        ore.worldgenLayer = 'surface_structures'  // what generation step the ores should be generated in (see below)
        ore.chance = 10							            // 1/n chance to spawn per chunk
    })

    event.addOre(ore => {
      ore.id = 'kubejs:coal_patch'

      ore.addTarget([
        'minecraft:gravel',
        '#minecraft:dirt',
        'minecraft:stone'
      ], 'minecraft:coal_ore')
  
      ore.squared()
      ore.triangleHeight(
          anchors.aboveBottom(120),
          anchors.absolute(120)
      )								            
  
      ore.size = 64                         
      ore.noSurface = 0.8                  
      ore.worldgenLayer = 'surface_structures'  
      ore.chance = 10							            
  })

  event.addOre(ore => {
    ore.id = 'kubejs:copper_patch'

    ore.addTarget([
      'minecraft:gravel',
      '#minecraft:dirt',
      'minecraft:stone'
    ], 'minecraft:copper_ore')

    ore.squared()
    ore.triangleHeight(
        anchors.aboveBottom(120),
        anchors.absolute(120)
    )								            

    ore.size = 64                         
    ore.noSurface = 0                  
    ore.worldgenLayer = 'surface_structures'  
    ore.chance = 10							            
  })

  event.addOre(ore => {
    ore.id = 'kubejs:zinc_patch'

    ore.addTarget([
      'minecraft:gravel',
      '#minecraft:dirt',
      'minecraft:stone'
    ], 'create:zinc_ore')

    ore.squared()
    ore.triangleHeight(
        anchors.aboveBottom(120),
        anchors.absolute(120)
    )								            

    ore.size = 64                         
    ore.noSurface = 0                  
    ore.worldgenLayer = 'surface_structures'  
    ore.chance = 17						            
  })

  event.addOre(ore => {
    ore.id = 'kubejs:tin_patch'

    ore.addTarget([
      'minecraft:gravel',
      '#minecraft:dirt',
      'minecraft:stone'
    ], 'create_dd:tin_ore')

    ore.squared()
    ore.triangleHeight(
        anchors.aboveBottom(120),
        anchors.absolute(120)
    )								            

    ore.size = 64                         
    ore.noSurface = 0                  
    ore.worldgenLayer = 'surface_structures'  
    ore.chance = 17							            
  })

  event.addOre(ore => {
    ore.id = 'kubejs:thorium_patch'

    ore.addTarget([
      'minecraft:stone',
      'minecraft:deepslate'
    ], 'create_new_age:thorium_ore')

    ore.squared()
    ore.triangleHeight(
        anchors.aboveBottom(60),
        anchors.absolute(50)
    )								            

    ore.size = 50                         
    ore.noSurface = 0                  
    ore.worldgenLayer = 'underground_ores'  
    ore.chance = 30							            
  })

  event.addOre(ore => {
    ore.id = 'kubejs:redstone_patch'

    ore.addTarget([
      'minecraft:stone',
      'minecraft:deepslate'
    ], 'minecraft:redstone_ore')

    ore.squared()
    ore.triangleHeight(
        anchors.aboveBottom(100),
        anchors.absolute(60)
    )								            

    ore.size = 64                         
    ore.noSurface = 0                  
    ore.worldgenLayer = 'underground_ores'  
    ore.chance = 25							            
  })

  event.addOre(ore => {
    ore.id = 'kubejs:gold_patch'

    ore.addTarget([
      'minecraft:stone',
      'minecraft:deepslate'
    ], 'minecraft:gold_ore')

    ore.squared()
    ore.triangleHeight(
        anchors.aboveBottom(32),
        anchors.absolute(32)
    )								            

    ore.size = 32                         
    ore.noSurface = 0                  
    ore.worldgenLayer = 'underground_ores'  
    ore.chance = 25							            
  })

  event.addOre(ore => {
    ore.id = 'kubejs:lapis_patch'

    ore.addTarget([
      'minecraft:stone',
      'minecraft:deepslate'
    ], 'minecraft:lapis_ore')

    ore.squared()
    ore.triangleHeight(
        anchors.aboveBottom(32),
        anchors.absolute(32)
    )								            

    ore.size = 32                         
    ore.noSurface = 0                  
    ore.worldgenLayer = 'underground_ores'  
    ore.chance = 18							            
  })

  event.addOre(ore => {
    ore.id = 'kubejs:diamond_patch'

    ore.addTarget([
      'minecraft:deepslate'
    ], 'minecraft:deepslate_diamond_ore')

    ore.squared()
    ore.triangleHeight(
        anchors.aboveBottom(0),
        anchors.absolute(-32)
    )								            

    ore.size = 26                         
    ore.noSurface = 0                  
    ore.worldgenLayer = 'underground_ores'  
    ore.chance = 25							            
  })

  event.addOre(ore => {
    ore.id = 'kubejs:emerald_patch'

    ore.addTarget([
      'minecraft:deepslate'
    ], 'minecraft:deepslate_emerald_ore')

    ore.squared()
    ore.triangleHeight(
        anchors.aboveBottom(0),
        anchors.absolute(-32)
    )								            

    ore.size = 16                         
    ore.noSurface = 0                  
    ore.worldgenLayer = 'underground_ores'  
    ore.chance = 100							            
  })

})