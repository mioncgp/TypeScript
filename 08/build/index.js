"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSVfileReader_1 = require("./CSVfileReader");
var MatchResults_1 = require("./MatchResults");
var reader = new CSVfileReader_1.CSVfileReader("football.csv");
reader.read();
var manUnitedWins = 0;
reader.data.forEach(function (row) {
    if ((row[1] === "Man United" && row[5] === MatchResults_1.MatchResults.HomeWin) ||
        (row[2] === "Man United" && row[5] === MatchResults_1.MatchResults.AwayWin)) {
        manUnitedWins++;
    }
});
console.log(reader.data);
