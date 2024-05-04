ServerEvents.recipes(event =>{
  // EMC Module
  event.remove({ id: 'appliede:emc_module'})  
  event.shaped('appliede:emc_module', ['AAA', 'STS', 'AAA'], {
    A: 'projecte:aeternalis_fuel_block',
    T: 'projecte:transmutation_tablet',
    S: 'ae2:singularity'
  })

  // EMC Export Bus
  event.remove({ id: 'appliede:emc_export_bus'})  
  event.shaped('appliede:emc_export_bus', ['IFI', 'DTD', ' P '], {
    F: 'ae2:formation_core',
    I: '#forge:ingots/iron',
    D: 'projecte:aeternalis_fuel',
    T: 'projecte:transmutation_tablet',
    P: 'minecraft:piston'
  })

  // EMC Import Bus
  event.remove({ id: 'appliede:emc_import_bus'})  
  event.shaped('appliede:emc_import_bus', [' A ', 'ITI', 'DSD'], {
    A: 'ae2:annihilation_core',
    I: '#forge:ingots/iron',
    T: 'projecte:transmutation_tablet',
    D: 'projecte:aeternalis_fuel',
    S: 'minecraft:sticky_piston'
  })

})