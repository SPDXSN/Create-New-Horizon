ServerEvents.recipes(event => {
    remove_recipes_id(event, [
        "ad_astra:rocket_nose_cone",
        "ad_astra:steel_tank",
        "ad_astra:rocket_fin",
        "ad_astra:steel_engine",
        "ad_astra:desh_engine",
        "ad_astra:ostrum_engine",
        "ad_astra:calorite_engine",
        "ad_astra:jet_suit",
        "ad_astra:netherite_space_suit",
        "ad_astra:space_suit",
        "ad_astra:oxygen_gear",
        "ad_astra:netherite_space_helmet",
        "ad_astra:netherite_space_pants",
        "ad_astra:netherite_space_boots",
        "ad_astra:jet_suit_helmet",
        "ad_astra:jet_suit_pants",
        "ad_astra:jet_suit_boots",
        "ad_astra:space_helmet",
        "ad_astra:space_pants",
        "ad_astra:space_boots",
        "create:pressing/desh_ingot",
        "create:pressing/ostrum_ingot",
        "create:pressing/steel_ingot",
        "create:pressing/calorite_ingot",
        "ad_astra:blasting/desh_ingot_from_blasting_raw_desh",
        "ad_astra:blasting/ostrum_ingot_from_blasting_raw_ostrum",
        "ad_astra:blasting/calorite_ingot_from_blasting_raw_calorite",
        "ad_astra:fan",
        "ad_astra:ostrum_tank",
        "ad_astra:gas_tank",
        "ad_astra:oxygen_loader",
        "ad_astra:iron_rod",
        "ad_astra:coal_generator",
        "ad_astra:compressor",
        "ad_astra:etrionic_blast_furnace",
        "ad_astra:photovoltaic_etrium_cell",
        "ad_astra:solar_panel",
        "ad_astra:fuel_refinery",
        "ad_astra:cryo_freezer",
    ])

    event.replaceInput({ id: "ad_astra:launch_pad" }, "gtceu:steel_rod", "gtceu:platinum_rod")
})
