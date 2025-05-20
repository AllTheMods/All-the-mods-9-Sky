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
     * @param {string} inputStack
     * @param {string} outputStack
     * @param {string} [customId]
     */
    function atomizer(inputStack, outputStack, customId) {
        const { id: inputId,  count: inputAmt  } = parseStack(inputStack);
        const { id: outputId }                   = parseStack(outputStack);

        const recipe = {
            type:   'alchemistry:atomizer',
            group:  'alchemistry:atomizer',
            input:  Fluid.of(inputId, inputAmt).toJson(),
            result: Item.of(outputId).toJson()
        };

        const name = outputId.split(':')[1];
        allthemods.custom(recipe).id(
            customId || `allthemods:alchemistry/atomizer/${name}`
        );
    }

    /**
     * @param {string} inputStack
     * @param {string} outputStack
     * @param {string} [customId]
     */
    function liquifier(inputStack, outputStack, customId) {
        const { id: inputId,  count: inputAmt  } = parseStack(inputStack);
        const { id: outputId, count: outputAmt } = parseStack(outputStack);

        const recipe = {
            type:   'alchemistry:liquifier',
            group:  'alchemistry:liquifier',
            input:  { ingredient: Ingredient.of(inputId).toJson(), count: inputAmt },
            result: Fluid.of(outputId, outputAmt).toJson()
        };

        const name = outputId.split(':')[1];
        allthemods.custom(recipe).id(
            customId || `allthemods:alchemistry/liquifier/${name}`
        );
    }

    /**
     * @param {string} inputStack
     * @param {string} outputStack
     * @param {string} [customId]
     */
    function dissolver(inputStack, outputStack, customId) {
        const { id: inputId,  count: inputAmt  } = parseStack(inputStack);
        const { id: outputId, count: outputAmt } = parseStack(outputStack);

        const recipe = {
            type:   'alchemistry:dissolver',
            group:  'alchemistry:dissolver',
            input:  { ingredient: Ingredient.of(inputId), count: inputAmt },
            output: {
                rolls:    1,
                weighted: false,
                groups: [
                    {
                        probability: 100.0,
                        results: [
                            { item: outputId, count: outputAmt }
                        ]
                    }
                ]
            }
        };

        const name = inputId.split(':')[1];
        allthemods.custom(recipe).id(
            customId || `allthemods:alchemistry/dissolver/${name}`
        );
    }

    /**
     * @param {string[]} inputs
     * @param {string}   outputStack
     * @param {string}   [customId]
     */
    function combiner(inputs, outputStack, customId) {
        const parsedInputs = inputs.map(raw => {
            const { id: inputId, count: inputAmt } = parseStack(raw);
            return { ingredient: Ingredient.of(inputId), count: inputAmt };
        });

        const recipe = {
            type:   'alchemistry:combiner',
            group:  'alchemistry:combiner',
            input:  parsedInputs,
            result: { item: outputStack.split('x ').pop() }
        };

        const name = outputStack.split(':')[1];
        allthemods.custom(recipe).id(
            customId || `allthemods:alchemistry/combiner/${name}`
        );
    }


    allthemods.remove({ id: 'alchemistry:atomizer/syrup' });
    allthemods.remove({ id: 'alchemistry:liquifier/syrup' });

    // Atomizer
    atomizer('500x thermal:syrup', '8x chemlib:sucrose');

    liquifier('8x chemlib:sucrose', '500x thermal:syrup');

    combiner(['64x chemlib:mercury_sulfide',    '1x minecraft:egg',         '10x minecraft:bamboo'  ],'minecraft:panda_spawn_egg');
    combiner(['3x chemlib:technetium',          '1x chemlib:cobalt',        '2x chemlib:oxygen'     ],'xycraft_world:xychorium_gem_blue');
    combiner(['3x chemlib:technetium',          '1x chemlib:boron',         '2x chemlib:oxygen'     ],'xycraft_world:xychorium_gem_dark');
    combiner(['3x chemlib:technetium',          '1x chemlib:praseodymium',  '2x chemlib:oxygen'     ],'xycraft_world:xychorium_gem_green');
    combiner(['3x chemlib:technetium',          '1x chemlib:aluminum',      '2x chemlib:oxygen'     ],'xycraft_world:xychorium_gem_light');
    combiner(['3x chemlib:technetium',          '1x chemlib:cadmium',       '2x chemlib:oxygen'     ],'xycraft_world:xychorium_gem_red');

    dissolver('1x #forge:fruits/banana',         '8x chemlib:potassium');
    dissolver('1x absentbydesign:slab_snow',    '8x chemlib:water');
    dissolver('1x #chipped:coal_block',         '18x chemlib:graphite');
    dissolver('1x farmersdelight:beef_patty', '2x chemlib:protein');
    dissolver('1x silentgear:diamond_shard','8x chemlib:graphite');
    dissolver('1x farmersdelight:minced_beef','2x chemlib:protein');
    dissolver('1x #forge:silicon',         '16x chemlib:silicon');

});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.