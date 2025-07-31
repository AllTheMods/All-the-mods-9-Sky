ServerEvents.recipes(event => {

	// Time in a bottle
	event.remove({ id: 'tiab:time_in_a_bottle' })
	event.shaped('tiab:time_in_a_bottle', ['NBN', 'QCQ', 'NNN'], {
		N: 'minecraft:netherite_ingot',
		Q: 'minecraft:quartz',
		C: 'minecraft:clock',
		B: 'minecraft:glass_bottle'
	})

	// Fixing Amethyst Crafting
	event.remove({ id: 'absentbydesign:trapdoor_amethyst' })
	event.shaped('4x absentbydesign:trapdoor_amethyst', ['AA', 'AA'], { A: 'minecraft:amethyst_block' })

	// Teleport pad
	event.remove({ id: 'allthemodium:teleport_pad' })
	event.remove({ id: /exdeorum:.+?_compressed_sieve/ })

	// Nuggetless Gears
	event.remove({ id: 'enderio:iron_gear' })
	event.remove({ id: 'industrialforegoing:iron_gear' })
	event.remove({ id: 'industrialforegoing:gold_gear' })
	event.remove({ id: 'industrialforegoing:diamond_gear' })

	// Rubber
	event.shaped('8x thermal:rubber', ['N  ', ' N ', '  N'], { N: 'mysticalagriculture:rubber_essence' })
	event.shaped('8x industrialforegoing:dryrubber', [' N ', ' N ', ' N '], { N: 'mysticalagriculture:rubber_essence' })

	// Crying obby w/create
	let createFilling = (input, fluid, fluidAmount, result) => {
		event.custom({
			type: "create:filling",
			ingredients: [
				{
					item: input
				},
				{
					fluid: fluid,
					amount: fluidAmount
				}
			],
			results: [
				{
					item: result
				}
			]
		})
	}

	createFilling('minecraft:obsidian', 'exdeorum:witch_water', 1000, 'minecraft:crying_obsidian')

	// Flashpine
	event.custom({
		"type": "ars_nouveau:enchanting_apparatus",
		"output": Item.of("ars_elemental:flashpine_pod").toJson(),
		"pedestalItems": [
			{ "item": Ingredient.of('ars_nouveau:air_essence').toJson() },
		],
		"reagent": [Item.of("ars_nouveau:magebloom_crop").toJson()],
		//"sourceCost": 10000
	}).id('ars_elemental:ars_elemental/flashpine_pod')
})