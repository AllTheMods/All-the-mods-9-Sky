// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    const Materials = Object.freeze({
        Dirt:           'minecraft:dirt',
        SoulSand:       'minecraft:soul_sand',
        RedSand:        'minecraft:red_sand',
        Gravel:         'minecraft:gravel',
        Sand:           'minecraft:sand',
        Dust:           'exdeorum:dust',
        Netherrack:     'exdeorum:crushed_netherrack',
        EndStone:       'exdeorum:crushed_end_stone',
        Deepslate:      'exdeorum:crushed_deepslate',
        Blackstone:     'exdeorum:crushed_blackstone',
        Moss:           'minecraft:moss_block'
    });

    const Meshes = Object.freeze({
        STRING:   'exdeorum:string_mesh',
        FLINT:    'exdeorum:flint_mesh',
        IRON:     'exdeorum:iron_mesh',
        GOLD:     'exdeorum:golden_mesh',
        DIAMOND:  'exdeorum:diamond_mesh',
        NETHERITE:'exdeorum:netherite_mesh'
    });

    allthemods.remove({id: Meshes.FLINT})
    allthemods.remove({id: Meshes.IRON})
    allthemods.remove({id: Meshes.GOLD})
    allthemods.remove({id: Meshes.DIAMOND})

    /**
     * @param {string} input
     * @param {string} mesh
     * @param {string} result
     * @param {number} [amount]
     * @param {number} [chance]
     */
    function sieving(input, mesh, result, amount, chance) {
        allthemods.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: input },
            mesh: mesh,
            result: result,
            result_amount: {
                type: 'minecraft:binomial',
                n: amount || 1,
                p: chance || 1
            }
        }).id(`allthemods:exdeorum/sieve/${mesh.split(':')[1]}/${result.split(':')[1]}`);
    }

    /**
     * @param {string} input
     * @param {string} result
     * @param {number} [amount]
     */
    function hammer(input, result, amount) {
        allthemods.custom({
            type: 'exdeorum:hammer',
            ingredient: [{ item: input }],
            result: result,
            result_amount: amount || 1.0
        }).id(`allthemods:exdeorum/hammer/${result.split(':')[1]}`);
    }

    /**
     * @param {string} fluid
     * @param {string} input
     * @param {string} result
     * @param {number} [fluidAmount]
     */
    function barrelMixin(fluid, input, result, fluidAmount) {
        allthemods.custom({
            type: 'exdeorum:barrel_mixing',
            fluid: fluid,
            fluid_amount: fluidAmount || 1000,
            ingredient: Ingredient.of(input),
            result: result
        }).id(`allthemods:exdeorum/barrel_mixing/item/${fluid.split(':')[1]}/${result.split(':')[1]}`);
    }

    /**
     * @param {string}  baseFluid
     * @param {string}  addFluid
     * @param {boolean} consumes
     * @param {string}  result
     * @param {number}  [baseAmount]
     */
    function barrelFluidMixing(baseFluid, addFluid, consumes, result, baseAmount) {
        allthemods.custom({
            type: 'exdeorum:barrel_fluid_mixing',
            base_fluid: baseFluid,
            base_fluid_amount: baseAmount || 1000,
            additive_fluid: addFluid,
            consumes_additive: consumes,
            result: result
        }).id(`allthemods:exdeorum/barrel_mixing/fluid/${addFluid.split(':')[1]}/${result.split(':')[1]}`);
    }

    /**
     * @param {string} block
     * @param {number} heatValue
     */
    function heatSource(block, heatValue) {
        allthemods.custom({
            type: 'exdeorum:crucible_heat_source',
            block_predicate: { block: block },
            heat_value: heatValue
        }).id(`allthemods:exdeorum/heat_source/${block.split(':')[1]}`);
    }

    /**
     * @param {string} input
     * @param {string} fluidName
     * @param {number} amount
     */
    function lavaCrucible(input, fluidName, amount) {
        allthemods.custom({
            type: 'exdeorum:lava_crucible',
            ingredient: Ingredient.of(input),
            fluid: { FluidName: fluidName, Amount: amount }
        }).id(`allthemods:exdeorum/lava_crucible/${fluidName}/${fluidName.split(':')[1]}`);
    }

    [
        { mesh: Meshes.FLINT,     chance: 0.04 },
        { mesh: Meshes.IRON,      chance: 0.05 },
        { mesh: Meshes.DIAMOND,   chance: 0.06 },
        { mesh: Meshes.NETHERITE, chance: 0.08 }
    ].forEach(entry => {
        ['blue', 'red', 'green', 'light', 'dark'].forEach(color => {
            sieving(
                Materials.Dust,
                entry.mesh,
                `xycraft_world:xychorium_gem_${color}`,
                1,
                entry.chance
            );
        });
    });

    // Draconium
    [
        { mesh: Meshes.DIAMOND,   amount: 1, chance: 0.005 },
        { mesh: Meshes.NETHERITE, amount: 2, chance: 0.075 }
    ].forEach(entry => {
        sieving(Materials.EndStone, entry.mesh, 'draconicevolution:draconium_dust', entry.amount, entry.chance);
    });

    // Diamond adjustment
    allthemods.remove({ output: 'minecraft:diamond', type: 'exdeorum:sieve', mod: 'exdeorum' });
    [
        { mesh: Meshes.IRON,     amount: 1, chance: 0.01 },
        { mesh: Meshes.GOLD,     amount: 1, chance: 0.04 },
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.05 },
        { mesh: Meshes.NETHERITE,amount: 2, chance: 0.06 }
    ].forEach(entry => {
        sieving(Materials.Gravel, entry.mesh, 'minecraft:diamond', entry.amount, entry.chance);
    });

    // Emerald adjustment
    allthemods.remove({ output: 'minecraft:emerald', type: 'exdeorum:sieve', mod: 'exdeorum' });
    [
        { mesh: Meshes.IRON,     amount: 1, chance: 0.01 },
        { mesh: Meshes.GOLD,     amount: 1, chance: 0.03 },
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.04 },
        { mesh: Meshes.NETHERITE,amount: 2, chance: 0.05 }
    ].forEach(entry => {
        sieving(Materials.Gravel, entry.mesh, 'minecraft:emerald', entry.amount, entry.chance);
    });

    // Salt, Apatite, Sulfur, Cinnabar, Flurite
    [
        { mesh: Meshes.IRON,     amount: 1, chance: 0.15 },
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.15 },
        { mesh: Meshes.GOLD,     amount: 1, chance: 0.15 },
        { mesh: Meshes.NETHERITE,amount: 2, chance: 0.12 }
    ].forEach(entry => {
        sieving(Materials.Dust, entry.mesh, 'mekanism:salt',            entry.amount, entry.chance);
        sieving(Materials.Sand, entry.mesh, 'thermal:apatite',          entry.amount, entry.chance);
        sieving(Materials.Sand, entry.mesh, 'thermal:sulfur',           entry.amount, entry.chance);
        sieving(Materials.Sand, entry.mesh, 'thermal:cinnabar',         entry.amount, entry.chance);
        sieving(Materials.Sand, entry.mesh, 'mekanism:fluorite_gem',    entry.amount, entry.chance);
    });

    // Prosperity shard
    [
        { mesh: Meshes.IRON,     amount: 1, chance: 0.2 },
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.2 },
        { mesh: Meshes.GOLD,     amount: 1, chance: 0.2 },
        { mesh: Meshes.NETHERITE,amount: 2, chance: 0.18 }
    ].forEach(entry => {
        sieving(Materials.SoulSand, entry.mesh, 'mysticalagriculture:prosperity_shard', entry.amount, entry.chance);
    });

    // Menril sapling
    // Growing edelwood
    [
        { mesh: Meshes.IRON,     amount: 1, chance: 0.1 },
        { mesh: Meshes.GOLD,     amount: 1, chance: 0.1 },
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.1 },
        { mesh: Meshes.NETHERITE,amount: 1, chance: 0.1 }
    ].forEach(entry => {
        sieving(Materials.Moss, entry.mesh, 'integrateddynamics:menril_sapling',    entry.amount, entry.chance);
        sieving(Materials.Moss, entry.mesh, 'forbidden_arcanus:growing_edelwood',   entry.amount, entry.chance);
    });

    // Soulium dust
    [
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.05 },
        { mesh: Meshes.NETHERITE,amount: 1, chance: 0.1 }
    ].forEach(entry => {
        sieving(Materials.SoulSand, entry.mesh, 'mysticalagriculture:soulium_dust', entry.amount, entry.chance);
    });

    // Yellow Archwood sapling
    [
        { mesh: Meshes.FLINT,    amount: 1, chance: 0.1 },
        { mesh: Meshes.IRON,     amount: 1, chance: 0.1 },
        { mesh: Meshes.GOLD,     amount: 1, chance: 0.1 },
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.1 },
        { mesh: Meshes.NETHERITE,amount: 1, chance: 0.1 }
    ].forEach(entry => {
        sieving(Materials.Moss, entry.mesh, 'ars_elemental:yellow_archwood_sapling', entry.amount, entry.chance);
    });

    // Inferium essence
    [
        { mesh: Meshes.IRON,     amount: 1, chance: 0.3 },
        { mesh: Meshes.DIAMOND,  amount: 1, chance: 0.3 },
        { mesh: Meshes.GOLD,     amount: 1, chance: 0.3 },
        { mesh: Meshes.NETHERITE,amount: 1, chance: 0.3 }
    ].forEach(entry => {
        sieving(Materials.SoulSand, entry.mesh, 'mysticalagriculture:inferium_essence', entry.amount, entry.chance);
    });

    // Forcegem
    sieving(Materials.Dust, Meshes.IRON,     'forcecraft:force_gem',  1, 0.06);
    sieving(Materials.Dust, Meshes.GOLD,     'forcecraft:force_gem',  1, 0.07);
    sieving(Materials.Dust, Meshes.DIAMOND,  'forcecraft:force_gem',  2, 0.07);
    sieving(Materials.Dust, Meshes.NETHERITE,'forcecraft:force_gem',  2, 0.09);

    // Arcane Crystal
    sieving(Materials.Dust, Meshes.IRON,     'forbidden_arcanus:arcane_crystal',  1, 0.05);
    sieving(Materials.Dust, Meshes.DIAMOND,  'forbidden_arcanus:arcane_crystal',  1, 0.06);
    sieving(Materials.Dust, Meshes.NETHERITE,'forbidden_arcanus:arcane_crystal',  1, 0.08);

    // Raw iesnium
    sieving(Materials.Blackstone, Meshes.NETHERITE, 'occultism:raw_iesnium', 1, 0.05);

    // Crucible heating blocks
    heatSource('botania:blaze_block',           8);
    heatSource('alltheores:uranium_block',      20);
    heatSource('pneumaticcraft:heat_frame',     50);
    heatSource('mekanism:superheating_element', 60);
    heatSource('projecte:dark_matter_block',    100);

    for(let i = 1; i < 10; i++) {
        heatSource(`allthecompressed:blaze_block_${i}x`,8 * Math.pow(i  + 1, 3));
    }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.