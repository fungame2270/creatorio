WorldgenEvents.remove(event => {
    // print all features for a given biome filter
    event.printFeatures('', 'minecraft:plains')
  
    event.removeOres(props => {
      // much like ADDING ores, this supports filtering by worldgen layer...
      props.worldgenLayer = 'underground_ores'
      // ...and by biome
  
      // BlockStatePredicate to remove iron and copper ores from the given biomes
      // Note tags may NOT be used here, unfortunately...
      props.blocks = ['minecraft:iron_ore', 
      'minecraft:copper_ore',
      'minecraft:diamond_ore',
      'minecraft:emerald_ore',
      'minecraft:lapis_ore',
      'minecraft:redstone_ore',
      'minecraft:gold_ore',
      'minecraft:deepslate_gold_ore',
      'minecraft:deepslate_lapis_ore',
      'minecraft:deepslate_diamond_ore',
      'minecraft:deepslate_emerald_ore',
      'minecraft:deepslate_redstone_ore',
      'create:zinc_ore',
      'create:deepslate_zinc_ore',
      'create_dd:tin_ore',
      'create_dd:deepslate_tin_ore',
      'create_new_age:thorium_ore'
      ]
    })
    event.removeOres(props => {
      // much like ADDING ores, this supports filtering by worldgen layer...
      props.worldgenLayer = 'underground_decoration'
      // ...and by biome
  
      // BlockStatePredicate to remove iron and copper ores from the given biomes
      // Note tags may NOT be used here, unfortunately...
      props.blocks = [
      'create_new_age:thorium_ore'
      ]
    })
  })