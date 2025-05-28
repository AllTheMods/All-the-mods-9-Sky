// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    /**
     * @param {{ energy: number, fluid?: { amount: number, name: string }, input_items?: Array<{ amount: number, input: string }> }} inputs
     * @param {{ count: number, id: string }} output
     * @param {string} [customId]
     */
    function reaction({ energy, fluid, input_items }, output, customId) {
        const recipe = {
            type: 'advanced_ae:reaction',
            energy: energy
        };

        if (fluid) {
            recipe.fluid = {
                fluidStack: {
                    Amount: fluid.amount,
                    FluidName: fluid.name
                }
            };
        }

        if (input_items) {
            recipe.input_items = input_items.map(i => ({
                amount: i.amount ?? 1,
                ingredient: Ingredient.of(i.input)
            }));
        }

        recipe.output = {
            '#': output.count ?? 1,
            '#c': "ae2:i",
            id: output.id
        };

        const idPath = customId
            ? customId
            : `allthemods:reaction/${output.id.split(':')[1]}`;

        allthemods.custom(recipe).id(idPath);
    }

    reaction(
        {
            energy: 100000,
            fluid: { amount: 100, name: 'advanced_ae:quantum_infusion_source' },
            input_items: [
                { amount: 1, input: 'ae2:singularity' },
                { amount: 1, input: '#forge:dusts/ender_pearl' },
                { amount: 1, input: 'minecraft:tnt' }
            ]
        },
        { count: 2, id: 'ae2:quantum_entangled_singularity' }
    );
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.