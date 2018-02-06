/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var resultado;
	var Largo; 
	var Ancho;

	Largo=document.getElementById('Largo').value ;
	Ancho=document.getElementById('Ancho').value ;
	
	Largo=parseInt(Largo);
	Ancho=parseInt(Ancho);

	resultado=(Largo+Ancho)*6; // se multiplica por 2 para completar el rectacngulo y x 3 por la cantidad de alambres x lado

	alert("El rectangulo de alambre es " + resultado);
}
function Circulo () 
{
	var resultado;
	var radio; 
	
	radio=document.getElementById('Radio').value ;
	
	radio=parseInt(radio); 
	
	resultado=2*radio*3.14*3;

	alert("La cantidad de alambre necesesario es " + resultado);
	
}
function Materiales () 
{
	var resultado;
	var Largo; 
	var Ancho;
	var cemento;
	var cal;

	Largo=document.getElementById('Largo').value ;
	Ancho=document.getElementById('Ancho').value ;
	
	Largo=parseInt(Largo);
	Ancho=parseInt(Ancho);

	resultado=Largo*Ancho;
	cal=3*resultado;
	cemento=2*resultado;

	alert("Se necesitan de cemento " +  cemento + " bolsas y de cal " + cal + " bolsas");
	
}