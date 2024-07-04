// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.custom({
    type: "create:mechanical_crafting",
    pattern: [
      '    S    ',
      '   SSS   ',
      'SSSSSSSSS',
      'SSSSSSSSS',
      ' SSSPSSS ',
      '  SSSSS  ',
      ' SSSSSSS ',
      'SSSS SSSS',
      'SSS   SSS'
    ],
    key: {
      S: Ingredient.of('allthetweaks:atm_star_shard').toJson(),
      P: Ingredient.of('allthetweaks:patrick_star').toJson(),
    },
    result: Ingredient.of('allthetweaks:atm_star').toJson(),
    acceptMirrored: false
  }).id('allthemods:allthetweaks/atm_shard_star')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
