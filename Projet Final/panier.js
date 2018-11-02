
var items = 2;

function supprItem(item){
   
    document.getElementById(item).style.display='none';
    
items--;
if(items == 0){
    document.getElementById("panier_vide").style.display = "block";
    document.getElementById("panier_plein").style.display = "none";

}else{
    document.getElementById("panier_vide").style.display = "none";
}
}