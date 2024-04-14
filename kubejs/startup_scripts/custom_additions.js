StartupEvents.registry('block', event => {
	event.create('magical_soil').displayName('§bMagical Soil').grassSoundType().mapColor('grass').hardness(0.6);
})

StartupEvents.modifyCreativeTab('ironfurnaces:ironfurnaces_tab', event => {
	event.add('ironfurnaces:allthemodium_furnace')
	event.add('ironfurnaces:vibranium_furnace')
	event.add('ironfurnaces:unobtainium_furnace')
	event.add('ironfurnaces:upgrade_allthemodium')
	event.add('ironfurnaces:upgrade_vibranium')
	event.add('ironfurnaces:upgrade_unobtainium')
})

StartupEvents.modifyCreativeTab('functional_blocks', event => {
    [
    'ancient',      'azalea',       'blossom',          'oak',
    'spruce',       'birch',        'jungle',           'acacia',
    'dark_oak',     'crimson',      'warped',           'mangrove',
    'bamboo',       'cherry',       'nether_brick',     'prismarine', 
    'purpur'
    ].forEach(type => {
        event.add(`quark:${type}_chest`)
        event.add(`quark:${type}_trapped_chest`)       
    })
})