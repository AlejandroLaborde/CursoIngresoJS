function Mostrar()
{
	var numero01;
	var numero02;
	var resultado;

	numero01=prompt("ingrese el primer numero");
	numero02=prompt("ingrese el segundo numero");

	if(numero01 == numero02)
	{
		resultado=numero01 * numero02;
	}else
		{	
			numero01=parseInt(numero01);
			numero02=parseInt(numero02);
			if(numero01>numero02)
			{
				resultado=numero01 - numero02;
			}else
				{
					resultado=numero01 + numero02;
				}
		}

	document.write("el resultado es: " + resultado);
}
