/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var resultado;
	var precioUno = document.getElementById('PrecioUno').value;
	var precioDos = document.getElementById('PrecioDos').value;
	var precioTres = document.getElementById('PrecioTres').value;
	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	resultado=precioUno+precioDos+precioTres;

   alert("La suma es " + resultado);

}
function Promedio () 
{
	var resultado;
	var precioUno = document.getElementById('PrecioUno').value;
	var precioDos = document.getElementById('PrecioDos').value;
	var precioTres = document.getElementById('PrecioTres').value;
	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	resultado=(precioUno+precioDos+precioTres)/3;

   alert("El promedio es " + resultado);

	
}
function PrecioFinal () 
{
	var resultado;
	var precioUno = document.getElementById('PrecioUno').value;
	var precioDos = document.getElementById('PrecioDos').value;
	var precioTres = document.getElementById('PrecioTres').value;
	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	resultado=(precioUno+precioDos+precioTres);
	resultado=resultado + resultado*21/100;
   alert("El precio final es " + resultado);
}