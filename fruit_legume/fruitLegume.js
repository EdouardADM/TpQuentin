const fruits = [   
    {lib: 'poire',  prix: 4.16},   {lib: 'ananas', prix: 2.99},   {lib: 'dattes', prix: 6.25},   {lib: 'orange', prix: 1.50},   {lib: 'pomme',  prix: 1.79},   {lib: 'banane', prix: 2.31},   {lib: 'citron', prix: 3.70},   {lib: 'raisin', prix: 2.49},   {lib: 'noix',   prix: 7.80},   {lib: 'prune',  prix: 4.52},   {lib: 'peche',  prix: 3.99} 
]; 

const legumes = [   
    {lib: 'carotte', prix: 1.05},   {lib: 'oignon',  prix: 0.55},   {lib: 'ail',     prix: 1.49},   {lib: 'celeri',  prix: 1.71},   {lib: 'fenouil', prix: 2.11},   {lib: 'patate',  prix: 1.32},   {lib: 'navet',   prix: 0.93},   {lib: 'potiron', prix: 1.14},   {lib: 'courge',  prix: 0.98} ]; 

let commande = [];
let total = 0;

let currentTypeList = fruits;

function init() {
    fruits.sort((a, b) => {
        if(a.lib > b.lib) return 1
        if(a.lib < b.lib) return -1
        return 0
    })
    legumes.sort((a,b) => {
        if(a.lib > b.lib) return 1
        if(a.lib < b.lib) return -1
        return 0
    })

    genererTab()

    let elem1 = refElem('liste1');
    let elem2 = refElem('liste2');

    elem1.addEventListener('change', synchroSelect); 
    elem2.addEventListener('change', synchroSelect);

    document.getElementsByName('fruitLegume').forEach((elem) => {
        elem.addEventListener('change', switchAffichage);
    })

    document.getElementById('txt').innerHTML = total.toFixed(2)
}

function synchroSelect(event) {
    let elem1 = refElem('liste1');
    let elem2 = refElem('liste2');

    if(event.target === elem1) {
        elem2.selectedIndex = elem1.selectedIndex
    }
    else if (event.target === elem2) {
            elem1.selectedIndex = elem2.selectedIndex
    }
}

function ajouterArticle(event){
    event.preventDefault();
    //recuperer 
    let elem1 = refElem('liste1');

    let index = elem1.selectedIndex

    let fruit = {...currentTypeList[index]}

    let poid = +refElem('poids').value;
    //ajouter dans le tableau
    fruit.poid = poid;

    let verif = commande.findIndex((a) => {
        if(a.lib === fruit.lib) return true
        return false
    })

    if(verif === -1) {
        commande.push(fruit);
    }
    else {
        commande[verif].poid = commande[verif].poid + poid;
    }

    //afficher le tableau plus le total
    affichage();

    //remttre les champs à zero
    refElem('liste1').selectedIndex = -1;
    refElem('liste2').selectedIndex = -1;
    refElem('poids').value = null;
    
}

function affichage () {
    let lignes = "";
    total =0;
    for(let i of commande) {
        let s = '<tr>'
        let t = +((i.prix * i.poid)).toFixed(2);
        s += '<td>' + i.lib + '</td>' + '<td>' + i.prix + '</td>' + '<td>' + i.poid + '</td>' + '<td>' + t + '</td></tr>';
        lignes += s;
        total += t;
    }
    setElem('aff', lignes)
    setElem('txt', total)
}

function enleverArticle(){
    //recuperer le fruit
    let elem1 = refElem('liste1');

    let index = elem1.selectedIndex

    let fruit = {...currentTypeList[index]}

    let verif = commande.findIndex((a) => {
        if(a.lib === fruit.lib) return true;
        return false;
    })

    if(verif === -1) return;
    
    commande.splice(verif,1)
    //enlever de commande
    affichage();
}

function switchAffichage(event) {
    const choice = event.target.value;
    if(choice ==='legume') currentTypeList = legumes
    if(choice ==='fruit') currentTypeList = fruits
    genererTab();
}

function genererTab() {
    let optName ="";
    let optPrice = "";
    for(let i in currentTypeList) {
        optName += "<option>" + currentTypeList[i].lib + "</option>"
        optPrice += "<option>" + currentTypeList[i].prix + "</option>"
    }
    setElem("liste1" , optName)
    setElem("liste2" , optPrice)
    refElem('liste1').size = currentTypeList.length 
    refElem('liste2').size = currentTypeList.length 

    let elem1 = refElem('liste1');
    let elem2 = refElem('liste2');

    elem1.selectedIndex = -1;
    elem2.selectedIndex = -1;
}
