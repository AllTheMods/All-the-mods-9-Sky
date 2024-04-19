ServerEvents.recipes(e =>{
  e.remove({id: 'projecte:philosophers_stone_alt'})
  e.remove({id: 'projecte:philosophers_stone'})
  e.shaped('projecte:philosophers_stone', ['GBG', 'BIB', 'GBG'], {
    I: 'allthetweaks:nether_star_block',
    G: 'thermal:gunpowder_block',
    B: 'allthecompressed:blaze_block_1x'
    })
  })