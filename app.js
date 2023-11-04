const gestionInput = document.querySelector(".gestion-input");
const gestionBouton = document.querySelector(".gestion-bouton");
const gestionList = document.querySelector(".gestion-list");

//ecouteurs
gestionBouton.addEventListener("click", addgestion);
gestionList.addEventListener("click", deleteCheck);

//fonction
function addgestion(event){
   event.preventDefault();
   //gestion Div
   const gestionDiv = document.createElement("div");
   gestionDiv.classList.add("gestion");
   //creer li
   const newgestion = document.createElement("li");
   newgestion.innerText = gestionInput.value;
   newgestion.classList.add("gestion-item");
   gestionDiv.appendChild(newgestion);
   //bouton check
   const completedbouton = document.createElement("bouton");
   completedbouton.innerHTML = '<i class="fas fa-check"></i>';
   completedbouton.classList.add("complete-btn");
   gestionDiv.appendChild(completedbouton);
   //bouton supprimer
   const trashbouton = document.createElement("bouton");
   trashbouton.innerHTML = '<i class="fas fa-trash"></i>';
   trashbouton.classList.add("trash-btn");
   gestionDiv.appendChild(trashbouton);
   // ajouter notre gestion a gestion-list
   gestionList.appendChild(gestionDiv);
   gestionInput.value="";
}
function deletecheck(e){
    const item = e.target;
    if (item.classList[0]=="trash-btn"){
      item.parentElement.remove;
      gestion.remove();
    }
    
}