// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $ForgeRegistries = Java.tryLoadClass('net.minecraftforge.registries.ForgeRegistries')
const $DyeColor = Java.tryLoadClass('net.minecraft.world.item.DyeColor')

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

StartupEvents.init(allthemods => {
	const colors = $DyeColor.values().map(dc => dc.getName());
	colors.forEach(color => {
		$ForgeRegistries.BLOCKS.addAlias(`antiblocksrechiseled:bright_${color}`, `luminax:${color}_luminax_block`)
		$ForgeRegistries.ITEMS.addAlias(`antiblocksrechiseled:bright_${color}`, `luminax:${color}_luminax_block`)
		$ForgeRegistries.BLOCKS.addAlias(`antiblocksrechiseled:bright_${color}_border`, `luminax:${color}_luminax_block`)
		$ForgeRegistries.ITEMS.addAlias(`antiblocksrechiseled:bright_${color}_border`, `luminax:${color}_luminax_block`)

		$ForgeRegistries.BLOCKS.addAlias(`antiblocksrechiseled:wool_${color}`, `luminax:dim_${color}_luminax_block`)
		$ForgeRegistries.ITEMS.addAlias(`antiblocksrechiseled:wool_${color}`, `luminax:dim_${color}_luminax_block`)
		$ForgeRegistries.BLOCKS.addAlias(`antiblocksrechiseled:wool_${color}_border`, `luminax:dim_${color}_luminax_block`)
		$ForgeRegistries.ITEMS.addAlias(`antiblocksrechiseled:wool_${color}_border`, `luminax:dim_${color}_luminax_block`)

		$ForgeRegistries.BLOCKS.addAlias(`antiblocksrechiseled:button_bright_${color}`, `luminax:${color}_luminax_button`)
		$ForgeRegistries.ITEMS.addAlias(`antiblocksrechiseled:button_bright_${color}`, `luminax:${color}_luminax_button`)
		$ForgeRegistries.BLOCKS.addAlias(`antiblocksrechiseled:button_wool_${color}`, `luminax:dim_${color}_luminax_button`)
		$ForgeRegistries.ITEMS.addAlias(`antiblocksrechiseled:button_wool_${color}`, `luminax:dim_${color}_luminax_button`)

		$ForgeRegistries.BLOCKS.addAlias(`antiblocksrechiseled:pressure_plate_bright_${color}`, `luminax:${color}_luminax_pressure_plate`)
		$ForgeRegistries.ITEMS.addAlias(`antiblocksrechiseled:pressure_plate_bright_${color}`, `luminax:${color}_luminax_pressure_plate`)
		$ForgeRegistries.BLOCKS.addAlias(`antiblocksrechiseled:pressure_plate_wool_${color}`, `luminax:dim_${color}_luminax_pressure_plate`)
		$ForgeRegistries.ITEMS.addAlias(`antiblocksrechiseled:pressure_plate_wool_${color}`, `luminax:dim_${color}_luminax_pressure_plate`)

		$ForgeRegistries.BLOCKS.addAlias(`antiblocksrechiseled:slab_${color}`, `luminax:${color}_luminax_slab`)
		$ForgeRegistries.ITEMS.addAlias(`antiblocksrechiseled:slab_${color}`, `luminax:${color}_luminax_slab`)
		$ForgeRegistries.BLOCKS.addAlias(`antiblocksrechiseled:slab_${color}_bright`, `luminax:${color}_luminax_slab`)
		$ForgeRegistries.ITEMS.addAlias(`antiblocksrechiseled:slab_${color}_bright`, `luminax:${color}_luminax_slab`)
		$ForgeRegistries.BLOCKS.addAlias(`antiblocksrechiseled:slab_${color}_wool`, `luminax:dim_${color}_luminax_slab`)
		$ForgeRegistries.ITEMS.addAlias(`antiblocksrechiseled:slab_${color}_wool`, `luminax:dim_${color}_luminax_slab`)

		$ForgeRegistries.BLOCKS.addAlias(`antiblocksrechiseled:stair_${color}`, `luminax:${color}_luminax_stairs`)
		$ForgeRegistries.ITEMS.addAlias(`antiblocksrechiseled:stair_${color}`, `luminax:${color}_luminax_stairs`)
		$ForgeRegistries.BLOCKS.addAlias(`antiblocksrechiseled:stair_${color}_bright`, `luminax:${color}_luminax_stairs`)
		$ForgeRegistries.ITEMS.addAlias(`antiblocksrechiseled:stair_${color}_bright`, `luminax:${color}_luminax_stairs`)
		$ForgeRegistries.BLOCKS.addAlias(`antiblocksrechiseled:stair_${color}_wool`, `luminax:dim_${color}_luminax_stairs`)
		$ForgeRegistries.ITEMS.addAlias(`antiblocksrechiseled:stair_${color}_wool`, `luminax:dim_${color}_luminax_stairs`)
	})
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.