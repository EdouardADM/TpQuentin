
/*function init() {
	makeTable3('tab', personnes2);
    trouveInfo('sexe', 'nom', 'Dolto', personnes2)
    trouveInfo('prenom', 'nom', 'Aron', personne2)
    trouveInfo('nom','sexe', 'f', personnes2)
}*/

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
    let s;
    let pers = {};
    makeTitle(id, t, true)
    for(let p in t) {
	    pers = t[p]
        console.log(pers)
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


//Demander à Quentin comment faire 

function makeTitle(id, tb, toShow = false) {
    if(!toShow) return
    let cle = Object.keys(tb[0]);
    let h = "<thead><tr>"
    for(let i of cle) {
      h += "<th>" + i + "</th>"
    }
    h += "</tr></thead>"
    addElem(id, h)
}