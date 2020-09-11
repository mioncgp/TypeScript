import { MatchReader } from "./MatchReader";
import { MatchResults } from "./MatchResults";
import { CSVfileReader } from "./CSVfileReader";

const csvFileReader = new CSVfileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;
matchReader.matches.forEach((row) => {
  if (
    (row[1] === "Man United" && row[5] === MatchResults.HomeWin) ||
    (row[2] === "Man United" && row[5] === MatchResults.AwayWin)
  ) {
    manUnitedWins++;
  }
});

console.log(manUnitedWins);
