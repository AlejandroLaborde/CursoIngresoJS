function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='no';
	var numerosIngresados;

	while (respuesta != "si")
	{
		contador++;
		numerosIngresados=prompt("ingrese un numero");
		numerosIngresados=parseInt(numerosIngresados);
		
		if(numerosIngresados>0)
		{
			positivo=positivo+numerosIngresados;
		}
		if(numerosIngresados<0)
		{
			negativo=negativo * numerosIngresados;
		}

		respuesta=prompt("si desea sumar los numeros hasta aqui ingrese 'si' ");
		
	}


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN