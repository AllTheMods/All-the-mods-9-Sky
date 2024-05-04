ServerEvents.recipes(e => {
  //Remove the anchor
  e.remove({ id: 'mekanism:upgrade/anchor' })

  // remove combiner recipes for ores
  e.remove({ type: 'mekanism:combining', id: /ore/ })
})
