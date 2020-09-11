"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResults_1 = require("./MatchResults");
var CSVfileReader_1 = require("./CSVfileReader");
var csvFileReader = new CSVfileReader_1.CSVfileReader("football.csv");
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
matchReader.matches.forEach(function (row) {
    if ((row[1] === "Man United" && row[5] === MatchResults_1.MatchResults.HomeWin) ||
        (row[2] === "Man United" && row[5] === MatchResults_1.MatchResults.AwayWin)) {
        manUnitedWins++;
    }
});
console.log(manUnitedWins);
