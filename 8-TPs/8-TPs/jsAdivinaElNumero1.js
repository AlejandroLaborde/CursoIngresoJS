/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var contadorIntentos;
var numeroRandom;
var numeroSecreto;


function comenzar()
{
	contadorIntentos=0;
	numeroSecreto=Math.floor((Math.random() *100)+1);
	console.log(numeroSecreto);
	document.getElementById('intentos').value = contadorIntentos;

}
	
function verificar()
{	
	numeroRandom=document.getElementById('numero').value;
	numeroRandom= parseInt(numeroRandom);
	/*if (numeroRandom == numeroSecreto)
	{
		alert ("ganaste")

	}
	*/


	switch (numeroRandom)
	{
		case numeroSecreto :
			alert("ganaste");
		break;

		default:
			contadorIntentos++;
			document.getElementById('intentos').value = contadorIntentos
			if(numeroSecreto>numeroSecreto)
			{
				alert("el numero es mas grande");
			}else
			{
				alert("el numero es mas chico");
			}
	}
	alert("sale del switch");
	

}