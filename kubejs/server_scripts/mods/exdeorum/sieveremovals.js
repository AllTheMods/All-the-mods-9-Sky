
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

    event.remove({
      type: 'exdeorum:sieve',
      mod: 'exdeorum',
      output: 'exdeorum:iridium_ore_chunk'
    });

    event.remove({
      input: 'minecraft:gravel',
      type: 'exdeorum:sieve',
      mod: 'exdeorum',
      output: 'exdeorum:stone_pebble'
    });

    event.remove({
      input: 'minecraft:gravel',
      type: 'exdeorum:sieve',
      mod: 'exdeorum',
      output: 'exdeorum:diorite_pebble'
    });

    event.remove({
      input: 'minecraft:gravel',
      type: 'exdeorum:sieve',
      mod: 'exdeorum',
      output: 'exdeorum:granite_pebble'
    });

    event.remove({
      input: 'minecraft:gravel',
      type: 'exdeorum:sieve',
      mod: 'exdeorum',
      output: 'exdeorum:andesite_pebble'
    });

    event.remove({
      input: 'minecraft:gravel',
      type: 'exdeorum:sieve',
      mod: 'exdeorum',
      output: 'exdeorum:deepslate_pebble'
    });
  });