"use strict";

let taches = {};

let compteur;

function initialiserPage() {
    taches = {};
    compteur = 101;
}

function ajouterTache(form) {
    let obj = {};
    //recupere les données
    obj.nom  = form.nom.value
    obj.date = form.limite.value
    obj.improtance = form.improtance.value
    obj.duree = parseFloat(form.duree.value)
    obj.desc = form.description.value
    //les mettres dans taches 
    console.log(obj)
    //
    
    form.preventDefault();
    return false;
}