function verifN(){
  var nom=document.getElementById("nom1").value.trim();
  var regex = new RegExp('^[a-zA-Z]+[- ]{0,1}[a-zA-Z]+$');
  var result= regex.test(nom);
  if (result == true) {
    document.getElementById("bar1").style.background ="rgba(0, 255, 0, 0.5)";
  }else{
    document.getElementById("bar1").style.background="rgba(255, 0, 0, 0.5)";
  }
  return result;
}

function verifP(){
  var Pnom=document.getElementById("nom2").value.trim();
  var regex = new RegExp('^[a-zA-Z]+[- ]{0,1}[a-zA-Z]+$');
  var result= regex.test(Pnom);
  if (result == true) {
    document.getElementById("bar2").style.background ="rgba(0, 255, 0, 0.5)";
  }else{
    document.getElementById("bar2").style.background="rgba(255, 0, 0, 0.5)";
  }
  return result;
}

function verifV(){
  var Ville=document.getElementById("Ville").value.trim();
  var regex = new RegExp('^[a-zA-Z]+[- ]{0,1}[a-zA-Z]+$');
  var result= regex.test(Ville);
  if (result == true) {
    document.getElementById("bar3").style.background ="rgba(0, 255, 0, 0.5)";
  }else{
    document.getElementById("bar3").style.background="rgba(255, 0, 0, 0.5)";
  }
  return result;
}

function verifNum(){
  var nombre=document.getElementById("numero").value.trim();
  var regex = new RegExp('^[0-9]+$');
  var result= regex.test(nombre);
  if (result == true) {
    document.getElementById("bar4").style.background ="rgba(0, 255, 0, 0.5)";
  }else{
    document.getElementById("bar4").style.background="rgba(255, 0, 0, 0.5)";
  }
  return result;
}

function verifA(){
  var adresse=document.getElementById("adresse").value.trim();
  var regex = new RegExp('^[a-zA-Z]+[- ]{0,1}[a-zA-Z]+[- ]{0,1}[a-zA-Z]+[- ]{0,1}[a-zA-Z]+[- ]{0,1}[a-zA-Z]+$');
  var result= regex.test(adresse);
  if (result == true) {
    document.getElementById("bar5").style.background ="rgba(0, 255, 0, 0.5)";
  }else{
    document.getElementById("bar5").style.background="rgba(255, 0, 0, 0.5)";
  }
  return result;
}

function verifCA(){
  var Comp=document.getElementById("Complement").value.trim();
  var regex = new RegExp('^[a-zA-Z0-9]+[ ]{0,1}[a-zA-Z0-9]+$');
  var result= regex.test(Comp);
  if (result == true) {
    document.getElementById("bar6").style.background ="rgba(0, 255, 0, 0.5)";
  }else{
    document.getElementById("bar6").style.background="rgba(255, 0, 0, 0.5)";
  }
  return result;
}

function verifCode(){
  var CodeP=document.getElementById("Code").value.trim();
  var regex = new RegExp('^[0-9]+$');
  var result= regex.test(CodeP);
  if (result == true) {
    document.getElementById("bar7").style.background ="rgba(0, 255, 0, 0.5)";
  }else{
    document.getElementById("bar7").style.background="rgba(255, 0, 0, 0.5)";
  }
  return result;
}

function verifTel(){
  var tel=document.getElementById("NumTel").value.trim();
  var regex = new RegExp('^0[1-9][0-9]{8}$');
  var result= regex.test(tel);
  if (result == true) {
    document.getElementById("bar8").style.background ="rgba(0, 255, 0, 0.5)";
  }else{
    document.getElementById("bar8").style.background="rgba(255, 0, 0, 0.5)";
  }
  return result;
}

function verifMail(){
  var Mail=document.getElementById("mail").value.trim();
  var regex = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$');
  var result= regex.test(Mail);
  if (result == true) {
    document.getElementById("bar9").style.background ="rgba(0, 255, 0, 0.5)";
  }else{
    document.getElementById("bar9").style.background="rgba(255, 0, 0, 0.5)";
  }

  return result;
}

function verifAll(){


  if (true!=verifN() || verifP()!=true || verifV()!=true || verifA()!=true || verifNum()!=true || verifTel()!=true
         || verifMail()!=true || verifCode()!==true ) {
    verifN();
    verifP();
    verifV();
    verifA();
    verifNum();
    verifTel();
    verifMail();
    verifCode();


  }else{
     document.location='commande2.html';
  }

}

function verifAll2(){


  if (verifV()!=true || verifA()!=true || verifNum()!=true || verifCode()!==true ) {

    verifV();
    verifA();
    verifNum();
    verifCode();


  }else{
     document.location='commande3.html';
  }

}
