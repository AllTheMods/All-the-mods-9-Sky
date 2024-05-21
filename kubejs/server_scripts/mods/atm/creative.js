ServerEvents.recipes( event => {

    event.recipes.summoningrituals
    .altar('projecte:red_matter')
    .sacrifice('minecraft:warden')
    .input('allthetweaks:oblivion_shard')
    .input('allthetweaks:improbable_probability_device')
    .input('allthetweaks:philosophers_fuel')
    .input('allthetweaks:pulsating_black_hole')
    .input('allthetweaks:withers_compass')
    .input('allthetweaks:dimensional_seed')
    .input('allthetweaks:dragon_soul')
	.blockBelow('allthetweaks:nether_star_block')
	.itemOutput('allthetweaks:atm_star')
	.recipeTime(60)
})