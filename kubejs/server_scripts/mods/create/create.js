ServerEvents.recipes(allthemods => {

    /**
     * @param {object[]} ingredients
     * @param {object[]} results
     * @param {string}   [heat='none']
     * @param {string}   [id]
     */
    function createMixingRecipe(ingredients, results, heat, id) {
        const recipe = {
            type: 'create:mixing',
            ingredients: ingredients,
            results: results
        };
        if (heat) recipe.heatRequirement = heat;
        let idType = ingredients[0].item || ingredients[0].tag;
        const defaultId = `allthemods:create/mixing/${idType.split(':')[1]}`;
        allthemods.custom(recipe).id(id || defaultId);
    }

    /**
     * @param {string} beeType
     * @param {{ item?:string, tag?:string, fluid?:string, count?:number, chance?:number }} output
     */
    function beeMixing(beeType, output) {
        const result = {
            count: output.count || 1,
            chance: output.chance || 1.0
        };
        let resultFluid = { fluid: 'productivebees:honey', amount: 50 }

        if(output.tag) result.item = Ingredient.of(output.tag).getItemIds()[0]
        else if(output.fluid) resultFluid = {fluid: output.fluid, amount: output.count}
        else result.item = output.item

        let results = [
            resultFluid,
            { item: 'productivebees:wax' }
        ]
        if(result.item) results.push(result)
        createMixingRecipe(
            [
                {
                    type: 'forge:nbt',
                    item: 'productivebees:configurable_honeycomb',
                    nbt: { EntityTag: { type: `productivebees:${beeType}` } }
                }
            ],
            results,
            'heated',
            `allthemods:create/mixing/${beeType}`
        );
    }

    beeMixing('end_steel',       { item: 'enderio:end_steel_nugget',            count: 3,   chance: 0.50 })
    beeMixing('fluix',           { item: 'ae2:fluix_crystal',                               chance: 0.20 })
    beeMixing('soularium',       { item: 'enderio:soularium_nugget',            count: 5,                })
    beeMixing('cobalt',          { tag:  '#forge:nuggets/cobalt',               count: 4,   chance: 0.50 })
    beeMixing('fluorite',        { item: 'mekanism:fluorite_gem',                           chance: 0.50 })
    beeMixing('bismuth',         { tag:  '#forge:dusts/bismuth',                count: 1,   chance: 0.40 })
    beeMixing('energetic_alloy', { tag:  '#forge:nuggets/energetic_alloy',      count: 8,   chance: 0.80 })
    beeMixing('peridot',         { item: 'alltheores:peridot',                              chance: 0.50 })
    beeMixing('platinum',        { item: 'alltheores:raw_platinum',                         chance: 0.40 })
    beeMixing('dark_steel',      { tag:  '#forge:nuggets/dark_steel',           count: 4,   chance: 0.75 })
    beeMixing('infinity',        { tag:  '#forge:dusts/grains_of_infinity',                 chance: 0.75 })
    beeMixing('vibrant_alloy',   { tag:  '#forge:nuggets/vibrant_alloy',        count: 7,   chance: 0.75 })
    beeMixing('iridium',         { tag:  '#forge:nuggets/iridium',              count: 3,   chance: 0.75 })
    beeMixing('hematophagous',   { fluid:'bloodmagic:life_essence_fluid',       count: 400               })
    beeMixing('conductive_alloy',{ tag:  '#forge:nuggets/conductive_alloy',     count: 7,   chance: 0.75 })
    beeMixing('titanium',        { tag:  '#forge:dusts/titanium',                           chance: 0.40 })
    beeMixing('redstone_alloy',  { tag:  '#forge:nuggets/redstone_alloy',       count: 8,   chance: 0.50 })
    beeMixing('tungsten',        { tag:  '#forge:dusts/tungsten',                           chance: 0.40 })
    beeMixing('chaos',           { item: 'draconicevolution:small_chaos_frag',              chance: 0.10 })
    beeMixing('copper_alloy',    { tag:  '#forge:nuggets/copper_alloy',         count: 9,   chance: 0.80 })
    beeMixing('pulsating_alloy', { tag:  '#forge:nuggets/pulsating_alloy',      count: 12,  chance: 0.50 })

    allthemods.smelting('alltheores:platinum_ingot', 'create:crushed_raw_platinum')
})
