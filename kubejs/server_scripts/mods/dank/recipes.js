ServerEvents.recipes(event => {
    event.remove({ id:'dankstorage:5_to_6' })
    event.shaped('dankstorage:5_to_6', [
        'OAO',
        'ASA',
        'OAO'
    ], {
        O: 'minecraft:crying_obsidian',
        A: 'minecraft:amethyst_block',
        S: 'minecraft:stick'
    })
})