ServerEvents.recipes( event => {
	event.custom({
		type: 'thermal:rock_gen', 
		adjacent: 'minecraft:water', 
		below: 'minecraft:obsidian', 
		result: {item: 'xycraft_world:kivi'}})
})