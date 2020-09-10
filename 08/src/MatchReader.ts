import { CSVfileReader } from "./CSVfileReader";
import { dataStringToDate } from "./utils";
import { MatchResults } from "./MatchResults";

type MatchData = [Date, string, string, number, number, MatchResults, string];

export class MatchReader extends CSVfileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dataStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResults,
      row[6],
    ];
  }
}
