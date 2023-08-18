//exo1

let temperatures = [25.0, 20.0, 20.5, 27.8, 29.0, 17.2, 34.0];

//while
let i = 0;
while(i<temperatures.length) {
	console.log(temperatures[i])
  i++
}

//for classique

for(let i = 0; i < temperatures.length; i++) {
	console.log(temperatures[i])
}

//for in

for(let i in temperatures) {
	console.log(temperatures[i])
}

//for of

for(let i of temperatures) {
	console.log(i)
}

//forEach

temperatures.forEach((i) => console.log(i))

//exo1.02 

let affichage = ""
for(let i of temperatures) {
	affichage += '\t<option value="' + i +'">' + i + '</option value>\n'
}
console.log("<select>\n" + affichage + "</select>")

//exo1.03

var scores = [
[4, 9, 7, 8],
[1, 5, 6, 7],
[10, 5, 7, 4]
];

//exo1.04 (Quentin)

let acteurs = [
{ nom : "Leigh", prenom : "Chyler"},
{ nom : "Evans", prenom : "Chris"},
{ nom : "Pressly", prenom : "Jaime"},
{ nom : "Christian Olsen", prenom : "Eric"}
];

let nom =""
for(let i of acteurs) {
	nom +="\t<tr><td>" + i.nom + "</td><td>" + i.prenom + "</td></tr>\n"
}
console.log("<table>\n" + nom + "</table>")

//exo1.05

let etudiants = [ 
{ nom : "Talu", prenom : "Jean", matricule : "HE100" },
{ nom : "Fraichi", prenom : "Sara", matricule : "HE101"},
{ nom : "Zarella", prenom : "Maude", matricule : "HE102"}
];

let etu =""
for(let i of etudiants) {
	etu += '\t<option value="' + i.matricule + '">' + i.nom +" " + i.prenom + "</option>\n"
}
console.log("<select>\n" + etu + "</select>")

//Constuction d'une table dynamiquement (chat gpt)

function ajouterTable() {
  var voitures = [
    { marque: "EleCar", kWh: 75, couleur: "jaune" },
    { marque: "EpheCar", kWh: 105, couleur: "orange" },
    { marque: "ToCar", kWh: 60, couleur: "jaune" },
    { marque: "EpheCar", kWh: 100, couleur: "bleu" }
  ];

  // Créer une table
  var table = document.createElement('table');

  // Créer l'en-tête de la table avec les titres des colonnes
  var thead = document.createElement('thead');
  var headerRow = document.createElement('tr');
  var headers = ["marque", "batterie", "couleur"];

  headers.forEach(function(headerText) {
    var th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Créer le corps de la table avec les données des voitures
  var tbody = document.createElement('tbody');
  
  voitures.forEach(function(voiture) {
    var row = document.createElement('tr');
    var marqueCell = document.createElement('td');
    var batterieCell = document.createElement('td');
    var couleurCell = document.createElement('td');

    marqueCell.textContent = voiture.marque;
    batterieCell.textContent = voiture.kWh + " kWh";
    couleurCell.textContent = voiture.couleur;

    row.appendChild(marqueCell);
    row.appendChild(batterieCell);
    row.appendChild(couleurCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  // Ajouter la table à la fin du corps de la page
  document.body.appendChild(table);
}

// Appeler la fonction pour ajouter la table à la page
ajouterTable()