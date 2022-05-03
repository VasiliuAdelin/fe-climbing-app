const GENRE_TYPE = {
  BOULDER: "Boulder",
  SPORT: "Sport",
  TRADITIONAL: "Traditional",
};

const GRADES_HASH = {
  100: ["5.5", "VB", "10", "3", "3", "III"],
  150: ["5.6", "V0-", "12", "3+", "3+", "IV-"],
  200: ["5.7", "V0", "14", "4", "4", "IV"],
  250: ["5.8", "V0+", "16", "4+", "4+", "IV+"],
  300: ["5.9", "V1", "17", "5", "5", "V"],
  350: ["5.10a", "V1+", "18", "5+", "5+", "V+"],
  400: ["5.10b", "V2", "19", "6A", "6a", "VI+"],
  450: ["5.10c", "V3", "20", "6A+", "6a+", "VII-"],
  500: ["5.10d", "V3+", "20+", "6B", "6b", "VII"],
  550: ["5.11a", "V4", "21", "6B+", "6b+", "VII+"],
  600: ["5.11b", "V4+", "22", "6C", "6c", "VII+"],
  650: ["5.11c", "V5", "23", "6C+", "6c+", "VIII-"],
  700: ["5.11d", "V5+", "23+", "7A", "7a", "VIII"],
  750: ["5.12a", "V6", "24", "7A+", "7a+", "VIII+"],
  800: ["5.12b", "V7", "25", "7B", "7b", "VIII+"],
  850: ["5.12c", "V8", "26", "7B+", "7b+", "IX-"],
  900: ["5.12d", "V9", "27", "7C", "7c", "IX"],
  950: ["5.13a", "V10", "28", "7C+", "7c+", "IX+"],
  1000: ["5.13b", "V11", "29", "8A", "8a", "X-"],
  1050: ["5.13c", "V12", "30", "8A+", "8a+", "X-"],
  1100: ["5.13d", "V13", "31", "8B", "8b", "X"],
  1150: ["5.14a", "V14", "32", "8B+", "8b+", "X+"],
  1200: ["5.14b", "V15", "33", "8C", "8c", "X+"],
  1250: ["5.14c", "V16", "34", "8C+", "8c+", "XI-"],
  1300: ["5.14d", "V17", "35", "9A", "9a", "XI"]
};

const GRADES_TYPES = Object.entries(GRADES_HASH)
  .map(([key, valuesArr]) => ({
    id: key,
    value: valuesArr[3],
  }))
  .reduce((acc, current) => ({ ...acc, [current.id]: current.value }), {});

const STEEPNESS_TYPES = {
  ROOF: "Roof",
  OVERHANG: "Overhang",
  VERTICAL: "Vertical",
  SLAB: "Slab",
};

const HOLD_TYPES = {
  CRIMPERS: "Crimpers",
  SLOPERS: "Slopers",
  JUGS: "Jugs",
  POCKETS: "Pockets",
  TUFAS: "Tufas",
};

const STYLE_TYPES = {
  FINGERY: "Fingery",
  POWERFUL: "Powerful",
  DYNO: "Dyno",
  ENDURANCE: "Endurance",
  TECHNICAL: "Technical",
  MENTAL: "Mental",
  TRAVERSE: "Traverse",
  SITSTART: "Sitstart",
  TOPS_LAST_HOLD: "Tops-last-hold",
  TRAD_GEAR_REQUIRED: "Trad-gear-required",
  DANGEROUS: "Dangerous",
  CRACK: "Crack",
};

export default {
  GENRE_TYPE,
  STEEPNESS_TYPES,
  STYLE_TYPES,
  HOLD_TYPES,
  GRADES_TYPES,
};
