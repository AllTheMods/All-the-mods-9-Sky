ServerEvents.recipes(event => {
  event.remove({ id: 'allthemodium:smithing/allthemodium_upgrade_smithing_template'})  
  event.shaped('allthemodium:allthemodium_upgrade_smithing_template', ['#S#', '###', '###'], {
    '#': 'allthemodium:allthemodium_ingot',
    'S': 'minecraft:netherite_upgrade_smithing_template'
  })

  event.remove({ id: 'allthemodium:smithing/vibranium_upgrade_smithing_template'})  
  event.shaped('allthemodium:vibranium_upgrade_smithing_template', ['#S#', '###', '###'], {
    '#': 'allthemodium:vibranium_ingot',
    'S': 'allthemodium:allthemodium_upgrade_smithing_template'
  })

  event.remove({ id: 'allthemodium:smithing/unobtainium_upgrade_smithing_template'})  
  event.shaped('allthemodium:unobtainium_upgrade_smithing_template', ['#S#', '###', '###'], {
    '#': 'allthemodium:unobtainium_ingot',
    'S': 'allthemodium:vibranium_upgrade_smithing_template'
  })
})

