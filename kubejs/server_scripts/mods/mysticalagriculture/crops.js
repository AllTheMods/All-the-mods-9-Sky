// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const CropRegistry = Java.loadClass('com.blakebr0.mysticalagriculture.registry.CropRegistry').getInstance();
const SEED_SECONDARY_CHANCE = 0.01;
const SECONDARY_CHANCE_TIER_THRESHOLD = 5;

ServerEvents.tags('item', tags => {
    const tiers = CropRegistry.getTiers().toArray();
    const farmlandByTier = tiers.map(t => t.getFarmland());

    // Configure secondary seed chance and tag farmlands
    tiers.forEach((tier, i) => {
        if (tier.getValue() >= SECONDARY_CHANCE_TIER_THRESHOLD) {
            tier.setSecondarySeedDrop(false);
            tier.setBaseSecondaryChance(0);
        } else {
            tier.setBaseSecondaryChance(SEED_SECONDARY_CHANCE);
        }

        const current = farmlandByTier[i];
        const tierName = current.getIdLocation().getPath().replace('_farmland', '');
        tags.add(`allthemods:farmland/${tierName}`, current.getId());

        const next = farmlandByTier[i + 1];
        if (next && !current.equals(next)) {
            const nextName = next.getIdLocation().getPath().replace('_farmland', '');
            tags.add(`allthemods:farmland/${tierName}`, `#allthemods:farmland/${nextName}`);
        }
    });
});

ServerEvents.recipes(events => {
    const cropInfo = { enabled: [], disabled: [] };
    CropRegistry.getCrops().forEach(crop => (crop.isEnabled() ? cropInfo.enabled : cropInfo.disabled).push(crop.getName()));
    JsonIO.write('kubejs/server_scripts/mods/mysticalagriculture/cropInfo.json', cropInfo);

    // BOTANYPOTS
    if (Platform.isLoaded('botanypots')) {
        let processed = new Set(), cruxMap = {}, disabledIds = [];

        events.forEachRecipe({ type: 'botanypots:crop' }, recipe => {
            const seed = Ingredient.of(recipe.json.get('seed')).getFirst();
            if (!seed.getMod().contains('mystical')) return;

            const name = seed.getIdLocation().getPath().replace('_seeds', '');
            const crop = CropRegistry.getCropByName(name);
            const drops = [];

            // categories/crux
            const crux = crop.getCruxBlock();
            if (crux) {
                const path = crux.getIdLocation().getPath();
                recipe.json.add('categories', [path]);
                cruxMap[crux.getId()] = path;
            }

            // adjust existing drops
            recipe.json.get('drops').forEach(drop => {
                if (
                    Ingredient.of(drop.get('output')).test(seed) &&
                    crop.getTier().hasSecondarySeedDrop()
                ) {
                    drop.add('chance', SEED_SECONDARY_CHANCE);
                }
                drops.push(drop);
            });
            recipe.json.add('drops', drops);
            processed.add(name);
            if (cropInfo.disabled.includes(name)) disabledIds.push(recipe.getId());
        });

        // add missing recipes for enabled crops
        cropInfo.enabled.forEach(name => {
            if (processed.has(name)) return;
            const crop = CropRegistry.getCropByName(name);
            const tier = crop.getTier();

            const drops = [
                { chance: 1.0, output: Ingredient.of(crop.getEssenceItem()).toJson() }
            ];
            if (tier.hasSecondarySeedDrop() && SEED_SECONDARY_CHANCE > 0) {
                drops.push({
                    chance: SEED_SECONDARY_CHANCE,
                    output: Ingredient.of(crop.getSeedsItem()).toJson()
                });
            }
            drops.push({
                chance: 0.01,
                output: Ingredient.of('mysticalagriculture:fertilized_essence').toJson(),
                minRolls: 1,
                maxRolls: 1
            });

            let category = tier.getFarmland().getIdLocation().getPath().replace('_farmland', '');
            if (cruxMap[crop.getCruxBlock()?.getId()]) {
                category = cruxMap[crop.getCruxBlock().getId()];
            }

            events
                .custom({
                    type: 'botanypots:crop',
                    seed: Ingredient.of(crop.getSeedsItem()).toJson(),
                    categories: [category],
                    growthTicks: 1200 + 600 * tier.getValue(),
                    display: { type: 'botanypots:aging', block: crop.getCropBlock().getId() },
                    drops: drops
                })
                .id(`allthemods:botanypots/mysticalagriculture/${name}`);
        });

        // register crux soils & remove disabled
        Object.entries(cruxMap).forEach(([id, cat]) =>
            events
                .custom({
                    type: 'botanypots:soil',
                    input: { item: id },
                    display: { block: id },
                    categories: [cat],
                    growthModifier: 1.0
                })
                .id(`allthemods:botanypots/mysticalagriculture/crux/${cat}`)
        );
        disabledIds.forEach(id => events.remove({ id: id }));
    }

    // THERMAL INSOLATOR
    if (Platform.isLoaded('thermal')) {
        cropInfo.enabled.forEach(name => {
            const crop = CropRegistry.getCropByName(name);
            events
                .custom({
                    type: 'thermal:insolator',
                    ingredient: Ingredient.of(crop.getSeedsItem()).toJson(),
                    result: [
                        { item: crop.getEssenceItem().getId(), chance: 1 + SEED_SECONDARY_CHANCE },
                        {
                            item: crop.getSeedsItem().getId(),
                            chance: crop.getTier().hasSecondarySeedDrop() ? 1 + SEED_SECONDARY_CHANCE : 1,
                            locked: true
                        }
                    ]
                })
                .id(`allthemods:thermal/machines/insolator/mysticalagriculture/${name}`);
        });
    }

    // IMMERSIVE ENGINEERING CLOCHE
    if (Platform.isLoaded('immersiveengineering')) {
        cropInfo.enabled.forEach(name => {
            const crop = CropRegistry.getCropByName(name);
            const soil = crop.getCruxBlock()
                ? Ingredient.of(crop.getCruxBlock()).toJson()
                : Ingredient.of(`#allthemods:farmland/${crop.getTier().getFarmland().getIdLocation().getPath().replace('_farmland', '')}`).toJson();

            events
                .custom({
                    type: 'immersiveengineering:cloche',
                    results: [{ item: crop.getEssenceItem().getId(), count: 2 }],
                    input: Ingredient.of(crop.getSeedsItem()).toJson(),
                    soil: soil,
                    time: 250 + 750 * crop.getTier().getValue(),
                    render: { type: 'crop', block: crop.getCropBlock().getId() }
                })
                .id(`allthemods:immersiveengineering/cloche/mysticalagriculture/${name}`);
        });
    }
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.