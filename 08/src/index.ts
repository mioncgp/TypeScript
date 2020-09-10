import { CSVfileReader } from "./CSVfileReader";
import { MatchResults } from "./MatchResults";

const reader = new CSVfileReader("football.csv");
reader.read();

let manUnitedWins = 0;
reader.data.forEach((row) => {
  if (
    (row[1] === "Man United" && row[5] === MatchResults.HomeWin) ||
    (row[2] === "Man United" && row[5] === MatchResults.AwayWin)
  ) {
    manUnitedWins++;
  }
});

console.log(reader.data);
