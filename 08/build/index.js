"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default
    .readFileSync("football.csv", { encoding: "utf-8" })
    .split("\n")
    .map(function (row) {
    return row.split(",");
});
var MatchResults;
(function (MatchResults) {
    MatchResults["HomeWin"] = "H";
    MatchResults["AwayWin"] = "A";
    MatchResults["Draw"] = "D";
})(MatchResults || (MatchResults = {}));
var manUnitedWins = 0;
matches.forEach(function (row) {
    if ((row[1] === "Man United" && row[5] === MatchResults.HomeWin) ||
        (row[2] === "Man United" && row[5] === MatchResults.AwayWin)) {
        manUnitedWins++;
    }
});
console.log(manUnitedWins);
