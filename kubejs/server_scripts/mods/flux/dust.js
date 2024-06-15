// kjs version of flux's in world conversion
const $SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
const $SoundSource = Java.loadClass('net.minecraft.sounds.SoundSource')
const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

BlockEvents.leftClicked('minecraft:obsidian', event => {
    const { block, item, player, level } = event
    let handField = event.class.getDeclaredField('hand')
    handField.setAccessible(true)
    let hand = handField.get(event)
    //console.log(hand)
    //console.log(level.side)
    if (hand != 'MAIN_HAND') return
    if (!item.isEmpty()) return
    if (player.isFake()) return
    let base = block.offset(0, -2, 0)
    let pos = block.pos
    if (base.id != 'allthecompressed:obsidian_1x') return
    //if (base.id != 'minecraft:crying_obsidian') return
    let fluxCount = 0
    level.getEntitiesWithin(AABB.ofBlock(pos.below()))
        .filter(entity => entity.type == 'minecraft:item' && entity.item.id == 'minecraft:redstone')
        .stream()
        .mapToInt(entity => {
            if (fluxCount < 512) {
                let count = entity.item.count
                fluxCount += count
                //console.log(fluxCount)
                //console.log(count)
                entity.discard()
                return count
            }
            return 0
        }).sum()
    //console.log(fluxCount)
    if (fluxCount == 0) return
    let fluxOut = Item.of('fluxnetworks:flux_dust').withCount(fluxCount)
    let itemEntity = block.createEntity('minecraft:item')
    itemEntity.x += 0.5
    itemEntity.z += 0.5
    itemEntity.item = fluxOut
    itemEntity.setDeltaMovement([0, 0.2, 0])
    block.set('minecraft:air')
    let replacement = block.down
    itemEntity.spawn()
    if (level.random.nextDouble() > Math.pow(0.9, fluxCount >> 3)) {
        replacement.set('minecraft:cobblestone')
        level.playSound(null, pos, $SoundEvents.DRAGON_FIREBALL_EXPLODE, $SoundSource.BLOCKS, 1.0, 1.0)
    } else {
        replacement.set('minecraft:obsidian')
        level.playSound(null, pos, $SoundEvents.DRAGON_FIREBALL_EXPLODE, $SoundSource.BLOCKS, 1.0, 1.0)
    }
    let particles = Math.max(4, Math.min(fluxCount >> 2, 64))
    level.sendParticles($ParticleTypes.LAVA, pos.x + 0.5, pos.y, pos.z + 0.5, particles, 0, 0, 0, 0)
})
