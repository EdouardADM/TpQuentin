var fruits = [
    {fruit: 'poire',  prix: 4.16},   {fruit: 'ananas', prix: 2.99},   {fruit: 'dattes', prix: 6.25},   {fruit: 'orange', prix: 1.50},   {fruit: 'pomme',  prix: 1.79},   {fruit: 'banane', prix: 2.31},   {fruit: 'citron', prix: 3.70},   {fruit: 'raisin', prix: 2.49},   {fruit: 'noix',   prix: 7.80},   {fruit: 'prune',  prix: 4.52},   {fruit: 'peche',  prix: 3.99}
];

function init() {
    fruits.sort((a, b) => {
        if(a.fruit > b.fruit) return 1
        if(a.prix < b.prix) return -1
        return 0
    })
    let optName ="";
    let optPrice = "";
    for(let i in fruits) {
        optName += "<option>" + fruits[i].fruit + "</option>"
        optPrice += "<option>" + fruits[i].prix + "</option>"
    }
    setElem("liste1" , optName)
    setElem("liste2" , optPrice)
    refElem('liste1').size = fruits.length 
    refElem('liste2').size = fruits.length 

    selectElem1.setAttribute('required', 'required');
    selectElem2.setAttribute('required', 'required');
}