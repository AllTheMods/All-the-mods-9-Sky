ServerEvents.recipes(allthemods => {
  //Remove the anchor
  allthemods.remove({ id: 'mekanism:upgrade/anchor' })

  // remove combiner recipes for ores
  allthemods.remove({ type: 'mekanism:combining', id: /ore/ })

  // kubejs/server_scripts/crushing.js

  const inputs = [
    '#forge:deepslate_blocks',
    'minecraft:end_stone',
    'minecraft:blackstone',
    'minecraft:sand',
    'minecraft:netherrack'
  ]

  const outputs = [
    'exdeorum:crushed_deepslate',
    'exdeorum:crushed_end_stone',
    'exdeorum:crushed_blackstone',
    'exdeorum:dust',
    'exdeorum:crushed_netherrack'
  ]

  inputs.forEach((input, index) => {
    const isTag = input.startsWith('#')
    const ingredient = isTag
      ? { tag: input.slice(1) }
      : { item: input }

    const result = {
      item: outputs[index],
      count: 1
    }

    allthemods.custom({
      type: 'mekanism:crushing',
      input: {
        ingredient: ingredient
      },
      output: result
    }).id(`kubejs:mekanism/crushing/${outputs[index].split(':')[1]}`)
  })
})
