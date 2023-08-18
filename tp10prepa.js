//prepa avec plusieurs tableaux

let noms =    ['Camus', 'de Beauvoir', 'Sartre', 'Dolto', 'Aron'];
let prenoms = ['Albert', 'Simone', 'Jean-Paul', 'Françoise', 'Raymond'];
let sexes =   ['m', 'f', 'm', 'f', 'm']; 


function init(){

}

function addElem(id, v) {
	document.getElementById(id).innerHTML += v;
}

function madeTable1(id, t1, t2, t3) {
	let s;
  for(let i in t1) {
  s = "<tr>";
  s += '<td>' + t1[i] + '</td>'+  '<td>' + t2[i] + '</td>' +  '<td>' + t3[i] + '</td>'
  s += '</tr>';
  addElem(id, s);
  }
}

function init(){
	madeTable1('tab', noms, prenoms, sexes)
}

//avec 1 tableau

function makeTable2(id, t) {
  let s
  for(let p in t) {
    s = '<tr>'
    for(let i in t[p]) {
      s += '<td>' + t[p][i] + '</td>'
    }
    s += '</tr>'
    addElem(id, s)
  }
}
function init() {
  makeTable2('tab', personnes1)
}

// avec des objets

function addElem(id, v) {
	document.getElementById(id).innerHTML += v;
}

let personnes2 = [
{nom: 'Camus',prenom:'Albert',sexe: 'm'},
{nom: 'de Beauvoir', prenom:'Simone',sexe: 'f'},
{nom: 'Sartre',prenom:'Jean-Paul', sexe: 'm'},
{nom: 'Dolto',prenom:'Françoise', sexe: 'f'},
{nom: 'Aron',prenom:'Raymond',   sexe: 'm'}
];

function makeTable3(id, t) {
let s
let pers = {};
for(let p in t) {
	pers = p[t]
  s = '<tr>';
  for(let i in pers) {
  	s += '<td>' + pers[i] + '</td>'
  }
  s += '</tr>'
  addElem(id, s)
}
}
function init() {
	makeTable3('tab', personnes2)
}

function trouveInfo(prop, prop1, val1, t) {
	let pers = {};
  for(let p in t) {
  	pers = t[p]
    if(pers[prop1] == val1) {
    console.log('le ' + prop + ' est ' + pers[prop])
    }
  }
}
function init() {
	makeTable3('tab', personnes2);
  trouveInfo('sexe', 'nom', 'Dolto', personnes2)
  trouveInfo('prenom', 'nom', 'Aron', personne2)
  trouveInfo('nom','sexe', 'f', personnes2)
}