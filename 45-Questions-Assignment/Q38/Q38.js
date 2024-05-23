"use strict";
function describe_cities(Country = "Pakistan", City) {
    console.log(`${City} is in ${Country} `);
}
describe_cities(undefined, "Karachi");
describe_cities("India", "Mumbai");
describe_cities("Spain", "Barcelona");
