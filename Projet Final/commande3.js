sessionStorage.nom;
sessionStorage.prenom;

function test(){
	sessionStorage.nom = document.getElementById("nom1").value.trim();
	sessionStorage.prenom = document.getElementById("nom2").value.trim();
	PageSuivante();
}

function VerifNom(){
	
	var nom = document.getElementById("nom1").value.trim();
	var regex = new RegExp('^[a-zA-Z]+[- ]?[a-zA-Z]+$');
	var result= regex.test(nom);
	
	if (result == 1 ){
		document.getElementById("bar1").style.background="rgba(0, 255, 0, 0.5)";
	}
	else{
		document.getElementById("bar1").style.background="rgba(255, 0, 0, 0.5)";
	}
	return result;
}

function VerifPrenom(){
	
	var nom = document.getElementById("nom2").value.trim();
	var regex = new RegExp('^[a-zA-Z]+[- ]?[a-zA-Z]+$');
	var result= regex.test(nom);
	
	if (result == 1 ){
		document.getElementById("bar2").style.background="rgba(0, 255, 0, 0.5)";
	}
	else{
		document.getElementById("bar2").style.background="rgba(255, 0, 0, 0.5)";
	}
	return result;
}

function VerifCarte(){
	var num = document.getElementById("carte").value.trim();
	var regex = new RegExp('^[0-9]{4}[- ]{0,1}[0-9]{4}[- ]{0,1}[0-9]{4}[- ]{0,1}[0-9]{4}$');
	var result = regex.test(num);
	
	if (result == 1 ){
		document.getElementById("bar3").style.background="rgba(0, 255, 0, 0.5)";
	}
	else{
		document.getElementById("bar3").style.background="rgba(255, 0, 0, 0.5)";
	}
	return result;
}

function VerifExpiration(){
	var mois = document.getElementById("select1").value;
	var annee = document.getElementById("select2").value;
	var x = document.getElementsByTagName("H4");
	
	if( annee == "AucuneSelection" && mois == "AucuneSelection"){
		x[0].style.borderBottom = "2px solid rgba(255, 0, 0, 0.5)";
		return 0;
	}
	else{
		x[0].style.borderBottom = "2px solid rgba(0, 255, 0, 0.5)";
		return 1;
	}
}


function VerifCode(){
	var code = document.getElementById("code").value.trim();
	var regex= new RegExp('^[0-9]{3}$');
	var result= regex.test(code);
	
	if (result == 1){
		document.getElementById("bar4").style.background = "rgba(0, 255, 0, 0.5)";
	}
	else{
		document.getElementById("bar4").style.background = "rgba(255, 0, 0, 0.5)";
	}
	return result;
}

function VerifPaiement(){
	var paiement = document.getElementById("select0").value;
	var x = document.getElementsByTagName("SELECT");
	
	if( paiement == "AucuneSelection"){
		x[0].style.borderBottom = "2px solid rgba(255, 0, 0, 0.5)";
		return 0;
	}
	else{
		x[0].style.borderBottom = "2px solid rgba(0, 255, 0, 0.5)";
		return 1;
	}
}


function PageSuivante(){
	var verif1 = VerifNom();
	var verif2 = VerifPrenom();
	var verif3 = VerifCarte();
	var verif4 = VerifCode();
	var verif5 = VerifExpiration();
	var verif6 = VerifPaiement();
		
	if(verif1 == 1 && verif2 == 1 && verif3 == 1 && verif4 == 1 && verif5 == 1 && verif6 == 1){
			document.location='commande4.html';
	}
}
	


function Verification(){
	
	var nom = sessionStorage.nom;
	var prenom = sessionStorage.prenom;
	
	var div = document.getElementById("text");
	div.textContent= nom+" "+prenom+" confirmez-vous votre commande chez HUSH ?";
	
	
}