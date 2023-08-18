function getElem(id) {
    // renvoie le contenu de l'élément d'identifiant id // exemple : ... = getElem('titr');
    const e = document.getElementById(id); // référence
    if (e) {
      return e.innerHTML;
    }
  }
  
  function setElem(id, v) {
    const e = document.getElementById(id);
    if (e) e.innerHTML = v
  }
       
  function addElem(id, v) {
    const e = document.getElementById(id);
    if (e) e.innerHTML += v
  }
       
  function setCss(id, p, v) {
    const e = document.getElementById(id); // référence
    if (e) e.style[p] = v;
  }
       
  function setCssClass(id, c) {
    const e = document.getElementById(id);
    if (e) e.className = c;
  }
       
  function getTags(o, nm){
    if (o) return o.getElementsByTagName(nm)
  }
       
  function getClasses(o, nm){
    if (o) return o.getElementsByClassName(nm);
  }
  
  function refElem(id){
    return document.getElementById(id);
  }