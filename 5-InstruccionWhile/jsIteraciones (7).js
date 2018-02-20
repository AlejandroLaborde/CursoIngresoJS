function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='no';
	var numerosIngresados;

	while (respuesta != "si")
	{
		contador++;
		numerosIngresados=prompt("ingrese un numero");
		numerosIngresados=parseInt(numerosIngresados);
		acumulador=acumulador + numerosIngresados;
		respuesta=prompt("si desea sumar los numeros hasta aqui ingrese 'si' ");

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN