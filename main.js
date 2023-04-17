"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_js_1 = require("./data.js");
var serieTab = document.getElementById('series');
var seasonAvg = document.getElementById('avg');
var imgS = document.getElementById('imgS');
var nameS = document.getElementById('nameS');
var descS = document.getElementById('descS');
var linkS = document.getElementById('linkS');
seasonAvg.innerHTML = "Seasons average: ".concat(calcSeasonAvg());
genSeriesTable(data_js_1.series);
genButton();
function genButton() {
    data_js_1.series.forEach(function (serie) {
        var button = document.getElementById("".concat(serie.id));
        button.onclick = function () { showCard(serie); };
    });
}
function showCard(serie) {
    imgS.setAttribute('src', serie.img);
    nameS.innerHTML = "".concat(serie.name);
    descS.innerHTML = "".concat(serie.desc);
    linkS.innerHTML = "".concat(serie.link);
}
function genSeriesTable(series) {
    series.forEach(function (serie) {
        var tRow = document.createElement('tr');
        tRow.innerHTML = "<td>".concat(serie.id, "</td>\n                          <td>").concat(serie.name, "</td>\n                          <td>").concat(serie.channel, "</td>\n                          <td>").concat(serie.seasons, "</td>");
        serieTab.appendChild(tRow);
    });
}
function calcSeasonAvg() {
    var numSeasons = 0;
    data_js_1.series.forEach(function (serie) { return numSeasons += serie.seasons; });
    var prom = numSeasons / data_js_1.series.length;
    return prom;
}
