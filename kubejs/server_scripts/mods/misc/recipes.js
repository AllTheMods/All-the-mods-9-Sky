ServerEvents.recipes( event => {

// Time in a bottle
	event.remove({ id: 'tiab:time_in_a_bottle' })
 	event.shaped('tiab:time_in_a_bottle', ['UDU', 'LCL', 'LBL'], {
 		U: 'mysticalagriculture:awakened_supremium_block',
    	D: 'productivebees:upgrade_productivity_4',
    	L: 'allthecompressed:diamond_block_2x',
    	C: 'projecte:watch_of_flowing_time',
    	B: 'allthecompressed:nether_star_block_3x'
  })
})