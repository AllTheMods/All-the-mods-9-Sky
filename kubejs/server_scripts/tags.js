// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('item', allthemods => {

    allthemods.add('minecraft:boats', /byg:\w+?_boat/);
    allthemods.add('minecraft:chest_boats', /byg:.+?_chest_boat/);

    allthemods.add('forge:storage_blocks', [
        '#forge:storage_blocks/raw_elementium',
    ])
    allthemods.add('forge:storage_blocks/raw_elementium', 'mythicbotany:raw_elementium_block');

    allthemods.add('forge:dusts', [
        '#forge:dusts/ender',
        '#forge:dusts/sky_stone',
        '#forge:dusts/netherite',
    ]);
    allthemods.add('forge:dusts/ender', 'ae2:ender_dust');
    allthemods.add('forge:dusts/sky_stone', 'ae2:sky_dust');
    allthemods.add('forge:dusts/netherite', 'alltheores:netherite_dust');

    allthemods.add('forge:raw_materials', [
        '#forge:raw_materials/elementium',
        '#forge:raw_materials/azure_silver',
        '#forge:raw_materials/crimson_iron',
    ]);
    allthemods.add('forge:raw_materials/elementium', 'mythicbotany:raw_elementium');
    allthemods.add('forge:raw_materials/azure_silver', 'silentgear:raw_azure_silver');
    allthemods.add('forge:raw_materials/crimson_iron', 'silentgear:raw_crimson_iron');

    allthemods.add('forge:sawdust', 'exdeorum:wood_chippings');
    allthemods.add('forge:plastic', 'pneumaticcraft:plastic');
    allthemods.add('forge:rubber', [
        'ftbic:rubber',
        'industrialforegoing:dryrubber',
        'thermal:cured_rubber',
    ]);

    allthemods.remove('forge:seeds', '#mysticalagriculture:seeds')
    allthemods.remove('tombstone:seeds', '#mysticalagriculture:seeds')

    allthemods.add('ars_nouveau:golem/shard', [
        'minecraft:amethyst_shard',
        'ae2:certus_quartz_crystal',
    ]);

    allthemods.add('mysticalagriculture:essences', [
        'mysticalagriculture:allthemodium_essence',
        'mysticalagriculture:azure_silver_essence',
        'mysticalagriculture:crimson_iron_essence',
        'mysticalagriculture:unobtainium_essence',
        'mysticalagriculture:vibranium_essence',
    ]);

    allthemods.add('mysticalagriculture:seeds', [
        'mysticalagriculture:allthemodium_seeds',
        'mysticalagriculture:azure_silver_seeds',
        'mysticalagriculture:crimson_iron_seeds',
        'mysticalagriculture:unobtainium_seeds',
        'mysticalagriculture:vibranium_seeds',
    ]);

    allthemods.add('forbidden_arcanus:modifier/eternal_incompatible', [
        'minecraft:nether_star',
        '#alltheores:ore_hammers',
        'apotheosis:potion_charm',
        'bloodmagic:sanguinereverter',
        '#occultism:miners/ores',
        '@ftbic'
    ]);

    allthemods.add('allthemods:sievable', [
        'minecraft:moss_block',
        'exdeorum:crushed_deepslate',
        'exdeorum:crushed_end_stone',
        'minecraft:red_sand',
        'minecraft:dirt',
        'minecraft:soul_sand',
        'exdeorum:crushed_blackstone',
        'exdeorum:crushed_netherrack',
    ]);

    allthemods.add('curios:back', [
        'mekanism:jetpack',
        'mekanism:jetpack_armored'
    ])
});

ServerEvents.tags('block', allthemods => {

    allthemods.add('minecraft:beacon_base_blocks', [
        'allthemodium:vibranium_allthemodium_alloy_block',
        'allthemodium:unobtainium_allthemodium_alloy_block',
        'allthemodium:unobtainium_vibranium_alloy_block',
        'allthetweaks:atm_star_block',
    ]);

    allthemods.add('buildinggadgets:blacklist/generic', '#forge:relocation_not_supported');
    allthemods.add('ae2:blacklisted/spatial', '#forge:relocation_not_supported');
    allthemods.add('forge:relocation_not_supported', [
        'minecraft:beehive',
        'minecraft:bee_nest',
        '@productivebees',
        '@integrateddynamics',
        '@waystones',
    ]);

    allthemods.add('ars_nouveau:golem/budding', [
        'minecraft:budding_amethyst',
        'ae2:damaged_budding_quartz',
        'ae2:chipped_budding_quartz',
        'ae2:flawed_budding_quartz',
        'ae2:flawless_budding_quartz',
    ]);

    allthemods.add('ars_nouveau:golem/cluster', [
        'minecraft:amethyst_cluster',
        'ae2:quartz_cluster',
    ]);

    allthemods.add('mysticalagriculture:crops', [
        'mysticalagriculture:allthemodium_crop',
        'mysticalagriculture:azure_silver_crop',
        'mysticalagriculture:crimson_iron_crop',
        'mysticalagriculture:unobtainium_crop',
        'mysticalagriculture:vibranium_crop',
    ]);

    allthemods.add('entangled:invalid_targets', [
        '@ae2',
        '@megacells',
        '@expatternprovider',
        '@advanced_ae',
        '@refinedstorage',
        '@cabletiers',
        '@extrastorage'
    ]);
});

ServerEvents.tags('fluid', allthemods => {
    allthemods.remove('minecraft:water', [
        'ad_astra:oil',
        'ad_astra:flowing_oil',
        'ad_astra:cryo_fuel',
        'ad_astra:flowing_cryo_fuel',
        'ad_astra:fuel',
        'ad_astra:flowing_fuel',
        'createaddition:flowing_seed_oil',
        'createaddition:seed_oil',
        'createaddition:bioethanol',
        'createaddition:flowing_bioethanol',
    ]);
    allthemods.add('forge:oil', [
        'pneumaticcraft:oil',
        'thermal:crude_oil'
    ]);
    allthemods.add('forge:ethanol', 'chemlib:ethanol_fluid')
});

ServerEvents.tags('entity_type', allthemods => {
    allthemods.add('allthemods:mob_blacklist', [
        '@productivebees',
        'allthemodium:piglich',
        'artifacts:mimic',
        'minecraft:iron_golem',
        'minecraft:wither',
    ]);

    allthemods.add('mob_grinding_utils:no_swab', '#allthemods:mob_blacklist');
    allthemods.add('mob_grinding_utils:no_spawn', '#allthemods:mob_blacklist');
    allthemods.add('pneumaticcraft:vacuum_trap_blacklisted', '#allthemods:mob_blacklist');
    allthemods.add('industrialforegoing:mob_duplicator_blacklist', '#allthemods:mob_blacklist');
    allthemods.add('spirit:soul_cage_blacklisted', '#allthemods:mob_blacklist');

    allthemods.add('ars_nouveau:drygmy_blacklist', [
        '@productivebees',
        'artifacts:mimic',
    ]);

    allthemods.removeAll('spawns_corrupt_lost_soul_chance')
    allthemods.removeAll('spawns_lost_soul_chance')
});

ServerEvents.tags('worldgen/biome', allthemods => {
    allthemods.add('botania:mystical_flower_spawnlist', 'allthemodium:mining');
    allthemods.add('botania:mystical_mushroom_spawnlist', [
        'allthemodium:the_other',
        'allthemodium:soul_sand_valley',
        'allthemodium:warped_forest',
        'allthemodium:desert_hills',
        'allthemodium:desert',
        'allthemodium:crimson_forest',
        'allthemodium:basalt_deltas',
    ]);
});

ServerEvents.tags('mekanism:gas', allthemods => {
    allthemods.add('mekanism:tritium', 'mekanism:tritium')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.