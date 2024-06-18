ServerEvents.recipes(event => {

	let rockgen = (adjacent, below, out) => {
		event.custom({
			type: 'thermal:rock_gen',
			adjacent: adjacent,
			below: below,
			result: {item: out}})
		}
	
	rockgen('minecraft:blue_ice', 'minecraft:obsidian', 'forbidden_arcanus:darkstone')
	rockgen('exdeorum:witch_water', 'minecraft:netherrack', 'minecraft:netherrack')
	rockgen('minecraft:water', 'mysticalagriculture:soulium_block', 'mysticalagriculture:soulstone')
	rockgen('minecraft:water', 'minecraft:obsidian', 'xycraft_world:kivi')
	})