ServerEvents.recipes(event => {
    event.remove({ id: 'thermalendergy:endergy_upgrade_1' })
    event.remove({ id: 'thermalendergy:endergy_upgrade_2' })
    event.shaped('thermalendergy:endergy_upgrade_2', [
        "GSG",
        "LRL",
        "GSG"
      ], {
      G: 'thermalendergy:melodium_ingot',
      L: 'thermalendergy:prismalium_gear',
      R: 'thermal_extra:upgrade_augment',
      S: 'minecraft:shulker_shell'
    }).id('atm9sky:extra_to_endergy')
})