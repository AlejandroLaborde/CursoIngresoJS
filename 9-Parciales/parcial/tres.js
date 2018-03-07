function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo=document.getElementById('alrgo').value;
	ancho=document.getElementById('ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	perimetro= (largo * 2) + (ancho * 2);
	alambre=perimetro *3;
	alert(" la cantidad de alambre qe se necesita es de: " + alambre );




}
