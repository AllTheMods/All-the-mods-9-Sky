// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    /**
     * @param {string} raw
     * @returns {{ id: string, count: number }}
     */
    function parseStack(raw) {
        const match = /^(\d+)x\s*(.+)$/.exec(raw.trim());
        return match
            ? { count: Number(match[1]), id: match[2] }
            : { count: 1, id: raw.trim() };
    }

    /**
     * @param {string} fluidStack
     * @param {string} itemStack
     * @param {string} [customId]
     */
    function atomizer(fluidStack, itemStack, customId) {
        const { id: fluidId, count: fluidAmt } = parseStack(fluidStack);
        const { id: itemId }                 = parseStack(itemStack);

        const recipe = {
            type:   'alchemistry:atomizer',
            group:  'alchemistry:atomizer',
            input:  Fluid.of(fluidId, fluidAmt).toJson(),
            result: Item.of(itemId).toJson()
        };

        const name = itemId.split(':')[1];
        allthemods.custom(recipe).id(customId || `allthemods:alchemistry/atomizer/${name}`);
    }

    /**
     * @param {string} itemStack
     * @param {string} fluidStack
     * @param {string} [customId]
     */
    function liquifier(itemStack, fluidStack, customId) {
        const { id: itemId, count: itemAmt }   = parseStack(itemStack);
        const { id: fluidId, count: fluidAmt } = parseStack(fluidStack);

        const recipe = {
            type:   'alchemistry:liquifier',
            group:  'alchemistry:liquifier',
            input:  { ingredient: Ingredient.of(itemId).toJson(), count: itemAmt },
            result: Fluid.of(fluidId, fluidAmt).toJson()
        };

        const name = fluidId.split(':')[1];
        allthemods.custom(recipe).id(customId || `allthemods:alchemistry/liquifier/${name}`);
    }


    allthemods.remove({ id: 'alchemistry:atomizer/syrup' });
    allthemods.remove({ id: 'alchemistry:liquifier/syrup' });

    atomizer('500x thermal:syrup', '8x chemlib:sucrose');
    liquifier('8x chemlib:sucrose', '500x thermal:syrup');
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.