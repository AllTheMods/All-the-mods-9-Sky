ServerEvents.recipes((event) => {
  // 2x logs and 5x Iron Ingots -> 1x hopper through shaped crafting
  event.shaped("minecraft:hopper", ["TXT", "TXT", " T "], {
    T: "#forge:ingots/iron",
    X: "#minecraft:logs",
  });
  // 1x chest and 5x Oak Planks -> 1x Chest Boat through shaped crafting
  event.shaped("minecraft:oak_chest_boat", ["XTX", "XXX"], {
    T: "minecraft:chest",
    X: "minecraft:oak_planks",
  });
  // 1x chest and 5x Iron Ingots -> 1x Chest Minecart through shaped crafting
  event.shaped("minecraft:chest_minecart", ["XTX", "XXX"], {
    T: "minecraft:chest",
    X: "#forge:ingots/iron",
  });
  // 1x furnace and 5x Iron Ingots -> 1x Furnace Minecart through shaped crafting
  event.shaped("minecraft:furnace_minecart", ["XTX", "XXX"], {
    T: "minecraft:furnace",
    X: "#forge:ingots/iron",
  });
  // 1x TNT and 5x Iron Ingots -> 1x TNT Minecart through shaped crafting
  event.shaped("minecraft:tnt_minecart", ["XTX", "XXX"], {
    T: "minecraft:tnt",
    X: "#forge:ingots/iron",
  });
  // 1x dropper and 1x Bow -> 1x Dispenser through shapeless crafting
  event.shapeless("minecraft:dispenser", [
    "minecraft:bow",
    "minecraft:dropper",
  ]);
  // Bow Craft and 1x Dropper -> 1x Dispenser through shaped crafting
  event.shaped("minecraft:dispenser", [" YX", "YTX", " YX"], {
    Y: "#forge:rods/wooden",
    T: "minecraft:dropper",
    X: "#forge:string",
  });
  // Easy Repater through shaped crafting
  event.shaped("minecraft:repeater", ["T T", "YTY", "XXX"], {
    Y: "#forge:rods/wooden",
    T: "minecraft:redstone",
    X: "minecraft:stone",
  });
  // 1x stair -> 1x plank through stonecutting
  event.forEachRecipe(
    { type: "minecraft:stonecutting", output: "#minecraft:stairs" },
    (r) => {
      let ingredients = r.originalRecipeIngredients;
      let output = r.originalRecipeResult;
      event.stonecutting(ingredients[0], output);
    }
  );
  // Coral to Dye
  // Brain to Pink
  event.shapeless("minecraft:pink_dye", [
    "minecraft:brain_coral",
    "minecraft:brain_coral_fan",
  ]);
  // Bubble to Magenta
  event.shapeless("minecraft:magenta_dye", [
    "minecraft:bubble_coral",
    "minecraft:bubble_coral_fan",
  ]);
  // Fire to Red
  event.shapeless("minecraft:red_dye", [
    "minecraft:fire_coral",
    "minecraft:fire_coral_fan",
  ]);
  // Horn to Yellow
  event.shapeless("minecraft:yellow_dye", [
    "minecraft:horn_coral",
    "minecraft:horn_coral_fan",
  ]);
  // Tube to Blue
  event.shapeless("minecraft:blue_dye", [
    "minecraft:tube_coral",
    "minecraft:tube_coral_fan",
  ]);
  // Charcoal to Black
  event.shapeless("minecraft:black_dye", ["minecraft:charcoal"]);
  // Bone to bonemeal
  event.smelting("3x minecraft:bone_meal", "minecraft:bone").xp(0.05);
});
