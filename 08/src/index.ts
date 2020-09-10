import fs from "fs";

const matches = fs
  .readFileSync("football.csv", { encoding: "utf-8" })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

enum MatchResults {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
let manUnitedWins = 0;
matches.forEach((row) => {
  if (
    (row[1] === "Man United" && row[5] === MatchResults.HomeWin) ||
    (row[2] === "Man United" && row[5] === MatchResults.AwayWin)
  ) {
    manUnitedWins++;
  }
});

console.log(manUnitedWins);
