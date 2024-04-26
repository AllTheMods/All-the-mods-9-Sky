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
    .input('minecraft:ice')
    .input('minecraft:snowball')
    .input('minecraft:snow_block')
    .input('minecraft:snowball')
    .input('minecraft:ice')
    .input('minecraft:snowball')
    .input('minecraft:snow_block')
    .input('minecraft:snowball')
    .mobOutput('thermal:blizz')

    //basalz
    event.recipes.summoningrituals
    .altar('minecraft:blaze_powder')
    .sacrifice('minecraft:blaze')
    .input('#forge:dusts/obsidian')
    .input('minecraft:stone')
    .input('#forge:dusts/obsidian')
    .input('minecraft:dirt')
    .input('#forge:dusts/obsidian')
    .input('minecraft:stone')
    .input('#forge:dusts/obsidian')
    .mobOutput('thermal:basalz')

    //chicken
    event.recipes.summoningrituals
    .altar('minecraft:wheat_seeds')
    .input('minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:dirt')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:bone_meal')
    .mobOutput('miecraft:chicken')

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
    .input('minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:dirt')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:white_wool')
    .mobOutput('minecraft:sheep')

    //pig
    event.recipes.summoningrituals
    .altar('minecraft:carrot')
    .input('minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:dirt')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('thermal:carrot_block')
    .mobOutput('minecraft:pig')

    //fox
    event.recipes.summoningrituals
    .altar('minecraft:sweet_berries')
    .input('minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:dirt')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:spruce_sapling')
    .mobOutput('minecraft:fox')

    //bat
    event.recipes.summoningrituals
    .altar('minecraft:torch')
    .input('minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:dirt')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:coal_block')
    .mobOutput('minecraft:bat')

    //wolf
    event.recipes.summoningrituals
    .altar('minecraft:bone')   
    .input('minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:dirt')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:bone_block')
    .mobOutput('minecraft:wolf')

    //cat
    event.recipes.summoningrituals
    .altar('minecraft:cod')   
    .input('minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:dirt')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:cooked_cod')
    .mobOutput('minecraft:cat')
    
    //bee
    event.recipes.summoningrituals
    .altar('minecraft:glass_bottle')   
    .input('minecraft:dirt')
    .input('minecraft:grass')
    .input('minecraft:bone_meal')
    .input('minecraft:dirt')
    .input('minecraft:clay')
    .input('minecraft:grass_block')
    .input('minecraft:stone')
    .input('minecraft:sugar')
    .mobOutput('minecraft:bee')
})