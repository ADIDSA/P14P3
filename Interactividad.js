function Limpiar(){
	document.getElementById("miForm").reset();
}
var Calcular=function(n1,n2,n3){
	var N1=parseInt(document.getElementById("N1").value);
	var N2=parseInt(document.getElementById("N2").value);
    var N3=parseInt(document.getElementById("N3").value);
if(N1<N2 && N1<N3){
	var menor=N1
}
else{
	if(N2<N3){
		menor=N2
	}
	else{
		menor=N3
	}
}
return"El numero menor es:" + menor;
}

function Limpiar2() {
	document.getElementById("miForm").reset()
}
var yardas=function(n1){
	var Mt=parseInt(document.getElementById("Mt").value);
	var res=Mt*1.094;
	return res+"yardas";
}


function Limpiar3(){
	document.getElementById("miForm").reset()
}
var Pulgadas=function(n1){
	var Cm=parseInt(document.getElementById("Cm").value);
	var resultado= Cm/2.54;
	return resultado+"Pulgadas";
}

