// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $ForgeRegistries = Java.tryLoadClass('net.minecraftforge.registries.ForgeRegistries')
const $DefaultAttributes = Java.tryLoadClass('net.minecraft.world.entity.ai.attributes.DefaultAttributes')
const $Tags = Java.tryLoadClass('net.minecraftforge.common.Tags')
const $EIOTags = Java.tryLoadClass("com.enderio.base.common.tag.EIOTags")

ServerEvents.recipes(allthemods => {

    //This does not work for some godforsaken reason
    const isValid = type =>
        $DefaultAttributes.hasSupplier(type) &&
        !type.is($Tags.EntityTypes.BOSSES) &&
        !type.is($EIOTags.EntityTypes.SOUL_VIAL_BLACKLIST) &&
        type.canSerialize()

    const entities = $ForgeRegistries.ENTITY_TYPES.getValues()
        .filter(isValid)
        .map(type => $ForgeRegistries.ENTITY_TYPES.getKey(type).toString())

    entities.forEach(entity => {
        const id = entity.split(':')
        const egg = `${id[0]}:${id[1]}_spawn_egg`
        if(!Item.exists(egg)) return
        allthemods.recipes.summoningrituals
            .altar('enderio:empty_soul_vial')
            .input(egg)
            .itemOutput(Item.of('enderio:filled_soul_vial',1, {BlockEntityTag:{EntityStorage:{Entity:{id:entity}}}}))
            .id(`allthemods:enderio/soul_vial/${id[0]}/${id[1]}`)
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.