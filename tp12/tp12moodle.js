let tabObj = [ 
    {nom:'Smith',prenom:'Will',matricule:'HE002'},
    {nom:'Delve',prenom:'Yves',matricule:'HE007'},
    {nom:'Noël ',prenom:'John',matricule:'HE005'}
    ];
    
    let tabAssoc ={};
    
    tabObj.forEach(p => {
        tabAssoc[p.matricule] = {
          nom: p.nom,
        prenom: p.prenom
      }
    })
    
    console.log(tabAssoc)

    let etudiants = {
        HE002: {nom: 'jean',   sexe: 'm', age: 18, ville: 1348},
        HE014: {nom: 'marie',  sexe: 'f', age: 19, ville: 5000},
        HE009: {nom: 'pierre', sexe: 'm', age: 20, ville: 6000},
        HE011: {nom: 'eve',    sexe: 'f', age: 18, ville: 1000},
        HE015: {nom: 'zoé',    sexe: 'f', age: 19, ville: 1000},
        HE021: {nom: 'john',   sexe: 'm', age: 20, ville: 1300}
      };
      
      let villes = {
        1000: 'Bruxelles',
        1348: 'Louvain-la-neuve',
        1300: "Wavre",
        5000: 'Namur',
        6000: 'Mons'
      };
      
      let cle = Object.keys(etudiants);
      let tab = [];
      for(let i in etudiants) {
          tab.push(etudiants[i])
      }
      
      tab.sort((a,b) => {
        if(a.age > b.age) return 1
        if(a.age < b.age) return -1
        if(villes[a.ville] >villes[b.ville]) return 1
        if(villes[a.ville] < villes[b.ville]) return -1
        if(a.nom > b.nom) return 1
        if(a.nom < b.nom) return -1
        return 0
      })
      
      for(let i in tab) {
          console.log(tab[i].age + ' ' + tab[i].nom + ' ' + villes[tab[i].ville])
      }