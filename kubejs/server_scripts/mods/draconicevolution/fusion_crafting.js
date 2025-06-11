// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    /**
     * @param {{item: string} | {items: ({item: string} | {tag: string})[], count: number}} catalyst - The catalyst item
     * @param {({item: string} | {tag: string})[]} ingredients - Array of ingredients
     * @param {{item: string, count?: number}} output - The output item
     * @param {string} [techLevel] - The tech level (defaults to 'wyvern')
     * @param {number} [energy] - The energy required (defaults to 1000000)
     * @param {string} [customId] - Custom recipe ID
     */
    function fusionCrafting(catalyst, ingredients, output, techLevel, energy, customId) {

        const processedIngredients = ingredients.map(ingredient => ({
            consume: true,
            ingredient: ingredient
        }));

        let processedCatalyst = {};

        if(catalyst.item) {
            processedCatalyst = {
                item: catalyst.item
            };
        } else if(catalyst.count) {
            processedCatalyst = {
                type: 'draconicevolution:ingredient_stack',
                count: catalyst.count,
                items: catalyst.items
            };
        }

        const outName = output.item.includes(':')
            ? output.item.split(':')[1]
            : output.item;

        const idPath = customId
            ? customId
            : `draconicevolution:fusion/${outName}`;

        allthemods.custom({
            type: 'draconicevolution:fusion_crafting',
            catalyst: processedCatalyst,
            ingredients: processedIngredients,
            result: output,
            tier: techLevel,
            total_energy: energy || 1000000
        }).id(idPath);
    }


    fusionCrafting(
        { item: 'allthemodium:piglich_heart' },
        [
            { tag: 'forge:ingots/draconium' },
            { tag: 'forge:ingots/draconium' },
            { item: 'draconicevolution:draconium_core' },
            { item: 'draconicevolution:draconium_core' },
            { tag: 'forge:ingots/draconium' },
            { tag: 'forge:ingots/draconium' }
        ],
        { item: 'kubejs:inert_dragon_heart', },
        'WYVERN',
        1000000
    );

    fusionCrafting(
        {
            item: 'kubejs:inert_dragon_heart'
        },
        [
            { tag: 'forge:ingots/draconium_awakened' },
            { tag: 'forge:ingots/draconium_awakened' },
            { item: 'draconicevolution:wyvern_core' },
            { item: 'draconicevolution:medium_chaos_frag' },
            { item: 'draconicevolution:medium_chaos_frag' },
            { item: 'draconicevolution:wyvern_core' },
            { tag: 'forge:ingots/draconium_awakened' },
            { tag: 'forge:ingots/draconium_awakened' }
        ],
        { item: 'draconicevolution:dragon_heart', },
        'DRACONIC',
        8000000
    );


})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.