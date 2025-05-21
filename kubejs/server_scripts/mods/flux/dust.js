// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $SoundEvents   = Java.loadClass('net.minecraft.sounds.SoundEvents')
const $SoundSource   = Java.loadClass('net.minecraft.sounds.SoundSource')
const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

const recipes = [
    {
        clickedBlock: 'minecraft:obsidian',
        baseBlock:    'allthecompressed:obsidian_1x',
        inputItem:    'minecraft:redstone',
        outputItem:   'fluxnetworks:flux_dust',
        resultBlock:  'minecraft:cobblestone'
    }
];

recipes.forEach(recipe => {
    BlockEvents.leftClicked(recipe.clickedBlock, allthemods => {
        const { block, player, level, item } = allthemods;
        const pos = block.pos;
        const handField = allthemods.class.getDeclaredField('hand');
        handField.setAccessible(true);

        if (handField.get(allthemods) !== 'MAIN_HAND' || !item.isEmpty() || player.isFake()) return;
        if (block.offset(0, -2, 0).id !== recipe.baseBlock) return;

        let count = 0;
        level.getEntitiesWithin(AABB.ofBlock(pos.below()))
            .filter(e => e.type === 'minecraft:item' && e.item.id === 'minecraft:redstone')
            .forEach(e => {
                if (count < 512) {
                    count += e.item.count;
                    e.discard();
                }
            });

        if (count === 0) return;

        const stack = Item.of(recipe.outputItem).withCount(count);
        const entity = block.createEntity('minecraft:item');
        entity.x += 0.5; entity.z += 0.5;
        entity.item = stack;
        entity.setDeltaMovement([0, 0.2, 0]);
        block.set('minecraft:air');

        entity.spawn();
        let replacement = block.down;
        if (level.random.nextDouble() > Math.pow(0.9, count >> 3)) {
            replacement.set(recipe.resultBlock);
        } else {
            replacement.set(recipe.clickedBlock)
        }
        level.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, $SoundEvents.DRAGON_FIREBALL_EXPLODE, $SoundSource.BLOCKS, 1.0, 1.0);
        level.sendParticles($ParticleTypes.LAVA, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, Math.max(4, Math.min(count >> 2, 64)), 0, 0, 0, 0);
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.