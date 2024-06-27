ServerEvents.recipes(event => {
  //Allthemodium
    event.custom({
        type: 'powah:energizing',
        ingredients: [
          { tag: 'forge:ingots/refined_glowstone' },
          { item: 'redstone_arsenal:flux_ingot' },
          { tag: 'forge:ingots/energetic_alloy' },
          { tag: 'forge:ingots/deorum' },
          { tag: 'forge:ingots/soul_infused' },
          { item: 'powah:crystal_nitro' }
        ],
        energy: "100000",
        result: 
          { item: 'allthemodium:allthemodium_ingot',
            count: 3
          }
      })
    
  //Vibranium
    event.recipes.summoningrituals
    .altar('allthemodium:allthemodium_ingot')
    .input('ars_nouveau:air_essence')
    .input('ars_nouveau:water_essence')
    .input('3x mysticalagradditions:insanium_essence')
    .input('ars_nouveau:earth_essence')
    .input('ars_nouveau:fire_essence')
    .input('bloodmagic:life_essence_bucket')
    .itemOutput('3x allthemodium:vibranium_ingot')
    .recipeTime(20)
    
  //Unobtainium
  event.custom({ 
    "type": "thermal:smelter",
    "ingredients": [
      {
        "tag": "forge:ingots/dragonsteel",
        "count": 1
      },
      {
        "tag": "forge:ingots/vibranium",
        "count": 1
      },
      {
        "tag": "forge:gems/prescient_crystal",
        "count": 1
      }
    ],
    "result": [
      {
        "item": "allthemodium:unobtainium_ingot",
        "count": 3
      }
    ],
    "energy": 100000
  })
})