ServerEvents.recipes( event => {

// Time in a bottle
	event.remove({ id: 'tiab:time_in_a_bottle' })
 	event.shaped('tiab:time_in_a_bottle', ['NBN', 'QCQ', 'NNN'], {
 		N: 'minecraft:netherite_ingot',
    	Q: 'minecraft:quartz',
    	C: 'minecraft:clock',
    	B: 'minecraft:glass_bottle'
  }) 

  //Teleport pad
  event.remove({id: 'allthemodium:teleport_pad'})
})