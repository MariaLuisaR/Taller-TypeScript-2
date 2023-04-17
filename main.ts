import {Serie} from './serie.js';
import {series} from './data.js';

let serieTab: HTMLElement = document.getElementById('series')!;
let seasonAvg: HTMLElement = document.getElementById('avg')!;
let imgS: HTMLElement = document.getElementById('imgS')!;
let nameS: HTMLElement = document.getElementById('nameS')!;
let descS: HTMLElement = document.getElementById('descS')!;
let linkS: HTMLElement = document.getElementById('linkS')!;
seasonAvg.innerHTML = `Seasons average: ${calcSeasonAvg()}`;
genSeriesTable(series);
genButton();

function genButton(){
    series.forEach(serie =>{
        let button = document.getElementById(`${serie.id}`)!;
        button.onclick = () => {showCard(serie)};
    });
}

function showCard(serie: Serie){
    imgS.setAttribute('src', serie.img);
    nameS.innerHTML = `${serie.name}`;
    descS.innerHTML = `${serie.desc}`;
    linkS.innerHTML = `${serie.link}`;

}


function genSeriesTable(series: Serie[]){
    series.forEach(serie => {
        let tRow = document.createElement('tr');
        tRow.innerHTML = `<td>${serie.id}</td>
                          <td>${serie.name}</td>
                          <td>${serie.channel}</td>
                          <td>${serie.seasons}</td>`; 
        serieTab.appendChild(tRow);
    });
}

function calcSeasonAvg () {
    let numSeasons = 0;
    series.forEach((serie) =>  numSeasons += serie.seasons);
    let prom = numSeasons/series.length;
    return prom;
}