JEIEvents.hideItems(event => {
  event.hide(/ae2:facade/)
  event.hide(['angelring:leadstone_angel_ring', 'angelring:hardened_angel_ring', 'angelring:energetic_angel_ring', 'angelring:reinforced_angel_ring', 'angelring:resonant_angel_ring'])
  event.hide('reliquary:rod_of_lyssa')
  event.hide('thermalendergy:endergy_upgrade_1')
  event.hide('allthemodium:teleport_pad')
  event.hide('projecte:watch_of_flowing_time')
  event.hide(/exdeorum:.+?_compressed_sieve/)
  event.hide('mekanism:upgrade_anchor')
  event.hide('ars_nouveau:glyph_animate_block')
  event.hide([
    'absentbydesign:slab_tuff',
    'absentbydesign:stairs_tuff',
    'absentbydesign:wall_tuff',
    'absentbydesign:wall_calcite',
    'absentbydesign:stairs_calcite',
    'absentbydesign:slab_calcite'
  ])

  Color.DYE.forEach(color => {
    ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor'].forEach(machine => {
      event.hide(`refinedstorage:${color}_${machine}`)
    })
  })

  if (global.chunk) {
    event.hide('mekanism:dimensional_stabilizer')
    event.hide('ae2:spatial_anchor')
  }
})
