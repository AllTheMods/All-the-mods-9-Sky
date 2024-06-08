const $CreatingFluxRecipe = Java.loadClass('sonar.fluxnetworks.client.jei.CreatingFluxRecipe')
const $CreatingFluxRecipeCategory = Java.loadClass('sonar.fluxnetworks.client.jei.CreatingFluxRecipeCategory')

JEIEvents.addItems(event => {
  let RecipeManager = global.jeiRuntime.getRecipeManager()
  let customFlux = new $CreatingFluxRecipe('allthecompressed:obsidian_1x', 'minecraft:obsidian', 'minecraft:redstone', 'fluxnetworks:flux_dust')
  RecipeManager.addRecipes($CreatingFluxRecipeCategory.RECIPE_TYPE, [customFlux])
})

JEIEvents.addItems(e => { e.add(Ingredient.of('@thermal').getItemIds().toArray()); });