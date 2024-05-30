ServerEvents.recipes(event => {
    //Inputs
        let Dirt = 'minecraft:dirt'
        let SoulSand = 'minecraft:soul_sand'
        let RedSand = 'minecraft:red_sand'
        let Gravel = 'minecraft:gravel'
        let Sand = 'minecraft:sand'
        let Dust = 'exdeorum:dust'
        let Netherrack = 'exdeorum:crushed_netherrack'
        let EndStone = 'exdeorum:crushed_end_stone'
        let Deepslate = 'exdeorum:crushed_deepslate'
        let Blackstone = 'exdeorum:crushed_blackstone'
        let Moss = 'minecraft:moss_block'

        let StringMesh = 'exdeorum:string_mesh'
        let FlintMesh = 'exdeorum:flint_mesh'
        let IronMesh = 'exdeorum:iron_mesh'
        let GoldMesh = 'exdeorum:golden_mesh'
        let DiamondMesh = 'exdeorum:diamond_mesh'
        let NetheriteMesh = 'exdeorum:netherite_mesh'

    // Removal of mesh recipes
        event.remove( { id: 'exdeorum:flint_mesh' } )
        event.remove( { id: 'exdeorum:iron_mesh' })
        event.remove( { id: 'exdeorum:golden_mesh' })
        event.remove( { id: 'exdeorum:diamond_mesh' })

    let addSifting = (input, mesh, output, amount, chance) => {
        event.custom(
            {
                type: 'exdeorum:sieve',
                ingredient: {
                    item: input
                },
                mesh: mesh,
                result: output,
                result_amount: {
                    type: 'minecraft:binomial',
                    n: amount,
                    p: chance
                }
            }
        )
    }

    let addHammer = (input, output) => {
        event.custom(
            {
                type: 'exdeorum:hammer',
                ingredient: [
                    {
                        item: input
                    }
                ],
                result: output,
                result_amount: 1.0
            }
        )
    }

    let addBarrelMixing = (fluid, input, output) => {
        event.custom(
            {
                type: 'exdeorum:barrel_mixing',
                fluid: fluid,
                fluid_amount: 1000,
                ingredient: {
                    item: input
                },
                result: output
            }
        )
    }

    let addBarrelFluidMixing = (base, input, consume, output) => {
        event.custom(
            {
                type: 'exdeorum:barrel_fluid_mixing',
                additive_fluid: input,
                base_fluid: base,
                base_fluid_amount: 1000,
                consumes_additive: consume,
                result: output
            }
        )
    }
    
    let addHeatSource = (block, heat) => {
        event.custom(
            {
                type: 'exdeorum:crucible_heat_source',
                block_predicate: {
                    block: block
                },
                heat_value: heat
            }
        )
    }

    let addHeatedCrucible = (input, fluid, amount) => {
        event.custom(
            {
                type: 'exdeorum:lava_crucible',
                fluid: {
                    Amount: amount,
                    FluidName: fluid
                },
                ingredient: {
                    item: input
                }
            }
        )
    }


//forcegem sieve
addSifting(Dust, FlintMesh, 'forcecraft:force_gem', 1, 0.06)
addSifting(Dust, IronMesh, 'forcecraft:force_gem', 1, 0.06)
addSifting(Dust, GoldMesh, 'forcecraft:force_gem', 1, 0.07)
addSifting(Dust, DiamondMesh, 'forcecraft:force_gem', 1, 0.07)
addSifting(Dust, NetheriteMesh, 'forcecraft:force_gem', 1, 0.09)

//Arcane Crystal sieve
addSifting(Dust, IronMesh, 'forbidden_arcanus:arcane_crystal', 1, 0.05)
addSifting(Dust, DiamondMesh, 'forbidden_arcanus:arcane_crystal', 1, 0.06)
addSifting(Dust, NetheriteMesh, 'forbidden_arcanus:arcane_crystal', 1, 0.08)

// misc missing ones
addSifting(SoulSand, IronMesh, 'mysticalagriculture:prosperity_shard', 1, 0.2)
addSifting(SoulSand, DiamondMesh, 'mysticalagriculture:prosperity_shard', 1, 0.2)
addSifting(SoulSand, GoldMesh, 'mysticalagriculture:prosperity_shard', 1, 0.2)
addSifting(SoulSand, NetheriteMesh, 'mysticalagriculture:prosperity_shard', 1, 0.2)
addSifting(Moss, IronMesh, 'integrateddynamics:menril_sapling', 1, 0.1)
addSifting(Moss, GoldMesh, 'integrateddynamics:menril_sapling', 1, 0.1)
addSifting(Moss, DiamondMesh, 'integrateddynamics:menril_sapling', 1, 0.1)
addSifting(Moss, NetheriteMesh, 'integrateddynamics:menril_sapling', 1, 0.1)
addSifting(Moss, IronMesh, 'forbidden_arcanus:growing_edelwood', 1, 0.1)
addSifting(Moss, GoldMesh, 'forbidden_arcanus:growing_edelwood', 1, 0.1)
addSifting(Moss, DiamondMesh, 'forbidden_arcanus:growing_edelwood', 1, 0.1)
addSifting(Moss, NetheriteMesh, 'forbidden_arcanus:growing_edelwood', 1, 0.1)
addSifting(Blackstone, NetheriteMesh, 'occultism:raw_iesnium', 1, 0.05)

//xycraft from dust
addSifting(Dust, FlintMesh, 'xycraft_world:xychorium_gem_blue', 1, 0.05)
addSifting(Dust, FlintMesh, 'xycraft_world:xychorium_gem_red', 1, 0.05)
addSifting(Dust, FlintMesh, 'xycraft_world:xychorium_gem_green', 1, 0.05)
addSifting(Dust, FlintMesh, 'xycraft_world:xychorium_gem_light', 1, 0.05)
addSifting(Dust, FlintMesh, 'xycraft_world:xychorium_gem_dark', 1, 0.05)

addSifting(Dust, IronMesh, 'xycraft_world:xychorium_gem_blue', 1, 0.06)
addSifting(Dust, IronMesh, 'xycraft_world:xychorium_gem_red', 1, 0.06)
addSifting(Dust, IronMesh, 'xycraft_world:xychorium_gem_green', 1, 0.06)
addSifting(Dust, IronMesh, 'xycraft_world:xychorium_gem_light', 1, 0.06)
addSifting(Dust, IronMesh, 'xycraft_world:xychorium_gem_dark', 1, 0.06)

addSifting(Dust, DiamondMesh, 'xycraft_world:xychorium_gem_blue', 1, 0.7)
addSifting(Dust, DiamondMesh, 'xycraft_world:xychorium_gem_red', 1, 0.7)
addSifting(Dust, DiamondMesh, 'xycraft_world:xychorium_gem_green', 1, 0.7)
addSifting(Dust, DiamondMesh, 'xycraft_world:xychorium_gem_light', 1, 0.7)
addSifting(Dust, DiamondMesh, 'xycraft_world:xychorium_gem_dark', 1, 0.7)

addSifting(Dust, NetheriteMesh, 'xycraft_world:xychorium_gem_blue', 2, 0.05)
addSifting(Dust, NetheriteMesh, 'xycraft_world:xychorium_gem_red', 2, 0.05)
addSifting(Dust, NetheriteMesh, 'xycraft_world:xychorium_gem_green', 2, 0.05)
addSifting(Dust, NetheriteMesh, 'xycraft_world:xychorium_gem_light', 2, 0.05)
addSifting(Dust, NetheriteMesh, 'xycraft_world:xychorium_gem_dark', 2, 0.05)

//Diamond adjustment
event.remove({output: 'minecraft:diamond', type: 'exdeorum:sieve', mod: 'exdeorum'});
addSifting(Gravel, FlintMesh, 'minecraft:diamond', 1, 0.01)
addSifting(Gravel, IronMesh, 'minecraft:diamond', 1, 0.04)
addSifting(Gravel, GoldMesh, 'minecraft:diamond', 1, 0.05)
addSifting(Gravel, DiamondMesh, 'minecraft:diamond', 1, 0.06)
addSifting(Gravel, NetheriteMesh, 'minecraft:diamond', 1, 0.07)

//Emerald Adjustment
event.remove({output: 'minecraft:emerald', type: 'exdeorum:sieve', mod: 'exdeorum'});
addSifting(Gravel, FlintMesh, 'minecraft:emerald', 1, 0.02)
addSifting(Gravel, IronMesh, 'minecraft:emerald', 1, 0.03)
addSifting(Gravel, GoldMesh, 'minecraft:emerald', 1, 0.04)
addSifting(Gravel, DiamondMesh, 'minecraft:emerald', 1, 0.05)
addSifting(Gravel, NetheriteMesh, 'minecraft:emerald', 1, 0.07)

// misc missing ones
addSifting(SoulSand, IronMesh, 'mysticalagriculture:prosperity_shard', 1, 0.2)
addSifting(SoulSand, DiamondMesh, 'mysticalagriculture:prosperity_shard', 1, 0.2)
addSifting(SoulSand, GoldMesh, 'mysticalagriculture:prosperity_shard', 1, 0.2)
addSifting(SoulSand, NetheriteMesh, 'mysticalagriculture:prosperity_shard', 1, 0.2)
addSifting(Moss, IronMesh, 'integrateddynamics:menril_sapling', 1, 0.1)
addSifting(Moss, GoldMesh, 'integrateddynamics:menril_sapling', 1, 0.1)
addSifting(Moss, DiamondMesh, 'integrateddynamics:menril_sapling', 1, 0.1)
addSifting(Moss, NetheriteMesh, 'integrateddynamics:menril_sapling', 1, 0.1)
addSifting(Moss, IronMesh, 'forbidden_arcanus:growing_edelwood', 1, 0.1)
addSifting(Moss, GoldMesh, 'forbidden_arcanus:growing_edelwood', 1, 0.1)
addSifting(Moss, DiamondMesh, 'forbidden_arcanus:growing_edelwood', 1, 0.1)
addSifting(Moss, NetheriteMesh, 'forbidden_arcanus:growing_edelwood', 1, 0.1)
addSifting(Blackstone, NetheriteMesh, 'occultism:raw_iesnium', 1, 0.05)
addSifting(SoulSand, DiamondMesh, 'mysticalagriculture:soulium_dust', 1, 0.05)
addSifting(SoulSand, NetheriteMesh, 'mysticalagriculture:soulium_dust', 1, 0.1)

//Crucible heating blocks
addHeatSource(`botania:blaze_block`, 8)
addHeatSource(`alltheores:uranium_block`, 20)
addHeatSource(`mekanism:superheating_element`, 60)
addHeatSource('projecte:dark_matter_block', 100)

//    addHammer(Deepslate, 'minecraft:stick')

//    addBarrelMixing('minecraft:water', 'minecraft:dead_bush', 'minecraft:oak_sapling')

//    addBarrelFluidMixing('minecraft:water', 'minecraft:water', false, 'minecraft:stick')

//    addHeatSource(Dust, 69)

//    addHeatedCrucible('minecraft:stick', 'minecraft:milk', 50)
})