ServerEvents.recipes(e =>{
  e.remove({id: 'projecte:philosophers_stone_alt'})
  e.remove({id: 'projecte:philosophers_stone'})
  e.shaped('projecte:philosophers_stone', ['GBG', 'BIB', 'GBG'], {
    I: 'minecraft:nether_star',
    G: '#forge:gunpowder',
    B: 'minecraft:blaze_powder'
    })
  })