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
    .input('allthetweaks:nexium_emitter')
	.blockBelow('allthetweaks:nether_star_block')
	.itemOutput('allthetweaks:atm_star')
	.recipeTime(60)

//Black hole
    event.shaped('allthetweaks:pulsating_black_hole', ["asd", "fgh", "jkl"], {
        a: "allthecompressed:oak_log_5x",
        s: "allthecompressed:iron_block_5x",
        d: "allthecompressed:dirt_5x",
        f: "allthecompressed:redstone_block_5x",
        g: "allthecompressed:cobblestone_6x",
        h: "allthecompressed:gold_block_5x",
        j: "allthecompressed:obsidian_5x",
        k: "allthecompressed:gravel_5x",
        l: "allthecompressed:sand_5x"
      }).id('kubejs:allthetweaks/pulsating_black_hole')

  // Philosopher's Fuel
  event.shaped('allthetweaks:philosophers_fuel', ['ABC', 'DEF', 'GHI'], {
    A: 'generatorgalore:ender_generator',
    B: 'ironfurnaces:million_furnace'  ,
    C: 'projecte:aeternalis_fuel_block',
    D: Item.of('projecte:arcana_ring', '{Mode:0b}'),
    E: 'mysticalagradditions:insanium_coal_block',
    F: 'forbidden_arcanus:deorum_block',
    G: 'mysticalagriculture:awakened_supremium_furnace',
    H: 'forcecraft:heat_core',
    I: 'enderio:sentient_ender'
    }).id('kubejs:allthetweaks/philosophers_fuel')

  // Improbable Probability Device
  event.shaped('allthetweaks:improbable_probability_device', ['ABA', 'CGE', 'FDF'], {
    A: 'mekanism:pellet_antimatter',
    B: 'enderio:vibrant_capacitor_bank',
    C: ['extrastorage:storagepart_16384k', 'megacells:cell_component_16m'],
    D: 'advgenerators:power_capacitor_tier3',
    E: 'rftoolsutility:flight_module',
    F: Item.of('powah:battery_nitro', '{powah_tile_data:{energy_stored_main_energy:2000000000L}}').weakNBT(),
    G: Item.of('projecte:swiftwolf_rending_gale', '{StoredEMC:64L,UnprocessedEMC:0.0d}')
    }).id('kubejs:allthetweaks/improbable_probability_device')

//withers compass
    // Withers Compass
    event.shaped('allthetweaks:withers_compass', ['DCD', 'ABA', 'DED'], {
        A: 'generatorgalore:netherstar_generator',
        B: 'industrialforegoing:wither_builder',
        C: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:wither"}}').strongNBT(),
        D: 'bloodmagic:accelerationrune',
        E: 'reliquary:witherless_rose'
      }).id('kubejs:allthetweaks/withers_compass')

    // Nexium Emitter
    event.shaped('allthetweaks:nexium_emitter', ['A B', ' CF', 'GED'], {
        A: 'powah:player_transmitter_nitro',
        B: [Item.of('ae2wtlib:wireless_universal_terminal', '{crafting:1b,internalMaxPower:4800000.0d,pattern_access:1b,pattern_encoding:1b}'), Item.of('universalgrid:wireless_universal_grid', '{gridType:0}')],
        F: [Item.of('mekanism:module_gravitational_modulating_unit')],
        D: 'create:mechanical_arm',
        E: 'ae2:singularity',
        C: 'xnet:wireless_router',
        G: 'exchangers:end_exchanger'
      }).id('kubejs:allthetweaks/nexium_emitter')

  // Dragon Soul
  event.shaped('allthetweaks:dragon_soul', ['CDA', 'XNY', 'BGE'], {
    C: 'mysticalagradditions:dragon_scale',
    D: 'occultism:soul_gem',
    A: 'minecraft:dragon_egg',
    N: 'allthemodium:piglich_heart_block',
    B: 'botania:life_essence',
	G: 'productivebees:inactive_dragon_egg',
    E: 'ars_nouveau:summon_focus',
    X: 'draconicevolution:chaotic_core',
    Y: 'draconicevolution:chaotic_energy_core'
  }).id('kubejs:allthetweaks/dragon_soul')

  // dimensional_seed
  event.shaped('allthetweaks:dimensional_seed', ['ABC', 'DEF', 'GHI'], {
    A: 'mysticalagriculture:nitro_crystal_seeds',
    B: 'thermal_extra:dragonsteel_ingot',
    C: 'mysticalagriculture:dragon_egg_seeds',
    D: 'thermal_extra:twinite_ingot',
    E: 'projecte:dark_matter',
    F: 'thermal_extra:shellite_ingot',
    G: 'mysticalagriculture:gaia_spirit_seeds',
    H: 'thermal_extra:soul_infused_ingot',
    I: 'mysticalagriculture:nether_star_seeds'
    }).id('kubejs:allthetweaks/dimensional_seed')

  // Oblivion Shard
  event.shaped('allthetweaks:oblivion_shard', [' AB', 'ACA', 'BA '], {
    A: 'projecte:red_matter',
    C: 'projecte:klein_star_omega',
    B: 'ae2:quantum_entangled_singularity'
  }).id('kubejs:allthetweaks/oblivion_shard')

//
})