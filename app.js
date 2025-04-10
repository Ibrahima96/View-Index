const ring = ()=>{
  let audio = new Audio
  audio.src = "/rings/rings.mp3"
  audio.play()
}



//récupération des data
let zoneView =document.getElementById('section')
let clear =document.getElementById('clear')
let egal =document.getElementById('equal')
let buttons = document.querySelectorAll('button[data-value]')

//je déclare un stock 
let stockOperater = "";

//recuperons tous les boutons avec un boucle
buttons.forEach(btn=>{
  btn.addEventListener('click',()=>{
   /****************************************************************************************************************************************
    * quand je clique sur une des btns récupère leurs contenu et stock-le sur {let stockOperater = "";}
    *mais je récupère quoi exemple: {data-value="+"}
   ****************************************************************************************************************************************/

   ring()
    stockOperater += btn.getAttribute('data-value')
    
    //afficher-le dans la zoneView en récupérant le texte avec innerText
    
    zoneView.innerText = stockOperater
  })
})


/*******************************************************************************************************************************************
 *
 * //fin pour la zone d'affiche
 *  
 *****************************************************************************************************************************************/

//maintenant place la fonction eval
egal.addEventListener('click',()=>{
  try {
  let result = eval(stockOperater)
  zoneView.innerText=result
  stockOperater= result.toString()
  confetti();
  } catch {
  zoneView.innerText="Erreur"
  stockOperater = "";
  }
})
/******************************************************************************************
 *
 * //effacer le contenu de la zone d'affichage
 *  
 *******************************************************************************************/

clear.addEventListener('click',()=>{
  stockOperater = "";
  zoneView.innerText = ""
})