ServerEvents.recipes(event => {
  event.shaped('kubejs:universal_press', ['FPF', 'CSL', 'FEF'], {
    F: '#forge:ingots/sky_steel',
    P: 'ae2:silicon_press',
    C: 'ae2:calculation_processor_press',
    S: 'minecraft:slime_ball',
    L: 'ae2:logic_processor_press',
    E: 'ae2:engineering_processor_press'
  }).id('kubejs:universal_press')
 
  event.shapeless(` 4x ae2:fluix_covered_cable`,[`ae2:fluix_covered_dense_cable`]).id(`kubejs:ae2/dense_to_normal`)
  event.shapeless(` 4x ae2:fluix_smart_cable`,[`ae2:fluix_smart_dense_cable`]).id(`kubejs:ae2/smart_dense_to_smart_normal`)
})


