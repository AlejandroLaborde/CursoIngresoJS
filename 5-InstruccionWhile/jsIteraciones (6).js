function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numerosIngresados;

	while (contador!=5)
	{
		contador++;
		numerosIngresados=prompt("ingrese un numero");
		numerosIngresados=parseInt(numerosIngresados);
		acumulador=acumulador + numerosIngresados;

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN