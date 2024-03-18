
ServerEvents.recipes((event) => {

  //Gold from gravel
    event.remove({
      input: 'minecraft:gravel',
      sieve_mesh: 'exdeorum:netherite_mesh',
      type: 'exdeorum:sieve',
      mod: 'exdeorum',
      output: 'minecraft:raw_gold'
    });

  //Gold nuggets  
    event.remove({
      type: 'exdeorum:sieve',
      mod: 'exdeorum',
      output: 'minecraft:gold_nugget'
    });

  });