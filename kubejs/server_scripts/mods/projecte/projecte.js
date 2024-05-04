ServerEvents.recipes(event =>{


  //darkmatter
  event.remove({id: 'projecte:dark_matter'})
  event.recipes.summoningrituals
  .altar('projecte:aeternalis_fuel_block')
  .input('allthemodium:allthemodium_ingot')
  .input('minecraft:netherite_scrap')
  .input('megacells:sky_steel_ingot')
  .input('alltheores:enderium_ingot')
  .itemOutput('projecte:dark_matter')
  .recipeTime(10)

  event.remove({id: 'projecte:philosophers_stone_alt'})
  event.remove({id: 'projecte:philosophers_stone'})
  event.recipes.summoningrituals
  .altar('minecraft:tnt')
  .input('forbidden_arcanus:dark_nether_star')
  .input('2x botania:manasteel_ingot')
  .input('2x minecraft:blaze_rod')
  .input('minecraft:dragon_breath')
  .itemOutput('projecte:philosophers_stone')
  .recipeTime(20)

  //redmatter
  event.remove({id: 'projecte:red_matter_alt'})
  event.remove({id: 'projecte:red_matter'})
  event.recipes.summoningrituals
  .altar('allthemodium:unobtainium_ingot')
  .input('3x projecte:dark_matter')
  .input('mysticalagradditions:insanium_essence')
  .input('enderio:prescient_crystal')
  .input('minecraft:echo_shard')
  .itemOutput('projecte:red_matter')
  .recipeTime(20)  

  // Transmuation tablet
  event.remove({ id: 'projecte:transmutation_tablet'})  
  event.shapeless('projecte:transmutation_tablet', 'projecte:transmutation_table')
  event.shapeless('projecte:transmutation_table', 'projecte:transmutation_tablet')

})