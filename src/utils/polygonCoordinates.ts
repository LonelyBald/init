import coords from "../geo-boundaries.json";
import flattendeep from "lodash.flattendeep";

const coordinates = coords.features
  .map((g) => g.geometry)
  .map((c) => c.coordinates);

const type = coords.features.map((g) => g.geometry).map((c) => c.type);

export const result = coordinates.map((coord) =>
  coord[0].map((c) => {
    return { latitude: c[1], longitude: c[0] };
  })
);

export const flattenDeep = flattendeep(result);

console.log(flattenDeep);
