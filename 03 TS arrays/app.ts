// arrays where each element is some consistent type of value
const array2d: string[][] = [
  ["1", "2", "3"],
  ["4", "5", "6"],
];

const array2d2 = ["4", "5", "6"];

// TS can do type inference when extracting values from an array
const string = array2d[0][0];

// TS can prevent us from adding incompatible values to the arraya
array2d.push(string); // shows that the value is dissimilar

// We can get help with "map", "forEach", "reduce", functions
array2d2.map((car: string): string => {
  return car;
});

// Flexible - arrays can still contain multiple diffrent types
const newArr: (Date | string | number)[] = [new Date(), "lol", 13];
