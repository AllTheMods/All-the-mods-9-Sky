ServerEvents.recipes(event =>{
  event.shaped('minecraft:elytra', ["aba", "cdc", "c c"], {
    a: "minecraft:diamond",
    b: "minecraft:string",
    c: "minecraft:phantom_membrane",
    d: "minecraft:nether_star"
  })


        //netherite template
       event.shaped('minecraft:netherite_upgrade_smithing_template', [
        'TCT',
        'TLT',
        'TTT'
      ], {
        T: 'minecraft:nether_brick',
        L: 'minecraft:ender_eye',
        C: 'minecraft:nether_star'
      })
})
