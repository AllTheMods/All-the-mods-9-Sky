// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $DyeColor = Java.tryLoadClass('net.minecraft.world.item.DyeColor')

ServerEvents.recipes(allthemods => {

    const Press = Object.freeze({
        UNIVERSAL:    'kubejs:universal_press',
        SILICON:      'ae2:silicon_press',
        CALCULATION:  'ae2:calculation_processor_press',
        ENGINEERING:  'ae2:engineering_processor_press',
        LOGIC:        'ae2:logic_processor_press',
        ENERGY:       'appflux:energy_processor_press',
        QUANTUM:      'advanced_ae:quantum_processor_press',
    });


    /**
     * @param {{top?: string, middle?: string, bottom?: string}} slots
     * @param {string} output
     * @param {string} [customId]
     */
    function inscriber({ top, middle, bottom }, output, customId) {
        const ingredients = {};
        if (top)    ingredients.top    = Ingredient.of(top);
        if (middle) ingredients.middle = Ingredient.of(middle);
        if (bottom) ingredients.bottom = Ingredient.of(bottom);

        const outName   = output.split(':')[1];
        const pressName = top && Object.values(Press).includes(top)
            ? top.split(':')[1]
            : null;

        const idPath = customId ? customId : pressName
            ? `allthemods:inscriber/${pressName}/${outName}`
            : `allthemods:inscriber/${outName}`;

        allthemods.custom({
            type: 'ae2:inscriber',
            mode: 'inscribe',
            ingredients: ingredients,
            result: {
                item: output
            }
        }).id(idPath);
    }

    allthemods.shaped(
        'kubejs:universal_press',
        [
            'FPF',
            'CSL',
            'FEF'
        ], {
            F: '#forge:ingots/sky_steel',
            P: Press.SILICON,
            C: Press.CALCULATION,
            S: 'minecraft:slime_ball',
            L: Press.LOGIC,
            E: Press.ENGINEERING,
        }).id('kubejs:universal_press')

    inscriber({ top: "#forge:dusts/sky_stone" , middle: '#forge:silicon',             bottom: '#forge:plates/iron'}, Press.SILICON);
    inscriber({ top: "#forge:dusts/sky_stone" , middle: '#forge:ingots/gold',         bottom: '#forge:plates/iron'}, Press.LOGIC);
    inscriber({ top: "#forge:dusts/sky_stone" , middle: '#forge:gems/certus_quartz',  bottom: '#forge:plates/iron'}, Press.CALCULATION);
    inscriber({ top: "#forge:dusts/sky_stone" , middle: '#forge:gems/diamond',        bottom: '#forge:plates/iron'}, Press.ENGINEERING);

    inscriber({ top: Press.UNIVERSAL, middle: '#forge:silicon'              }, 'ae2:printed_silicon');
    inscriber({ top: Press.UNIVERSAL, middle: '#forge:gems/certus_quartz'   }, 'ae2:printed_calculation_processor');
    inscriber({ top: Press.UNIVERSAL, middle: '#forge:gems/diamond'         }, 'ae2:printed_engineering_processor');
    inscriber({ top: Press.UNIVERSAL, middle: '#forge:ingots/gold'          }, 'ae2:printed_logic_processor');
    inscriber({ top: Press.UNIVERSAL, middle: '#forge:ingots/sky_steel'     }, 'megacells:printed_accumulation_processor');
    inscriber({ top: Press.UNIVERSAL, middle: 'appflux:charged_redstone'    }, 'appflux:printed_energy_processor');
    inscriber({ top: Press.UNIVERSAL, middle: 'advanced_ae:quantum_alloy'   }, 'advanced_ae:printed_quantum_processor');
    inscriber({ top: Press.UNIVERSAL, middle: '#forge:storage_blocks/iron'  }, Press.UNIVERSAL);

    $DyeColor.values().map(dc => dc.getName()).forEach(color => {
        allthemods.shapeless(`4x ae2:${color}_covered_cable`,    [`ae2:${color}_covered_dense_cable`]).id(`allthemods:ae2/${color}_dense_covered_to_normal`);
        allthemods.shapeless(`4x ae2:${color}_smart_cable`,      [`ae2:${color}_smart_dense_cable`])  .id(`allthemods:ae2/${color}_smart_covered_to_normal`);
        allthemods.shapeless(`ae2:${color}_covered_dense_cable`, [`4x ae2:${color}_covered_cable`])   .id(`allthemods:ae2/${color}_covered_to_dense`);
        allthemods.shapeless(`ae2:${color}_smart_dense_cable`,   [`4x ae2:${color}_smart_cable`])     .id(`allthemods:ae2/${color}_smart_to_dense`);
    })

    allthemods.shapeless(`4x ae2:fluix_covered_cable`, [`ae2:fluix_covered_dense_cable`]).id(`allthemods:ae2/dense_to_normal`);
    allthemods.shapeless(`4x ae2:fluix_smart_cable`, [`ae2:fluix_smart_dense_cable`]).id(`allthemods:ae2/smart_dense_to_smart_normal`);

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.