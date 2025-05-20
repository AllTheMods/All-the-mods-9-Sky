// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    /**
     * @param {string} rawStack
     * @returns {{ id: string, count: number }}
     */
    function parseStack(rawStack) {
        const match = /^(\d+)x\s*(.+)$/.exec(rawStack.trim());
        return match
            ? { count: Number(match[1]), id: match[2] }
            : { count: 1, id: rawStack.trim() };
    }

    /**
     * @param {string} outputStack
     * @param {string} catalystStack
     * @param {number} depthMin
     * @param {number} depthMax
     * @param {number} weight
     * @param {number} [pointer=0]
     * @param {string} [customId]
     */
    function laserDrillOre(outputStack, catalystStack, depthMin, depthMax, weight, pointer, customId) {
        const { id: outputId,   count: outputCount   } = parseStack(outputStack);
        const { id: catalystId, count: catalystCount } = parseStack(catalystStack);

        const recipe = {
            type:    'industrialforegoing:laser_drill_ore',
            output:  { tag: outputId, count: outputCount },
            rarity: [
                {
                    whitelist:  {},
                    blacklist:  {},
                    depth_min:  depthMin,
                    depth_max:  depthMax,
                    weight:     weight
                }
            ],
            pointer: pointer || 0,
            catalyst: { item: catalystId }
        };

        const name = outputId.split(':')[1];
        allthemods
            .custom(recipe)
            .id(customId || `allthemods:industrialforegoing/laser_drill_ore/${name}`);
    }

    /**
     * @param {string} outputStack
     * @param {number} waterNeed
     * @param {number} lavaNeed
     * @param {number} waterConsume
     * @param {number} lavaConsume
     * @param {string} [customId]
     */
    function stoneworkGenerate(outputStack, waterNeed, lavaNeed, waterConsume, lavaConsume, customId) {
        const { id: outputId, count: outputCount } = parseStack(outputStack);

        const recipe = {
            type:   'industrialforegoing:stonework_generate',
            output: { item: outputId },
            waterNeed: waterNeed,
            lavaNeed: lavaNeed,
            waterConsume: waterConsume,
            lavaConsume: lavaConsume
        };

        const name = outputId.split(':')[1];
        allthemods
            .custom(recipe)
            .id(customId || `allthemods:industrialforegoing/stonework_generate/${name}`);
    }



    laserDrillOre(
        'forge:raw_materials/allthemodium',
        'allthemodium:allthemodium_block',
        0, 319, 0
    );
    
    laserDrillOre(
        'forge:raw_materials/vibranium',
        'allthemodium:vibranium_block',
        0, 319, 0
    );

    laserDrillOre(
        'forge:raw_materials/unobtainium',
        'allthemodium:unobtainium_block',
        0, 319, 0
    );

    stoneworkGenerate(
        'minecraft:cobbled_deepslate',
        1000, 1000,
        0, 0
    );
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.