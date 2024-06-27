ServerEvents.recipes(event => {

    //altar
    event.shaped('summoningrituals:altar', [`GRG`, `SWS`, ` S `], {
        G: `minecraft:gold_ingot`,
        R: `minecraft:red_carpet`,
        S: `minecraft:stone`,
        W: `minecraft:oak_log`
    })

    //blizz
    event.recipes.summoningrituals
    .altar('minecraft:blaze_powder')
    .sacrifice('minecraft:blaze')
    .input('2x minecraft:ice')
    .input('4x minecraft:snowball')
    .input('2x minecraft:snow_block')
    .mobOutput('thermal:blizz')

    //basalz
    event.recipes.summoningrituals
    .altar('minecraft:blaze_powder')
    .sacrifice('minecraft:blaze')
    .input('4x mekanism:dust_obsidian')
    .input('2x minecraft:stone')
    .input('minecraft:dirt')
    .mobOutput('thermal:basalz')

    //chicken
    event.recipes.summoningrituals
    .altar('minecraft:wheat_seeds')
    .input('2x minecraft:dirt')
    .input('minecraft:grass')
    .input('2x minecraft:bone_meal')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .mobOutput('minecraft:chicken')

    //cow
    event.recipes.summoningrituals
    .altar('minecraft:wheat')
    .input('minecraft:leather')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:dirt')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:hay_block')
    .mobOutput('minecraft:cow')

    //sheep
    event.recipes.summoningrituals
    .altar('minecraft:string')
    .input('2x minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:white_wool')
    .mobOutput('minecraft:sheep')

    //pig
    event.recipes.summoningrituals
    .altar('minecraft:carrot')
    .input('2x minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('thermal:carrot_block')
    .mobOutput('minecraft:pig')

    //fox
    event.recipes.summoningrituals
    .altar('minecraft:sweet_berries')
    .input('2x minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:spruce_sapling')
    .mobOutput('minecraft:fox')

    //bat
    event.recipes.summoningrituals
    .altar('minecraft:torch')
    .input('2x minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:coal_block')
    .mobOutput('minecraft:bat')

    //wolf
    event.recipes.summoningrituals
    .altar('minecraft:bone')
    .input('2x minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:bone_block')
    .mobOutput('minecraft:wolf')

    //cat
    event.recipes.summoningrituals
    .altar('minecraft:cod')   
    .input('2x minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:cooked_cod')
    .mobOutput('minecraft:cat')
    
    //bee
    event.recipes.summoningrituals
    .altar('minecraft:glass_bottle')   
    .input('2x minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:sugar')
    .mobOutput('minecraft:bee')

    //slime
    event.recipes.summoningrituals
    .altar('minecraft:milk_bucket')
    .input('4x #forge:slimeballs')
    .input('2x minecraft:stone')
    .input('minecraft:dirt')
    .mobOutput('minecraft:slime')

    //squid
    event.recipes.summoningrituals
    .altar('minecraft:water_bucket')
    .input('4x minecraft:black_dye')
    .input('2x minecraft:stone')
    .input('minecraft:dirt')
    .mobOutput('minecraft:squid')

    //piglich
    event.recipes.summoningrituals
    .altar('enderio:frank_n_zombie')
    .input('3x allthemodium:unobtainium_ingot')
    .input('forcecraft:treasure_core')
    .input('projecte:red_matter')
    .mobOutput('allthemodium:piglich')
})