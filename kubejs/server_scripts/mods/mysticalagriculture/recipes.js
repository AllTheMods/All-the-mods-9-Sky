// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const TIERS = Object.freeze({
    INFERIUM:           new Tier('inferium',            ),
    PRUDENTIUM:         new Tier('prudentium',          ),
    TERTIUM:            new Tier('tertium',             ),
    IMPERIUM:           new Tier('imperium',            ),
    SUPREMIUM:          new Tier('supremium',           ),
    AWAKENED_SUPREMIUM: new Tier('awakened_supremium',  ),
    INSANIUM:           new Tier('insanium',            'mysticalagradditions'),
});

const CROP_ADJUST = [
    { crop: "steel",             tier: TIERS.IMPERIUM   },
    { crop: "bronze",            tier: TIERS.TERTIUM    },
    { crop: "brass",             tier: TIERS.TERTIUM,   block: "alltheores:brass_block"            },
    { crop: "nitro_crystal",     tier: TIERS.INSANIUM   },
    { crop: "spirited_crystal",  tier: TIERS.SUPREMIUM  },
    { crop: "niotic_crystal",    tier: TIERS.SUPREMIUM  },
    { crop: "blazing_crystal",   tier: TIERS.IMPERIUM   },
    { crop: "energized_steel",   tier: TIERS.IMPERIUM   },
    { crop: "certus_quartz",     tier: TIERS.TERTIUM,   block: "ae2:quartz_block"                  },
    { crop: "fluix",             tier: TIERS.IMPERIUM,  block: "ae2:fluix_block"                   },
    { crop: "soularium",         tier: TIERS.IMPERIUM   },
    { crop: "conductive_alloy",  tier: TIERS.TERTIUM    },
    { crop: "copper_alloy",      tier: TIERS.TERTIUM    },
    { crop: "end_steel",         tier: TIERS.SUPREMIUM  },
    { crop: "redstone_alloy",    tier: TIERS.TERTIUM    },
    { crop: "vibrant_alloy",     tier: TIERS.SUPREMIUM  },
    { crop: "dark_steel",        tier: TIERS.IMPERIUM   },
    { crop: "pulsating_alloy",   tier: TIERS.IMPERIUM   },
    { crop: "energetic_alloy",   tier: TIERS.IMPERIUM   },
    { crop: "refined_glowstone", tier: TIERS.IMPERIUM,  block: "mekanism:block_refined_glowstone"  },
    { crop: "refined_obsidian",  tier: TIERS.IMPERIUM,  block: "mekanism:block_refined_obsidian"   },
    { crop: "constantan",        tier: TIERS.IMPERIUM   },
    { crop: "cyanite",           tier: TIERS.SUPREMIUM, block: "biggerreactors:cyanite_block"      },
    { crop: "graphite",          tier: TIERS.TERTIUM,   block: "biggerreactors:graphite_block"     }
];

const ESSENCE_RECIPES = [
    { essence: 'allthemodium',     result: 'allthemodium:allthemodium_nugget'           },
    { essence: 'vibranium',        result: 'allthemodium:vibranium_nugget'              },
    { essence: 'unobtainium',      result: 'allthemodium:unobtainium_nugget'            },
    { essence: 'azure_silver',     result: '6x silentgear:azure_silver_ingot'           },
    { essence: 'crimson_iron',     result: '6x silentgear:crimson_iron_ingot'           },
    { essence: 'prosperity_shard', result: '4x mysticalagriculture:prosperity_shard'    },
];

ServerEvents.recipes(allthemods => {

    /**
     * @param {{ middle?: string, ingredients: string[] }} slots
     * @param {string} output
     * @param {string} [customId]
     */
    function infusion({ middle, ingredients }, output, customId) {
        const mid = middle || 'mysticalagriculture:prosperity_seed_base';

        const slots = [];
        if (ingredients.length === 2) {
            for (let i = 0; i < 8; i++) {
                slots.push(ingredients[i % 2]);
            }
        } else {
            slots.push(ingredients);
        }

        const inputs = slots.map(item => Ingredient.of(item).toJson());

        const outName = output.includes(':')
            ? output.split(':')[1].replace(/^(\d+x\s*)?/, '')
            : output;

        const idPath = customId
            ? customId
            : `allthemods:mysticalagriculture/infusion/${outName}`;

        allthemods.custom({
            type: 'mysticalagriculture:infusion',
            input: { item: mid },
            ingredients: inputs,
            result: { item: output }
        }).id(idPath);
    }

    /**
     * @param {string} essence
     * @param {string} result
     * @param {string} [customId]
     */
    function essenceCircle( essence , result, customId) {
        const idPath = customId
            ? customId
            : `allthemods:mysticalagriculture/${essence}_essence_crafting`;

        allthemods.shaped(
            result,
            [
                'AAA',
                'A A',
                'AAA'
            ], {
                A: `mysticalagriculture:${essence}_essence`
            }
        ).id(idPath);
    }

    /**
     * @param {{ crop: string, tier: Tier, block?: string }} entry
     * @returns {string}
     */
    function getBlock({ crop, tier, block }) {
        const compressed = `allthecompressed:${crop}_block_1x`;
        if (Item.exists(compressed)) return compressed
        if (block != null)return block
        return `#forge:storage_blocks/${crop}`;
    }

    ESSENCE_RECIPES.forEach(entry =>
        essenceCircle(entry.essence , entry.result)
    );

    CROP_ADJUST.forEach(entry => {
        const block = getBlock(entry)
        allthemods.remove({id:`mysticalagriculture:seed/infusion/${entry.crop}`})
        infusion({ ingredients: [ entry.tier.getEssence(), block ]}, `mysticalagriculture:${entry.crop}_seeds`)
    })

    infusion(
        {
            middle: 'mysticalagradditions:insanium_farmland',
            ingredients: [ 'mysticalagradditions:dragon_scale', 'mysticalagradditions:insanium_block']
        },
        'kubejs:magical_soil'
    )


    allthemods.custom({
        type: "thermal:centrifuge",
        ingredient: {
            item: "mysticalagriculture:experience_droplet"
        },
        result: [
            {
                fluid: "cofh_core:experience",
                amount: 250
            }
        ],
        energy: 400
    })

    allthemods.shaped('4x minecraft:turtle_egg',
        [
            'EEE'
        ], {
        E: 'mysticalagriculture:turtle_essence'
    }).id('allthemods:mysticalagriculture/minecraft/turtle_egg')

    allthemods.shaped('2x chemlib:water',
        [
            'EEE'
        ], {
        E: 'mysticalagriculture:water_essence'
    }).id('allthemods:mysticalagriculture/chemlib/chemlib_water')

    allthemods.shaped('8x minecraft:warped_wart_block',
        [
        ' A ',
        'A  ',
        'AAA'
    ], {
        A: 'mysticalagriculture:nether_essence'
    }).id('allthemods:mysticalagriculture/minecraft/warped_wart_block')

    allthemods.shaped('6x minecraft:shroomlight',
        [
            'AGA',
            'GAG',
            'AGA'
        ],{
        A: 'mysticalagriculture:nether_essence',
        G: 'mysticalagriculture:glowstone_essence'
    }).id('allthemods:mysticalagriculture/minecraft/shroomlight')

    allthemods.shaped('8x minecraft:ochre_froglight',
        [
            'NDG',
            'GDN',
            'NDG'
        ],{
        N: 'mysticalagriculture:nature_essence',
        D: 'mysticalagriculture:dye_essence',
        G: 'mysticalagriculture:glowstone_essence'
    }).id('allthemods:mysticalagriculture/ochre_froglight')

    allthemods.shaped('8x minecraft:pearlescent_froglight',
        [
            'DDD',
            'GNG',
            'NGN'
        ],{
        N: 'mysticalagriculture:nature_essence',
        D: 'mysticalagriculture:dye_essence',
        G: 'mysticalagriculture:glowstone_essence'
    }).id('allthemods:mysticalagriculture/minecraft/pearlescent_froglight')

    allthemods.shaped('8x minecraft:verdant_froglight',
        [
            'NGD',
            'GND',
            'NGD'
        ],{
        N: 'mysticalagriculture:nature_essence',
        D: 'mysticalagriculture:dye_essence',
        G: 'mysticalagriculture:glowstone_essence'
    }).id('allthemods:mysticalagriculture/minecraft/verdant_froglight')

    allthemods.remove({ id: "mysticalagradditions:gaia_spirit_crux" })
})

function Tier(id, mod) {
    this.id = id;
    this.mod = mod || 'mysticalagriculture';
}

Tier.prototype.getEssence = function() {
    return `${this.mod}:${this.id}_essence`;
};

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
